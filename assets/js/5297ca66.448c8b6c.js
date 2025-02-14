"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4726],{98183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(85893),r=t(11151);const i={},a="Groq",s={id:"guides/integrations/groq",title:"Groq",description:"Do you want to experiment with Groq models on Weave without any set up? Try the LLM Playground.",source:"@site/docs/guides/integrations/groq.md",sourceDirName:"guides/integrations",slug:"/guides/integrations/groq",permalink:"/guides/integrations/groq",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/integrations/groq.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Google Gemini",permalink:"/guides/integrations/google-gemini"},next:{title:"LiteLLM",permalink:"/guides/integrations/litellm"}},c={},l=[{value:"Tracing",id:"tracing",level:2},{value:"Track your own ops",id:"track-your-own-ops",level:2},{value:"Create a <code>Model</code> for easier experimentation",id:"create-a-model-for-easier-experimentation",level:2},{value:"Serving a Weave Model",id:"serving-a-weave-model",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"groq",children:"Groq"}),"\n",(0,o.jsx)("a",{target:"_blank",href:"https://colab.research.google.com/github/wandb/examples/blob/master/weave/docs/quickstart_groq.ipynb",children:(0,o.jsx)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Do you want to experiment with Groq models on Weave without any set up? Try the ",(0,o.jsx)(n.a,{href:"/guides/tools/playground",children:"LLM Playground"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://groq.com/",children:"Groq"})," is the AI infrastructure company that delivers fast AI inference. The LPU\u2122 Inference Engine by Groq is a hardware and software platform that delivers exceptional compute speed, quality, and energy efficiency. Weave automatically tracks and logs calls made using Groq chat completion calls."]}),"\n",(0,o.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,o.jsx)(n.p,{children:"It\u2019s important to store traces of language model applications in a central location, both during development and in production. These traces can be useful for debugging, and as a dataset that will help you improve your application."}),"\n",(0,o.jsxs)(n.p,{children:["Weave will automatically capture traces for ",(0,o.jsx)(n.a,{href:"https://groq.com/",children:"Groq"}),". To start tracking, calling ",(0,o.jsx)(n.code,{children:'weave.init(project_name="<YOUR-WANDB-PROJECT-NAME>")'})," and use the library as normal."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nimport weave\nfrom groq import Groq\n\nweave.init(project_name="groq-project")\n\nclient = Groq(\n    api_key=os.environ.get("GROQ_API_KEY"),\n)\nchat_completion = client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Explain the importance of fast language models",\n        }\n    ],\n    model="llama3-8b-8192",\n)\n'})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:(0,o.jsx)(n.img,{src:t(65241).Z+"",width:"2880",height:"1800"})})})}),(0,o.jsx)(n.tbody,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:"Weave will now track and log all LLM calls made through the Groq library. You can view the traces in the Weave web interface."})})})]}),"\n",(0,o.jsx)(n.h2,{id:"track-your-own-ops",children:"Track your own ops"}),"\n",(0,o.jsxs)(n.p,{children:["Wrapping a function with ",(0,o.jsx)(n.code,{children:"@weave.op"})," starts capturing inputs, outputs and app logic so you can debug how data flows through your app. You can deeply nest ops and build a tree of functions that you want to track. This also starts automatically versioning code as you experiment to capture ad-hoc details that haven't been committed to git."]}),"\n",(0,o.jsxs)(n.p,{children:["Simply create a function decorated with ",(0,o.jsx)(n.a,{href:"/guides/tracking/ops",children:(0,o.jsx)(n.code,{children:"@weave.op"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In the example below, we have the function ",(0,o.jsx)(n.code,{children:"recommend_places_to_visit"})," which is a function wrapped with ",(0,o.jsx)(n.code,{children:"@weave.op"})," that recommends places to visit in a city."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nimport weave\nfrom groq import Groq\n\n\nweave.init(project_name="groq-test")\n\nclient = Groq(\n    api_key=os.environ.get("GROQ_API_KEY"),\n)\n\n@weave.op()\ndef recommend_places_to_visit(city: str, model: str="llama3-8b-8192"):\n    chat_completion = client.chat.completions.create(\n        messages=[\n            {\n                "role": "system",\n                "content": "You are a helpful assistant meant to suggest places to visit in a city",\n            },\n            {\n                "role": "user",\n                "content": city,\n            }\n        ],\n        model="llama3-8b-8192",\n    )\n    return chat_completion.choices[0].message.content\n\n\nrecommend_places_to_visit("New York")\nrecommend_places_to_visit("Paris")\nrecommend_places_to_visit("Kolkata")\n'})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:(0,o.jsx)(n.img,{src:t(45461).Z+"",width:"2880",height:"1800"})})})}),(0,o.jsx)(n.tbody,{children:(0,o.jsx)(n.tr,{children:(0,o.jsxs)(n.td,{children:["Decorating the ",(0,o.jsx)(n.code,{children:"recommend_places_to_visit"})," function with ",(0,o.jsx)(n.code,{children:"@weave.op"})," traces its inputs, outputs, and all internal LM calls made inside the function."]})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"create-a-model-for-easier-experimentation",children:["Create a ",(0,o.jsx)(n.code,{children:"Model"})," for easier experimentation"]}),"\n",(0,o.jsxs)(n.p,{children:["Organizing experimentation is difficult when there are many moving pieces. By using the ",(0,o.jsx)(n.a,{href:"../core-types/models",children:(0,o.jsx)(n.code,{children:"Model"})})," class, you can capture and organize the experimental details of your app like your system prompt or the model you're using. This helps organize and compare different iterations of your app."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to versioning code and capturing inputs/outputs, ",(0,o.jsx)(n.a,{href:"../core-types/models",children:(0,o.jsx)(n.code,{children:"Model"})}),"s capture structured parameters that control your application\u2019s behavior, making it easy to find what parameters worked best. You can also use Weave Models with ",(0,o.jsx)(n.code,{children:"serve"}),", and ",(0,o.jsx)(n.a,{href:"/guides/core-types/evaluations",children:(0,o.jsx)(n.code,{children:"Evaluation"})}),"s."]}),"\n",(0,o.jsxs)(n.p,{children:["In the example below, you can experiment with ",(0,o.jsx)(n.code,{children:"GroqCityVisitRecommender"}),". Every time you change one of these, you'll get a new ",(0,o.jsx)(n.em,{children:"version"})," of ",(0,o.jsx)(n.code,{children:"GroqCityVisitRecommender"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nfrom groq import Groq\nimport weave\n\n\nclass GroqCityVisitRecommender(weave.Model):\n    model: str\n    groq_client: Groq\n\n    @weave.op()\n    def predict(self, city: str) -> str:\n        system_message = {\n            "role": "system",\n            "content": """\nYou are a helpful assistant meant to suggest places to visit in a city\n""",\n        }\n        user_message = {"role": "user", "content": city}\n        chat_completion = self.groq_client.chat.completions.create(\n            messages=[system_message, user_message],\n            model=self.model,\n        )\n        return chat_completion.choices[0].message.content\n\n\nweave.init(project_name="groq-test")\ncity_recommender = GroqCityVisitRecommender(\n    model="llama3-8b-8192", groq_client=Groq(api_key=os.environ.get("GROQ_API_KEY"))\n)\nprint(city_recommender.predict("New York"))\nprint(city_recommender.predict("San Francisco"))\nprint(city_recommender.predict("Los Angeles"))\n'})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:(0,o.jsx)(n.img,{src:t(7211).Z+"",width:"2880",height:"1800"})})})}),(0,o.jsx)(n.tbody,{children:(0,o.jsx)(n.tr,{children:(0,o.jsxs)(n.td,{children:["Tracing and versioning your calls using a ",(0,o.jsx)(n.a,{href:"../core-types/models",children:(0,o.jsx)(n.code,{children:"Model"})})]})})})]}),"\n",(0,o.jsx)(n.h3,{id:"serving-a-weave-model",children:"Serving a Weave Model"}),"\n",(0,o.jsxs)(n.p,{children:["Given a weave reference to any ",(0,o.jsx)(n.code,{children:"weave.Model"})," object, you can spin up a fastapi server and ",(0,o.jsx)(n.a,{href:"https://wandb.github.io/weave/guides/tools/serve",children:"serve"})," it."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:(0,o.jsx)(n.a,{href:"https://wandb.ai/geekyrakshit/groq-test/weave/objects/GroqCityVisitRecommender/versions/6O1xPTJ9yFx8uuCjJAlI7KgcVYxXKn7JxfmVD9AQT5Q",children:(0,o.jsx)(n.img,{alt:"dspy_weave_model_serve.png",src:t(83648).Z+"",width:"2880",height:"1800"})})})})}),(0,o.jsx)(n.tbody,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:"You can find the weave reference of any WeaveModel by navigating to the model and copying it from the UI."})})})]}),"\n",(0,o.jsx)(n.p,{children:"You can serve your model by using the following command in the terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"weave serve weave:///your_entity/project-name/YourModel:<hash>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65241:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/groq_weave_dasboard-5fe948fa979b11cf007af7185a5df660.png"},7211:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/groq_weave_model-26edf64774afa0683c3dcc108715e6cf.png"},83648:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/groq_weave_model_version-b29960b935a52a9ac10f3787f0dc14d5.png"},45461:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/groq_weave_tracing-74c234466abdc2d58b42ce3f7b1ddc52.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);