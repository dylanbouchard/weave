import {Alert, Box, Button, Typography} from '@mui/material';
import {
  DataGridPro as DataGrid,
  DataGridPro,
  GridColDef,
  GridColumnGroup,
  GridRowSelectionModel,
  useGridApiRef,
} from '@mui/x-data-grid-pro';
import * as _ from 'lodash';
import React, {
  ComponentProps,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useParams} from 'react-router-dom';

import {A, TargetBlank} from '../../../../common/util/links';
import {monthRoundedTime} from '../../../../common/util/time';
import {useWeaveContext} from '../../../../context';
import {
  isObjectTypeLike,
  isTypedDictLike,
  Type,
  typedDictPropertyTypes,
} from '../../../../core';
import {useDeepMemo} from '../../../../hookUtils';
import {parseRef} from '../../../../react';
import {ErrorBoundary} from '../../../ErrorBoundary';
import {Timestamp} from '../../../Timestamp';
import {BoringColumnInfo} from '../Browse3/pages/CallPage/BoringColumnInfo';
import {isPredictAndScoreOp} from '../Browse3/pages/common/heuristics';
import {CallLink, opNiceName} from '../Browse3/pages/common/Links';
import {StatusChip} from '../Browse3/pages/common/StatusChip';
import {renderCell, useURLSearchParamsDict} from '../Browse3/pages/util';
import {
  DICT_KEY_EDGE_NAME,
  OBJECT_ATTR_EDGE_NAME,
} from '../Browse3/pages/wfReactInterface/constants';
import {useWFHooks} from '../Browse3/pages/wfReactInterface/context';
import {opVersionRefOpName} from '../Browse3/pages/wfReactInterface/utilities';
import {
  CallSchema,
  OpVersionKey,
} from '../Browse3/pages/wfReactInterface/wfDataModelHooksInterface';
import {StyledDataGrid} from '../Browse3/StyledDataGrid';
import {flattenObject} from './browse2Util';
import {CellValue} from './CellValue';
import {CollapseGroupHeader} from './CollapseGroupHeader';
import {Browse2RootObjectVersionItemParams} from './CommonLib';
import {CustomGroupedColumnHeader} from './CustomGroupedColumnHeader';
import {ExpandHeader} from './ExpandHeader';
import {NotApplicable} from './NotApplicable';
import {RefValue} from './RefValue';
import {
  columnHasRefs,
  columnRefs,
  computeTableStats,
  getInputColumns,
  useColumnVisibility,
} from './tableStats';

export type DataGridColumnGroupingModel = Exclude<
  ComponentProps<typeof DataGrid>['columnGroupingModel'],
  undefined
>;

function addToTree(
  node: GridColumnGroup,
  fields: string[],
  fullPath: string,
  depth: number
): void {
  if (!fields.length) {
    return;
  }

  if (fields.length === 1) {
    node.children.push({
      field: fullPath,
    });
    return;
  }

  for (const child of node.children) {
    if ('groupId' in child && child.headerName === fields[0]) {
      addToTree(child as GridColumnGroup, fields.slice(1), fullPath, depth + 1);
      return;
    }
  }

  const newNode: GridColumnGroup = {
    headerName: fields[0],
    groupId: fullPath
      .split('.')
      .slice(0, depth + 2)
      .join('.'),
    children: [],
  };
  node.children.push(newNode);
  addToTree(newNode, fields.slice(1), fullPath, depth + 1);
}

export function buildTree(
  strings: string[],
  rootGroupName: string
): GridColumnGroup {
  const root: GridColumnGroup = {groupId: rootGroupName, children: []};

  for (const str of strings) {
    const fields = str.split('.');
    addToTree(root, fields, rootGroupName + '.' + str, 0);
  }

  return root;
}

type OpVersionIndexTextProps = {
  opVersionRef: string;
};

const OpVersionIndexText = ({opVersionRef}: OpVersionIndexTextProps) => {
  const {useOpVersion} = useWFHooks();
  const ref = parseRef(opVersionRef);
  let opVersionKey: OpVersionKey | null = null;
  if ('weaveKind' in ref && ref.weaveKind === 'op') {
    opVersionKey = {
      entity: ref.entityName,
      project: ref.projectName,
      opId: ref.artifactName,
      versionHash: ref.artifactVersion,
    };
  }
  const opVersion = useOpVersion(opVersionKey);
  return opVersion.result ? (
    <span>v{opVersion.result.versionIndex}</span>
  ) : null;
};

