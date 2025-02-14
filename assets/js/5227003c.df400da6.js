"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9023],{22748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(85893),o=t(11151);const s={title:"Leaderboard Quickstart"},r="Leaderboard Quickstart",i={id:"reference/gen_notebooks/leaderboard_quickstart",title:"Leaderboard Quickstart",description:"Open in Colab",source:"@site/docs/reference/gen_notebooks/leaderboard_quickstart.md",sourceDirName:"reference/gen_notebooks",slug:"/reference/gen_notebooks/leaderboard_quickstart",permalink:"/reference/gen_notebooks/leaderboard_quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/reference/gen_notebooks/leaderboard_quickstart.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{title:"Leaderboard Quickstart"},sidebar:"notebookSidebar",previous:{title:"Log Calls from Existing CSV",permalink:"/reference/gen_notebooks/import_from_csv"},next:{title:"Structured Outputs for Multi-Agent Systems",permalink:"/reference/gen_notebooks/multi-agent-structured-output"}},c={},l=[{value:"Step 1: Generate a dataset of fake zip code data",id:"step-1-generate-a-dataset-of-fake-zip-code-data",level:2},{value:"Step 2: Author scoring functions",id:"step-2-author-scoring-functions",level:2},{value:"Step 3: Create a simple Evaluation",id:"step-3-create-a-simple-evaluation",level:2},{value:"Step 4: Evaluate a baseline model",id:"step-4-evaluate-a-baseline-model",level:2},{value:"Step 5: Create more Models",id:"step-5-create-more-models",level:2},{value:"Step 6: Create more Evaluations",id:"step-6-create-more-evaluations",level:2},{value:"Step 7: Review the Leaderboard",id:"step-7-review-the-leaderboard",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{title:"This is a notebook",type:"tip",children:[(0,a.jsx)("a",{href:"https://colab.research.google.com/github/wandb/weave/blob/master/docs/./notebooks/leaderboard_quickstart.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/d/d0/20221103151430%21Google_Colaboratory_SVG_Logo.svg",alt:"Open In Colab",height:"20px"}),(0,a.jsx)("div",{children:"Open in Colab"})]})}),(0,a.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/./notebooks/leaderboard_quickstart.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",alt:"View in Github",height:"15px"}),(0,a.jsx)("div",{children:"View in Github"})]})})]}),"\n",(0,a.jsx)(n.h1,{id:"leaderboard-quickstart",children:"Leaderboard Quickstart"}),"\n",(0,a.jsx)(n.p,{children:"In this notebook we will learn to use Weave's Leaderboard to compare model performance across different datasets and scoring functions. Specifically, we will:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Generate a dataset of fake zip code data"}),"\n",(0,a.jsx)(n.li,{children:"Author some scoring functions and evaluate a baseline model."}),"\n",(0,a.jsx)(n.li,{children:"Use these techniques to evaluate a matrix of models vs evaluations."}),"\n",(0,a.jsx)(n.li,{children:"Review the leaderboard in the Weave UI."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-1-generate-a-dataset-of-fake-zip-code-data",children:"Step 1: Generate a dataset of fake zip code data"}),"\n",(0,a.jsxs)(n.p,{children:["First we will create a function ",(0,a.jsx)(n.code,{children:"generate_dataset_rows"})," that generates a list of fake zip code data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import json\n\nfrom openai import OpenAI\nfrom pydantic import BaseModel\n\n\nclass Row(BaseModel):\n    zip_code: str\n    city: str\n    state: str\n    avg_temp_f: float\n    population: int\n    median_income: int\n    known_for: str\n\n\nclass Rows(BaseModel):\n    rows: list[Row]\n\n\ndef generate_dataset_rows(\n    location: str = "United States", count: int = 5, year: int = 2022\n):\n    client = OpenAI()\n\n    completion = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {\n                "role": "user",\n                "content": f"Please generate {count} rows of data for random zip codes in {location} for the year {year}.",\n            },\n        ],\n        response_format={\n            "type": "json_schema",\n            "json_schema": {\n                "name": "response_format",\n                "schema": Rows.model_json_schema(),\n            },\n        },\n    )\n\n    return json.loads(completion.choices[0].message.content)["rows"]\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init("leaderboard-demo")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-2-author-scoring-functions",children:"Step 2: Author scoring functions"}),"\n",(0,a.jsx)(n.p,{children:"Next we will author 3 scoring functions:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"check_concrete_fields"}),": Checks if the model output matches the expected city and state."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"check_value_fields"}),": Checks if the model output is within 10% of the expected population and median income."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"check_subjective_fields"}),': Uses a LLM to check if the model output matches the expected "known for" field.']}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'@weave.op\ndef check_concrete_fields(city: str, state: str, output: dict):\n    return {\n        "city_match": city == output["city"],\n        "state_match": state == output["state"],\n    }\n\n\n@weave.op\ndef check_value_fields(\n    avg_temp_f: float, population: int, median_income: int, output: dict\n):\n    return {\n        "avg_temp_f_err": abs(avg_temp_f - output["avg_temp_f"]) / avg_temp_f,\n        "population_err": abs(population - output["population"]) / population,\n        "median_income_err": abs(median_income - output["median_income"])\n        / median_income,\n    }\n\n\n@weave.op\ndef check_subjective_fields(zip_code: str, known_for: str, output: dict):\n    client = OpenAI()\n\n    class Response(BaseModel):\n        correct_known_for: bool\n\n    completion = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {\n                "role": "user",\n                "content": f"My student was asked what the zip code {zip_code} is best known best for. The right answer is \'{known_for}\', and they said \'{output[\'known_for\']}\'. Is their answer correct?",\n            },\n        ],\n        response_format={\n            "type": "json_schema",\n            "json_schema": {\n                "name": "response_format",\n                "schema": Response.model_json_schema(),\n            },\n        },\n    )\n\n    return json.loads(completion.choices[0].message.content)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-3-create-a-simple-evaluation",children:"Step 3: Create a simple Evaluation"}),"\n",(0,a.jsx)(n.p,{children:"Next we define a simple evaliation using our fake data and scoring functions."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'rows = generate_dataset_rows()\nevaluation = weave.Evaluation(\n    name="United States - 2022",\n    dataset=rows,\n    scorers=[\n        check_concrete_fields,\n        check_value_fields,\n        check_subjective_fields,\n    ],\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-4-evaluate-a-baseline-model",children:"Step 4: Evaluate a baseline model"}),"\n",(0,a.jsx)(n.p,{children:"Now we will evaluate a baseline model which returns a static response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'@weave.op\ndef baseline_model(zip_code: str):\n    return {\n        "city": "New York",\n        "state": "NY",\n        "avg_temp_f": 50.0,\n        "population": 1000000,\n        "median_income": 100000,\n        "known_for": "The Big Apple",\n    }\n\n\nawait evaluation.evaluate(baseline_model)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-5-create-more-models",children:"Step 5: Create more Models"}),"\n",(0,a.jsx)(n.p,{children:"Now we will create 2 more models to compare against the baseline."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'@weave.op\ndef gpt_4o_mini_no_context(zip_code: str):\n    client = OpenAI()\n\n    completion = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[{"role": "user", "content": f"""Zip code {zip_code}"""}],\n        response_format={\n            "type": "json_schema",\n            "json_schema": {\n                "name": "response_format",\n                "schema": Row.model_json_schema(),\n            },\n        },\n    )\n\n    return json.loads(completion.choices[0].message.content)\n\n\nawait evaluation.evaluate(gpt_4o_mini_no_context)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'@weave.op\ndef gpt_4o_mini_with_context(zip_code: str):\n    client = OpenAI()\n\n    completion = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[\n            {\n                "role": "user",\n                "content": f"""Please answer the following questions about the zip code {zip_code}:\n                   1. What is the city?\n                   2. What is the state?\n                   3. What is the average temperature in Fahrenheit?\n                   4. What is the population?\n                   5. What is the median income?\n                   6. What is the most well known thing about this zip code?\n                   """,\n            }\n        ],\n        response_format={\n            "type": "json_schema",\n            "json_schema": {\n                "name": "response_format",\n                "schema": Row.model_json_schema(),\n            },\n        },\n    )\n\n    return json.loads(completion.choices[0].message.content)\n\n\nawait evaluation.evaluate(gpt_4o_mini_with_context)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-6-create-more-evaluations",children:"Step 6: Create more Evaluations"}),"\n",(0,a.jsx)(n.p,{children:"Now we will evaluate a matrix of models vs evaluations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'scorers = [\n    check_concrete_fields,\n    check_value_fields,\n    check_subjective_fields,\n]\nevaluations = [\n    weave.Evaluation(\n        name="United States - 2022",\n        dataset=weave.Dataset(\n            name="United States - 2022",\n            rows=generate_dataset_rows("United States", 5, 2022),\n        ),\n        scorers=scorers,\n    ),\n    weave.Evaluation(\n        name="California - 2022",\n        dataset=weave.Dataset(\n            name="California - 2022", rows=generate_dataset_rows("California", 5, 2022)\n        ),\n        scorers=scorers,\n    ),\n    weave.Evaluation(\n        name="United States - 2000",\n        dataset=weave.Dataset(\n            name="United States - 2000",\n            rows=generate_dataset_rows("United States", 5, 2000),\n        ),\n        scorers=scorers,\n    ),\n]\nmodels = [\n    baseline_model,\n    gpt_4o_mini_no_context,\n    gpt_4o_mini_with_context,\n]\n\nfor evaluation in evaluations:\n    for model in models:\n        await evaluation.evaluate(\n            model, __weave={"display_name": evaluation.name + ":" + model.__name__}\n        )\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-7-review-the-leaderboard",children:"Step 7: Review the Leaderboard"}),"\n",(0,a.jsx)(n.p,{children:'You can create a new leaderboard by navigating to the leaderboard tab in the UI and clicking "Create Leaderboard".'}),"\n",(0,a.jsx)(n.p,{children:"We can also generate a leaderboard directly from Python:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from weave.flow import leaderboard\nfrom weave.trace.weave_client import get_ref\n\nspec = leaderboard.Leaderboard(\n    name="Zip Code World Knowledge",\n    description="""\nThis leaderboard compares the performance of models in terms of world knowledge about zip codes.\n\n### Columns\n\n1. **State Match against `United States - 2022`**: The fraction of zip codes that the model correctly identified the state for.\n2. **Avg Temp F Error against `California - 2022`**: The mean absolute error of the model\'s average temperature prediction.\n3. **Correct Known For against `United States - 2000`**: The fraction of zip codes that the model correctly identified the most well known thing about the zip code.\n""",\n    columns=[\n        leaderboard.LeaderboardColumn(\n            evaluation_object_ref=get_ref(evaluations[0]).uri(),\n            scorer_name="check_concrete_fields",\n            summary_metric_path="state_match.true_fraction",\n        ),\n        leaderboard.LeaderboardColumn(\n            evaluation_object_ref=get_ref(evaluations[1]).uri(),\n            scorer_name="check_value_fields",\n            should_minimize=True,\n            summary_metric_path="avg_temp_f_err.mean",\n        ),\n        leaderboard.LeaderboardColumn(\n            evaluation_object_ref=get_ref(evaluations[2]).uri(),\n            scorer_name="check_subjective_fields",\n            summary_metric_path="correct_known_for.true_fraction",\n        ),\n    ],\n)\n\nref = weave.publish(spec)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(67294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);