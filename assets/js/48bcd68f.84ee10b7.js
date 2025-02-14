"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1567],{85383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(85893),i=t(11151);const r={},a="Not Diamond \xac\u25c7",s={id:"guides/integrations/notdiamond",title:"Not Diamond \xac\u25c7",description:"When building complex LLM workflows users may need to prompt different models according to accuracy,",source:"@site/docs/guides/integrations/notdiamond.md",sourceDirName:"guides/integrations",slug:"/guides/integrations/notdiamond",permalink:"/guides/integrations/notdiamond",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/integrations/notdiamond.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{}},d={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Custom routing",id:"custom-routing",level:2},{value:"Additional support",id:"additional-support",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"not-diamond-",children:"Not Diamond \xac\u25c7"}),"\n",(0,o.jsxs)(n.p,{children:["When building complex LLM workflows users may need to prompt different models according to accuracy,\ncost, or call latency. Users can use ",(0,o.jsx)(n.a,{href:"https://www.notdiamond.ai/",children:"Not Diamond"})," to route prompts in these workflows to the\nright model for their needs, helping maximize accuracy while saving on model costs."]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you have ",(0,o.jsx)(n.a,{href:"https://app.notdiamond.ai",children:"created an account"})," and ",(0,o.jsx)(n.a,{href:"https://app.notdiamond.ai/keys",children:"generated an API key"}),", then add your API\nkey to your env as ",(0,o.jsx)(n.code,{children:"NOTDIAMOND_API_KEY"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["![",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(4819).Z+"",children:"Create an API key"}),"]"]}),"\n",(0,o.jsx)(n.p,{children:"From here, you can"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["try the ",(0,o.jsx)(n.a,{href:"https://docs.notdiamond.ai/docs/quickstart",children:"quickstart guide"}),","]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.notdiamond.ai/docs/router-training-quickstart",children:"build a custom router"})," with W&B Weave and Not Diamond, or"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://chat.notdiamond.ai",children:"chat with Not Diamond"})," to see routing in action"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,o.jsxs)(n.p,{children:["Weave integrates with ",(0,o.jsx)(n.a,{href:"https://github.com/Not-Diamond/notdiamond-python",children:"Not Diamond's Python library"})," to ",(0,o.jsx)(n.a,{href:"/guides/tracking/ops",children:"automatically log API calls"}),".\nYou only need to run ",(0,o.jsx)(n.code,{children:"weave.init()"})," at the start of your workflow, then continue using the routed\nprovider as usual:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from notdiamond import NotDiamond\n\nimport weave\nweave.init(\'notdiamond-quickstart\')\n\nclient = NotDiamond()\nsession_id, provider = client.chat.completions.model_select(\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant."},\n        {"role": "user", "content": "Concisely explain merge sort."}\n    ],\n    model=[\'openai/gpt-4o\', \'anthropic/claude-3-5-sonnet-20240620\']\n)\n\nprint("LLM called: ", provider.provider)  # openai, anthropic, etc\nprint("Provider model: ", provider.model) # gpt-4o, claude-3-5-sonnet-20240620, etc\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-routing",children:"Custom routing"}),"\n",(0,o.jsxs)(n.p,{children:["You can also train your own ",(0,o.jsx)(n.a,{href:"https://docs.notdiamond.ai/docs/router-training-quickstart",children:"custom router"})," on ",(0,o.jsx)(n.a,{href:"/guides/core-types/evaluations",children:"Evaluations"}),", allowing Not Diamond to route prompts\naccording to eval performance for specialized use cases."]}),"\n",(0,o.jsx)(n.p,{children:"Start by training a custom router:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from weave.flow.eval import EvaluationResults\nfrom weave.integrations.notdiamond.custom_router import train_router\n\n# Build an Evaluation on gpt-4o and Claude 3.5 Sonnet\nevaluation = weave.Evaluation(...)\ngpt_4o = weave.Model(...)\nsonnet = weave.Model(...)\n\nmodel_evals = {\n    \'openai/gpt-4o\': evaluation.get_eval_results(gpt_4o),\n    \'anthropic/claude-3-5-sonnet-20240620\': evaluation.get_eval_results(sonnet),\n}\npreference_id = train_router(\n    model_evals=model_evals,\n    prompt_column="prompt",\n    response_column="actual",\n    language="en",\n    maximize=True,\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["By reusing this preference ID in any ",(0,o.jsx)(n.code,{children:"model_select"})," request, you can route your prompts\nto maximize performance and minimize cost on your evaluation data:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from notdiamond import NotDiamond\nclient = NotDiamond()\n\nimport weave\nweave.init(\'notdiamond-quickstart\')\n\nsession_id, provider = client.chat.completions.model_select(\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant."},\n        {"role": "user", "content": "Concisely explain merge sort."}\n    ],\n    model=[\'openai/gpt-4o\', \'anthropic/claude-3-5-sonnet-20240620\'],\n\n    # passing this preference ID reuses your custom router\n    preference_id=preference_id\n)\n\nprint("LLM called: ", provider.provider)  # openai, anthropic, etc\nprint("Provider model: ", provider.model) # gpt-4o, claude-3-5-sonnet-20240620, etc\n'})}),"\n",(0,o.jsx)(n.h2,{id:"additional-support",children:"Additional support"}),"\n",(0,o.jsxs)(n.p,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://docs.notdiamond.ai",children:"docs"})," or ",(0,o.jsx)(n.a,{href:"mailto:support@notdiamond.ai",children:"send us a message"})," for further support."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4819:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/files/api-keys-b793c80c39dec789d6cf5ee05619d2fe.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);