type ExtraColumns = Record<string, Array<{label: string; path: string}>>;

const isExpandableType = (type: Type): boolean => {
  return isObjectTypeLike(type) || isTypedDictLike(type);
};

const getExtraColumns = (
  result: Type[]
): Array<{label: string; path: string}> => {
  const cols: {[label: string]: string} = {};
  for (const refInfo of result) {
    if (isObjectTypeLike(refInfo)) {
      const keys = Object.keys(refInfo).filter(
        k => k !== 'type' && !k.startsWith('_')
      );
      keys.forEach(k => {
        const innerType = (refInfo as any)[k] as Type;
        if (isExpandableType(innerType)) {
          const subKeys = getExtraColumns([innerType]);
          subKeys.forEach(sk => {
            cols[k + '.' + sk.label] =
              k + `/${OBJECT_ATTR_EDGE_NAME}/` + sk.path;
          });
        } else {
          cols[k] = k;
        }
      });
    } else if (isTypedDictLike(refInfo)) {
      const propTypes = typedDictPropertyTypes(refInfo);
      const keys = Object.keys(propTypes);
      keys.forEach(k => {
        const innerType = propTypes[k] as Type;
        if (isExpandableType(innerType)) {
          const subKeys = getExtraColumns([innerType]);
          subKeys.forEach(sk => {
            cols[k + '.' + sk.label] = k + `/${DICT_KEY_EDGE_NAME}/` + sk.path;
          });
        } else {
          cols[k] = k;
        }
      });
    }
  }
  return Object.entries(cols).map(([label, path]) => ({label, path}));
};

// Get the tail of the peekPath (ignore query params)
const getPeekId = (peekPath: string | null): string | null => {
  if (!peekPath) {
    return null;
  }
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const url = new URL(peekPath, baseUrl);
  const {pathname} = url;
  return pathname.split('/').pop() ?? null;
};

