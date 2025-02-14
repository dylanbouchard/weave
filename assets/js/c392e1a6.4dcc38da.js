"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5446],{35541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(85893),s=t(11151);const i={title:"Introduction Notebook"},a="\ud83c\udfc3\u200d\u2640\ufe0f Quickstart",o={id:"reference/gen_notebooks/intro_notebook",title:"Introduction Notebook",description:"Open in Colab",source:"@site/docs/reference/gen_notebooks/01-intro_notebook.md",sourceDirName:"reference/gen_notebooks",slug:"/reference/gen_notebooks/intro_notebook",permalink:"/reference/gen_notebooks/intro_notebook",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/reference/gen_notebooks/01-intro_notebook.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,sidebarPosition:1,frontMatter:{title:"Introduction Notebook"},sidebar:"notebookSidebar",next:{title:"Weave with W&B Models",permalink:"/reference/gen_notebooks/Models_and_Weave_Integration_Demo"}},c={},l=[{value:"\ud83e\ude84 Install <code>weave</code> library and login",id:"-install-weave-library-and-login",level:2},{value:"Track custom functions",id:"track-custom-functions",level:2},{value:"Vendor Integrations (OpenAI, Anthropic, Mistral, etc...)",id:"vendor-integrations-openai-anthropic-mistral-etc",level:2},{value:"Track nested functions",id:"track-nested-functions",level:2},{value:"Track Errors",id:"track-errors",level:2},{value:"General Object Tracking",id:"general-object-tracking",level:2},{value:"Model Tracking",id:"model-tracking",level:2},{value:"Dataset Tracking",id:"dataset-tracking",level:2},{value:"Retrieve Published Objects &amp; Ops",id:"retrieve-published-objects--ops",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"This is a notebook",type:"tip",children:[(0,r.jsx)("a",{href:"https://colab.research.google.com/github/wandb/weave/blob/master/docs/./intro_notebook.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/d/d0/20221103151430%21Google_Colaboratory_SVG_Logo.svg",alt:"Open In Colab",height:"20px"}),(0,r.jsx)("div",{children:"Open in Colab"})]})}),(0,r.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/./intro_notebook.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",alt:"View in Github",height:"15px"}),(0,r.jsx)("div",{children:"View in Github"})]})})]}),"\n",(0,r.jsx)(n.h1,{id:"\ufe0f-quickstart",children:"\ud83c\udfc3\u200d\u2640\ufe0f Quickstart"}),"\n",(0,r.jsx)(n.p,{children:"Get started using Weave to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log and debug language model inputs, outputs, and traces"}),"\n",(0,r.jsx)(n.li,{children:"Build rigorous, apples-to-apples evaluations for language model use cases"}),"\n",(0,r.jsx)(n.li,{children:"Organize all the information generated across the LLM workflow, from experimentation to evaluations to production"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the full Weave documentation ",(0,r.jsx)(n.a,{href:"https://wandb.me/weave",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"-install-weave-library-and-login",children:["\ud83e\ude84 Install ",(0,r.jsx)(n.code,{children:"weave"})," library and login"]}),"\n",(0,r.jsx)(n.p,{children:"Start by installing the library and logging in to your account."}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we're using openai so you should ",(0,r.jsx)(n.a,{href:"https://platform.openai.com/docs/quickstart/step-2-setup-your-api-key",children:"add an openai API key"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"%%capture\n!pip install weave openai set-env-colab-kaggle-dotenv\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Set your OpenAI API key\nfrom set_env import set_env\n\n# Put your OPENAI_API_KEY in the secrets panel to the left \ud83d\udddd\ufe0f\n_ = set_env("OPENAI_API_KEY")\n# os.environ["OPENAI_API_KEY"] = "sk-..." # alternatively, put your key here\n\nPROJECT = "weave-intro-notebook"\n'})}),"\n",(0,r.jsx)(n.h1,{id:"track-inputs--outputs-of-functions",children:"Track inputs & outputs of functions"}),"\n",(0,r.jsx)(n.p,{children:"Weave allows users to track function calls: the code, inputs, outputs, and even LLM tokens & costs! In the following sections we will cover:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Custom Functions"}),"\n",(0,r.jsx)(n.li,{children:"Vendor Integrations"}),"\n",(0,r.jsx)(n.li,{children:"Nested Function Calling"}),"\n",(0,r.jsx)(n.li,{children:"Error Tracking"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note: in all cases, we will:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import weave                    # import the weave library\nweave.init('project-name')      # initialize tracking for a specific W&B project\n"})}),"\n",(0,r.jsx)(n.h2,{id:"track-custom-functions",children:"Track custom functions"}),"\n",(0,r.jsx)(n.p,{children:"Add the @weave.op decorator to the functions you want to track"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(10162).Z+"",width:"3024",height:"1890"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\n\nimport weave\n\nweave.init(PROJECT)\n\nclient = OpenAI()\nresponse = client.chat.completions.create(\n    model="gpt-4o-mini",\n    messages=[\n        {\n            "role": "system",\n            "content": "You are a grammar checker, correct the following user input.",\n        },\n        {"role": "user", "content": "That was so easy, it was a piece of pie!"},\n    ],\n    temperature=0,\n)\ngeneration = response.choices[0].message.content\nprint(generation)\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can find your interactive dashboard by clicking any of the  \ud83d\udc46 wandb links above."}),"\n",(0,r.jsx)(n.h2,{id:"vendor-integrations-openai-anthropic-mistral-etc",children:"Vendor Integrations (OpenAI, Anthropic, Mistral, etc...)"}),"\n",(0,r.jsxs)(n.p,{children:["Here, we're automatically tracking all calls to ",(0,r.jsx)(n.code,{children:"openai"}),". We automatically track a lot of LLM libraries, but it's really easy to add support for whatever LLM you're using, as you'll see below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(31227).Z+"",width:"3024",height:"1898"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init(PROJECT)\n\n\n@weave.op()\ndef strip_user_input(user_input):\n    return user_input.strip()\n\n\nresult = strip_user_input("    hello    ")\nprint(result)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After adding ",(0,r.jsx)(n.code,{children:"weave.op"})," and calling the function, visit the link and see it tracked within your project."]}),"\n",(0,r.jsx)(n.p,{children:"\ud83d\udca1 We automatically track your code, have a look at the code tab!"}),"\n",(0,r.jsx)(n.h2,{id:"track-nested-functions",children:"Track nested functions"}),"\n",(0,r.jsx)(n.p,{children:"Now that you've seen the basics, let's combine all of the above and track some deeply nested functions alongside LLM calls."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(78775).Z+"",width:"3018",height:"1896"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\n\nimport weave\n\nweave.init(PROJECT)\n\n\n@weave.op()\ndef strip_user_input(user_input):\n    return user_input.strip()\n\n\n@weave.op()\ndef correct_grammar(user_input):\n    client = OpenAI()\n\n    stripped = strip_user_input(user_input)\n    response = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[\n            {\n                "role": "system",\n                "content": "You are a grammar checker, correct the following user input.",\n            },\n            {"role": "user", "content": stripped},\n        ],\n        temperature=0,\n    )\n    return response.choices[0].message.content\n\n\nresult = correct_grammar("   That was so easy, it was a piece of pie!    ")\nprint(result)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"track-errors",children:"Track Errors"}),"\n",(0,r.jsx)(n.p,{children:"Whenever your code crashes, weave will highlight what caused the issue. This is especially useful for finding things like JSON parsing issues that can occasionally happen when parsing data from LLM responses."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(45854).Z+"",width:"3010",height:"1896"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import json\n\nfrom openai import OpenAI\n\nimport weave\n\nweave.init(PROJECT)\n\n\n@weave.op()\ndef strip_user_input(user_input):\n    return user_input.strip()\n\n\n@weave.op()\ndef correct_grammar(user_input):\n    client = OpenAI()\n\n    stripped = strip_user_input(user_input)\n    response = client.chat.completions.create(\n        model="gpt-4o-mini",\n        messages=[\n            {\n                "role": "system",\n                "content": "You are a grammar checker, correct the following user input.",\n            },\n            {"role": "user", "content": stripped},\n        ],\n        temperature=0,\n        response_format={"type": "json_object"},\n    )\n    return json.loads(response.choices[0].message.content)\n\n\nresult = correct_grammar("   That was so easy, it was a piece of pie!    ")\nprint(result)\n'})}),"\n",(0,r.jsx)(n.h1,{id:"tracking-objects",children:"Tracking Objects"}),"\n",(0,r.jsxs)(n.p,{children:["Organizing experimentation is difficult when there are many moving pieces. You can capture and organize the experimental details of your app like your system prompt or the model you're using within ",(0,r.jsx)(n.code,{children:"weave.Objects"}),". This helps organize and compare different iterations of your app. In this section, we will cover:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"General Object Tracking"}),"\n",(0,r.jsx)(n.li,{children:"Tracking Models"}),"\n",(0,r.jsx)(n.li,{children:"Tracking Datasets"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general-object-tracking",children:"General Object Tracking"}),"\n",(0,r.jsxs)(n.p,{children:["Many times, it is useful to track & version data, just like you track and version code. For example, here we define a ",(0,r.jsx)(n.code,{children:"SystemPrompt(weave.Object)"})," object that can be shared between teammates"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(74977).Z+"",width:"3024",height:"1240"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init(PROJECT)\n\n\nclass SystemPrompt(weave.Object):\n    prompt: str\n\n\nsystem_prompt = SystemPrompt(\n    prompt="You are a grammar checker, correct the following user input."\n)\nweave.publish(system_prompt)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"model-tracking",children:"Model Tracking"}),"\n",(0,r.jsxs)(n.p,{children:["Models are so common of an object type, that we have a special class to represent them: ",(0,r.jsx)(n.code,{children:"weave.Model"}),". The only requirement is that we define a ",(0,r.jsx)(n.code,{children:"predict"})," method."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(65894).Z+"",width:"3024",height:"1894"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\n\nimport weave\n\nweave.init(PROJECT)\n\n\nclass OpenAIGrammarCorrector(weave.Model):\n    # Properties are entirely user-defined\n    openai_model_name: str\n    system_message: str\n\n    @weave.op()\n    def predict(self, user_input):\n        client = OpenAI()\n        response = client.chat.completions.create(\n            model=self.openai_model_name,\n            messages=[\n                {"role": "system", "content": self.system_message},\n                {"role": "user", "content": user_input},\n            ],\n            temperature=0,\n        )\n        return response.choices[0].message.content\n\n\ncorrector = OpenAIGrammarCorrector(\n    openai_model_name="gpt-4o-mini",\n    system_message="You are a grammar checker, correct the following user input.",\n)\n\nresult = corrector.predict("     That was so easy, it was a piece of pie!       ")\nprint(result)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"dataset-tracking",children:"Dataset Tracking"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to models, a ",(0,r.jsx)(n.code,{children:"weave.Dataset"})," object exists to help track, organize, and operate on datasets"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(41538).Z+"",width:"3024",height:"1262"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'dataset = weave.Dataset(\n    name="grammar-correction",\n    rows=[\n        {\n            "user_input": "   That was so easy, it was a piece of pie!   ",\n            "expected": "That was so easy, it was a piece of cake!",\n        },\n        {"user_input": "  I write good   ", "expected": "I write well"},\n        {\n            "user_input": "  GPT-4 is smartest AI model.   ",\n            "expected": "GPT-4 is the smartest AI model.",\n        },\n    ],\n)\n\nweave.publish(dataset)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that we saved a versioned ",(0,r.jsx)(n.code,{children:"GrammarCorrector"})," object that captures the configurations you're experimenting with."]}),"\n",(0,r.jsx)(n.h2,{id:"retrieve-published-objects--ops",children:"Retrieve Published Objects & Ops"}),"\n",(0,r.jsx)(n.p,{children:"You can publish objects and then retrieve them in your code. You can even call functions from your retrieved objects!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(78632).Z+"",width:"3024",height:"1694"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init(PROJECT)\n\ncorrector = OpenAIGrammarCorrector(\n    openai_model_name="gpt-4o-mini",\n    system_message="You are a grammar checker, correct the following user input.",\n)\n\nref = weave.publish(corrector)\nprint(ref.uri())\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(34321).Z+"",width:"3024",height:"1262"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init(PROJECT)\n\n# Note: this url is available from the UI after publishing the object!\nref_url = f"weave:///{ref.entity}/{PROJECT}/object/{ref.name}:{ref.digest}"\nfetched_collector = weave.ref(ref_url).get()\n\n# Notice: this object was loaded from remote location!\nresult = fetched_collector.predict("That was so easy, it was a piece of pie!")\n\nprint(result)\n'})}),"\n",(0,r.jsx)(n.h1,{id:"evaluation",children:"Evaluation"}),"\n",(0,r.jsxs)(n.p,{children:["Evaluation-driven development helps you reliably iterate on an application. The ",(0,r.jsx)(n.code,{children:"Evaluation"})," class is designed to assess the performance of a ",(0,r.jsx)(n.code,{children:"Model"})," on a given ",(0,r.jsx)(n.code,{children:"Dataset"})," or set of examples using scoring functions."]}),"\n",(0,r.jsx)(n.p,{children:"See a preview of the API below:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(34934).Z+"",width:"3024",height:"1690"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import weave\nfrom weave import Evaluation\n\n\n# Define any custom scoring function\n@weave.op()\ndef exact_match(expected: str, model_output: dict) -> dict:\n    # Here is where you\'d define the logic to score the model output\n    return {"match": expected == model_output}\n\n\n# Score your examples using scoring functions\nevaluation = Evaluation(\n    dataset=dataset,  # can be a list of dictionaries or a weave.Dataset object\n    scorers=[exact_match],  # can be a list of scoring functions\n)\n\n# Start tracking the evaluation\nweave.init(PROJECT)\n# Run the evaluation\nsummary = await evaluation.evaluate(corrector)  # can be a model or simple function\n'})}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,r.jsxs)(n.p,{children:["Follow the ",(0,r.jsx)(n.a,{href:"http://wandb.me/weave_eval_tut",children:"Build an Evaluation pipeline"})," tutorial to learn more about Evaluation and begin iteratively improving your applications."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},10162:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-a87c918610cf6a646a1f8c6bdb5ec936.png"},34934:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/10-a4f5c46c0f3457935ce96d3b878fd2a5.png"},31227:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-8f612714e353aadfa7334b3eec68d0f1.png"},78775:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-c877e6c9212b03c4862b2912a4de75f6.png"},45854:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-51b1909c8368b7040700499a39467c79.png"},74977:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-f2577d5bc3ac23983873f9a28733eee4.png"},65894:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/6-076cc0beb51c6a1e6cad6f06a7cf56fe.png"},41538:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/7-f0ce8f34b167feb5dcac3c4a69cb3aca.png"},78632:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/8-0e3ba7e026730e8676fc6585283c2c99.png"},34321:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/9-233953b8ee3a8789f991915a60789142.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);