export const RunsTable: FC<{
  loading: boolean;
  spans: CallSchema[];
  clearFilters?: null | (() => void);
  ioColumnsOnly?: boolean;
}> = ({loading, spans, clearFilters, ioColumnsOnly}) => {
  // Support for expanding and collapsing ref values in columns
  // This is a set of fields that have been expanded.
  const weave = useWeaveContext();
  const {
    derived: {useGetRefsType},
  } = useWFHooks();
  const {client} = weave;
  const [expandedRefCols, setExpandedRefCols] = useState<Set<string>>(
    new Set<string>().add('input.example')
  );
  const onExpand = (col: string) => {
    setExpandedRefCols(prevState => new Set(prevState).add(col));
  };
  const onCollapse = (col: string) => {
    setExpandedRefCols(prevState => {
      const newSet = new Set(prevState);
      newSet.delete(col);
      return newSet;
    });
  };

  const [expandedColInfo, setExpandedColInfo] = useState<ExtraColumns>({});

  const isSingleOpVersion = useMemo(() => {
    return _.uniq(spans.map(span => span.rawSpan.name)).length === 1;
  }, [spans]);
  const uniqueSpanNames = useMemo(() => {
    return _.uniq(spans.map(span => span.spanName));
  }, [spans]);
  const isSingleOp = useMemo(() => {
    return uniqueSpanNames.length === 1;
  }, [uniqueSpanNames]);

  const apiRef = useGridApiRef();
  // Have to add _result when null, even though we try to do this in the python
  // side
  spans = useMemo(
    () =>
      spans.map(s => ({
        ...s,
        output: s.rawSpan.output == null ? {_result: null} : s.rawSpan.output,
      })),
    [spans]
  );
  const params = useParams<Browse2RootObjectVersionItemParams>();

  let onlyOneOutputResult = true;
  for (const s of spans) {
    // get display keys
    const keys = Object.keys(
      _.omitBy(
        flattenObject(s.rawSpan.output!),
        (v, k) => v == null || (k.startsWith('_') && k !== '_result')
      )
    );
    // ensure there is only one output _result
    if (keys.length > 1 || (keys[0] && keys[0] !== '_result')) {
      onlyOneOutputResult = false;
      break;
    }
  }

  const tableData = useMemo(() => {
    return spans.map((call: CallSchema) => {
      const argOrder = call.rawSpan.inputs._input_order;
      let args: Record<string, any> = {};
      if (call.rawSpan.inputs._keys) {
        for (const key of call.rawSpan.inputs._keys) {
          args[key] = call.rawSpan.inputs[key];
        }
      } else {
        args = _.fromPairs(
          Object.entries(call.rawSpan.inputs).filter(
            ([k, c]) => c != null && !k.startsWith('_')
          )
        );
      }

      if (argOrder) {
        args = _.fromPairs(argOrder.map((k: string) => [k, args[k]]));
      }

      return {
        id: call.callId,
        call,
        loading,
        opVersion: call.opVersionRef,
        isRoot: call.parentId == null,
        trace_id: call.traceId,
        status_code: call.rawSpan.status_code,
        timestampMs: call.rawSpan.timestamp,
        latency: call.rawSpan.summary.latency_s,
        ..._.mapKeys(
          _.omitBy(args, v => v == null),
          (v, k) => {
            return 'input.' + k;
          }
        ),
        ..._.mapKeys(
          _.omitBy(
            flattenObject(call.rawSpan.output!),
            (v, k) => v == null || (k.startsWith('_') && k !== '_result')
          ),
          (v, k) => {
            // If there is only one output _result, we don't need to nest it
            if (onlyOneOutputResult && k === '_result') {
              return 'output';
            }
            return 'output.' + k;
          }
        ),
        ..._.mapKeys(
          flattenObject(call.rawFeedback ?? {}),
          (v, k) => 'feedback.' + k
        ),
        ..._.mapKeys(
          flattenObject(call.rawSpan.attributes ?? {}),
          (v, k) => 'attributes.' + k
        ),
      };
    });
  }, [loading, onlyOneOutputResult, spans]);
  const tableStats = useMemo(() => {
    return computeTableStats(tableData);
  }, [tableData]);
  const getRefsType = useGetRefsType();
  useEffect(() => {
    const fetchData = async () => {
      for (const col of expandedRefCols) {
        if (!(col in expandedColInfo)) {
          const refs = columnRefs(tableStats, col);
          const refTypes = await getRefsType(refs);
          const extraCols = getExtraColumns(refTypes);
          if (tableStats.rowCount !== 0) {
            setExpandedColInfo(prevState => ({
              ...prevState,
              [col]: extraCols,
            }));
          }
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedRefCols, client, tableStats]);

  const {allShown, columnVisibilityModel, forceShowAll, setForceShowAll} =
    useColumnVisibility(tableStats);
  const showVisibilityAlert = !isSingleOpVersion && !allShown && !forceShowAll;

  // Highlight table row if it matches peek drawer.
  const query = useURLSearchParamsDict();
  const {peekPath} = query;
  const peekId = getPeekId(peekPath);
  const rowIds = useMemo(() => {
    return tableData.map(row => row.id);
  }, [tableData]);
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);
  useEffect(() => {
    if (rowIds.length === 0) {
      // Data may have not loaded
      return;
    }
    if (peekId == null) {
      // No peek drawer, clear any selection
      setRowSelectionModel([]);
    } else {
      // If peek drawer matches a row, select it.
      // If not, don't modify selection.
      if (rowIds.includes(peekId)) {
        setRowSelectionModel([peekId]);
      }
    }
  }, [rowIds, peekId]);

  // Custom logic to control path preservation preference
  const preservePath = useMemo(() => {
    return (
      uniqueSpanNames.length === 1 &&
      isPredictAndScoreOp(opNiceName(uniqueSpanNames[0]))
    );
  }, [uniqueSpanNames]);

  const columns = useMemo(() => {
    const cols: Array<GridColDef<(typeof tableData)[number]>> = [
      {
        field: 'span_id',
        headerName: 'Trace',
        minWidth: 100,
        width: 250,
        hideable: false,
        renderCell: rowParams => {
          const opVersion = rowParams.row.call.opVersionRef;
          if (opVersion == null) {
            return rowParams.row.call.spanName;
          }
          return (
            <CallLink
              entityName={params.entity}
              projectName={params.project}
              opName={opVersionRefOpName(opVersion)}
              callId={rowParams.row.id}
              fullWidth={true}
              preservePath={preservePath}
            />
          );
        },
      },
      ...(isSingleOp && !isSingleOpVersion
        ? [
            {
              field: 'opVersionIndex',
              headerName: 'Op Version',
              type: 'number',
              align: 'right' as const,
              disableColumnMenu: true,
              sortable: false,
              filterable: false,
              resizable: false,
              renderCell: (cellParams: any) => (
                <OpVersionIndexText opVersionRef={cellParams.row.opVersion} />
              ),
            },
          ]
        : []),
      // {
      //   field: 'user_id',
      //   headerName: 'User',
      //   disableColumnMenu: true,
      //   renderCell: cellParams => {
      //     return (
      //       <div style={{margin: 'auto'}}>
      //         {cellParams.row.call.userId ?? <NotApplicable />}
      //       </div>
      //     );
      //   },
      // },
      // {
      //   field: 'run_id',
      //   headerName: 'Run',
      //   disableColumnMenu: true,
      //   renderCell: cellParams => {
      //     return (
      //       <div style={{margin: 'auto'}}>
      //         {cellParams.row.call.runId ?? <NotApplicable />}
      //       </div>
      //     );
      //   },
      // },
      {
        field: 'status_code',
        headerName: 'Status',
        sortable: false,
        disableColumnMenu: true,
        resizable: false,
        width: 70,
        minWidth: 70,
        maxWidth: 70,
        renderCell: cellParams => {
          return (
            <div style={{margin: 'auto'}}>
              <StatusChip value={cellParams.row.status_code} iconOnly />
            </div>
          );
        },
      },
      ...(!ioColumnsOnly
        ? [
            {
              field: 'timestampMs',
              headerName: 'Called',
              width: 100,
              minWidth: 100,
              maxWidth: 100,
              renderCell: (cellParams: any) => {
                return (
                  <Timestamp
                    value={cellParams.row.timestampMs / 1000}
                    format="relative"
                  />
                );
              },
            },
          ]
        : []),
    ];
    const colGroupingModel: DataGridColumnGroupingModel = [];
    const row0 = spans[0];
    if (row0 == null) {
      return {cols: [], colGroupingModel: []};
    }

    let attributesKeys: {[key: string]: true} = {};
    spans.forEach(span => {
      for (const [k, v] of Object.entries(
        flattenObject(span.rawSpan.attributes ?? {})
      )) {
        if (v != null && k !== '_keys') {
          attributesKeys[k] = true;
        }
      }
    });
    // sort shallowest keys first
    attributesKeys = _.fromPairs(
      Object.entries(attributesKeys).sort((a, b) => {
        const aDepth = a[0].split('.').length;
        const bDepth = b[0].split('.').length;
        return aDepth - bDepth;
      })
    );

    const attributesOrder = Object.keys(attributesKeys);
    const attributesGrouping = buildTree(attributesOrder, 'attributes');
    colGroupingModel.push(attributesGrouping);
    for (const key of attributesOrder) {
      if (!key.startsWith('_')) {
        cols.push({
          flex: 1,
          minWidth: 150,
          field: 'attributes.' + key,
          headerName: key.split('.').slice(-1)[0],
          renderCell: cellParams => {
            return renderCell((cellParams.row as any)['attributes.' + key]);
          },
        });
      }
    }

    const inputOrder = !isSingleOpVersion
      ? getInputColumns(tableStats)
      : row0.rawSpan.inputs._arg_order ??
        row0.rawSpan.inputs._keys ??
        Object.keys(_.omitBy(row0.rawSpan.inputs, v => v == null)).filter(
          k => !k.startsWith('_')
        );
    const inputGroup: Exclude<
      ComponentProps<typeof DataGrid>['columnGroupingModel'],
      undefined
    >[number] = {
      groupId: 'inputs',
      children: [],
    };
    for (const key of inputOrder) {
      const field = 'input.' + key;
      const isExpanded = expandedRefCols.has(field);
      cols.push({
        ...(isExpanded
          ? {
              width: 100,
            }
          : {
              flex: 1,
              minWidth: 150,
            }),
        field,
        renderHeader: () => {
          const hasExpand = columnHasRefs(tableStats, field);
          return (
            <ExpandHeader
              headerName={isExpanded ? 'Ref' : key}
              field={field}
              hasExpand={hasExpand && !isExpanded}
              onExpand={onExpand}
            />
          );
        },
        renderCell: cellParams => {
          if (field in cellParams.row) {
            const value = (cellParams.row as any)[field];
            return <CellValue value={value} isExpanded={isExpanded} />;
          }
          return <NotApplicable />;
        },
      });
      if (isExpanded) {
        const inputGroupChildren = [{field}];
        const expandCols = expandedColInfo[field] ?? [];
        for (const col of expandCols) {
          const expandField = field + '.' + col.label;
          cols.push({
            flex: 1,
            field: expandField,
            renderHeader: headerParams => {
              return (
                <CustomGroupedColumnHeader
                  field={headerParams.field}
                  // TODO: after merging object store stuff - re-write expansion logic. This should be grouped.
                  titleOverride={col.label}
                />
              );
            },
            renderCell: cellParams => {
              const weaveRef = (cellParams.row as any)[field];
              if (weaveRef === undefined) {
                return <NotApplicable />;
              }
              return (
                <ErrorBoundary>
                  <RefValue weaveRef={weaveRef} attribute={col.path} />
                </ErrorBoundary>
              );
            },
          });
          inputGroupChildren.push({field: expandField});
        }
        inputGroup.children.push({
          groupId: field,
          headerName: key,
          children: inputGroupChildren,
          renderHeaderGroup: () => {
            return (
              <CollapseGroupHeader
                headerName={key}
                field={field}
                onCollapse={onCollapse}
              />
            );
          },
        });
      } else {
        inputGroup.children.push({field});
      }
    }
    colGroupingModel.push(inputGroup);

    // All output keys as we don't have the order key yet.
    if (onlyOneOutputResult) {
      // If there is only one output _result, we don't need to do all the work on outputs
      cols.push({
        flex: 1,
        minWidth: 150,
        field: 'output',
        headerName: 'output',
        renderCell: cellParams => {
          return <CellValue value={(cellParams.row as any).output} />;
        },
      });
    } else {
      let outputKeys: {[key: string]: true} = {};
      spans.forEach(span => {
        for (const [k, v] of Object.entries(
          flattenObject(span.rawSpan.output ?? {})
        )) {
          if (v != null && (!k.startsWith('_') || k === '_result')) {
            outputKeys[k] = true;
          }
        }
      });
      // sort shallowest keys first
      outputKeys = _.fromPairs(
        Object.entries(outputKeys).sort((a, b) => {
          const aDepth = a[0].split('.').length;
          const bDepth = b[0].split('.').length;
          return aDepth - bDepth;
        })
      );

      const outputOrder = Object.keys(outputKeys);
      const outputGrouping = buildTree(outputOrder, 'output');
      colGroupingModel.push(outputGrouping);
      for (const key of outputOrder) {
        const field = 'output.' + key;
        const isExpanded = expandedRefCols.has(field);
        cols.push({
          flex: 1,
          minWidth: 150,
          field,
          renderHeader: () => {
            const hasExpand = columnHasRefs(tableStats, field);
            const tail = key.split('.').slice(-1)[0];
            return (
              <ExpandHeader
                headerName={isExpanded ? 'Ref' : tail}
                field={field}
                hasExpand={hasExpand && !isExpanded}
                onExpand={onExpand}
              />
            );
          },
          renderCell: cellParams => {
            if (field in cellParams.row) {
              const value = (cellParams.row as any)[field];
              return <CellValue value={value} isExpanded={isExpanded} />;
            }
            return <NotApplicable />;
          },
        });
      }
    }

    let feedbackKeys: {[key: string]: true} = {};
    spans.forEach(span => {
      for (const [k, v] of Object.entries(
        flattenObject(span.rawFeedback ?? {})
      )) {
        if (v != null && k !== '_keys') {
          feedbackKeys[k] = true;
        }
      }
    });
    // sort shallowest keys first
    feedbackKeys = _.fromPairs(
      Object.entries(feedbackKeys).sort((a, b) => {
        const aDepth = a[0].split('.').length;
        const bDepth = b[0].split('.').length;
        return aDepth - bDepth;
      })
    );

    const feedbackOrder = Object.keys(feedbackKeys);
    const feedbackGrouping = buildTree(feedbackOrder, 'feedback');
    colGroupingModel.push(feedbackGrouping);
    for (const key of feedbackOrder) {
      cols.push({
        flex: 1,
        minWidth: 150,
        field: 'feedback.' + key,
        headerName: key.split('.').slice(-1)[0],
        renderCell: cellParams => {
          return renderCell((cellParams.row as any)['feedback.' + key]);
        },
      });
    }

    cols.push({
      field: 'latency',
      headerName: 'Latency',
      width: 100,
      minWidth: 100,
      maxWidth: 100,
      renderCell: cellParams => {
        return monthRoundedTime(cellParams.row.latency);
      },
    });

    return {cols, colGroupingModel};
  }, [
    expandedColInfo,
    expandedRefCols,
    ioColumnsOnly,
    isSingleOp,
    isSingleOpVersion,
    onlyOneOutputResult,
    params.entity,
    params.project,
    preservePath,
    spans,
    tableStats,
  ]);
  const autosized = useRef(false);
  // const {peekingRouter} = useWeaveflowRouteContext();
  // const history = useHistory();
  useEffect(() => {
    if (autosized.current) {
      return;
    }
    if (loading) {
      return;
    }
    autosized.current = true;
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      expand: true,
    });
  }, [apiRef, loading]);
  const initialStateRaw: ComponentProps<typeof DataGridPro>['initialState'] =
    useMemo(() => {
      if (loading) {
        return undefined;
      }
      return {
        pinnedColumns: {left: ['span_id']},
        sorting: {
          sortModel: [{field: 'timestampMs', sort: 'desc'}],
        },
        columns: {
          columnVisibilityModel,
        },
      };
    }, [loading, columnVisibilityModel]);

  // Various interactions (correctly) cause new data to be loaded, which causes
  // a trickle of state updates. However, if the ultimate state is the same,
  // we don't want to re-render the table.
  const initialState = useDeepMemo(initialStateRaw);
  // This is a workaround.
  // initialState won't take effect if columns are not set.
  // see https://github.com/mui/mui-x/issues/6206
  useEffect(() => {
    if (columns != null && initialState != null) {
      apiRef.current.restoreState(initialState);
    }
  }, [columns, initialState, apiRef]);

  return (
    <>
      {showVisibilityAlert && (
        <Alert
          severity="info"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => setForceShowAll(true)}>
              Show all
            </Button>
          }>
          Columns having many empty values have been hidden.
        </Alert>
      )}
      <BoringColumnInfo tableStats={tableStats} columns={columns.cols as any} />
      <StyledDataGrid
        columnHeaderHeight={40}
        apiRef={apiRef}
        loading={loading}
        rows={tableData}
        initialState={initialState}
        rowHeight={38}
        columns={columns.cols as any}
        experimentalFeatures={{columnGrouping: true}}
        disableRowSelectionOnClick
        rowSelectionModel={rowSelectionModel}
        columnGroupingModel={columns.colGroupingModel}
        hideFooterSelectedRowCount
        slots={{
          noRowsOverlay: () => {
            return (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Typography color="textSecondary">
                  No calls found.{' '}
                  {clearFilters != null ? (
                    <>
                      Try{' '}
                      <A
                        onClick={() => {
                          clearFilters();
                        }}>
                        clearing the filters
                      </A>{' '}
                      or l
                    </>
                  ) : (
                    'L'
                  )}
                  earn more about how to log calls by visiting{' '}
                  <TargetBlank href="https://wandb.me/weave">
                    the docs
                  </TargetBlank>
                  .
                </Typography>
              </Box>
            );
          },
        }}
      />
    </>
  );
};
