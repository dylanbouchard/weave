"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9944],{93137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(85893),r=t(11151),s=t(65488),o=t(85162);const i={},l="App versioning",c={id:"tutorial-weave_models",title:"App versioning",description:"Tracking the inputs, outputs, metadata as well as data flowing through your app is critical to understanding the performance of your system. However versioning your app over time is also critical to understand how modifications to your code or app attributes change your outputs. Weave's Model class is how these changes can be tracked in Weave.",source:"@site/docs/tutorial-weave_models.md",sourceDirName:".",slug:"/tutorial-weave_models",permalink:"/tutorial-weave_models",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/tutorial-weave_models.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Trace Applications",permalink:"/tutorial-tracing_2"},next:{title:"Build an Evaluation",permalink:"/tutorial-eval"}},d={},u=[{value:"Using <code>weave.Model</code>",id:"using-weavemodel",level:2},{value:"Exporting and re-using a logged <code>weave.Model</code>",id:"exporting-and-re-using-a-logged-weavemodel",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"app-versioning",children:"App versioning"}),"\n",(0,a.jsxs)(n.p,{children:["Tracking the ",(0,a.jsx)(n.a,{href:"/quickstart",children:"inputs, outputs, metadata"})," as well as ",(0,a.jsx)(n.a,{href:"/tutorial-tracing_2",children:"data flowing through your app"})," is critical to understanding the performance of your system. However ",(0,a.jsx)(n.strong,{children:"versioning your app over time"})," is also critical to understand how modifications to your code or app attributes change your outputs. Weave's ",(0,a.jsx)(n.code,{children:"Model"})," class is how these changes can be tracked in Weave."]}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial you'll learn:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["How to use Weave ",(0,a.jsx)(n.code,{children:"Model"})," to track and version your app and its attributes."]}),"\n",(0,a.jsxs)(n.li,{children:["How to export, modify and re-use a Weave ",(0,a.jsx)(n.code,{children:"Model"})," already logged."]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"using-weavemodel",children:["Using ",(0,a.jsx)(n.code,{children:"weave.Model"})]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"weave.Model"})," class is currently only supported in Python."]})}),"\n",(0,a.jsxs)(n.p,{children:["Using Weave ",(0,a.jsx)(n.code,{children:"Model"}),"s means that attributes such as model vendor ids, prompts, temperature, and more are stored and versioned when they change."]}),"\n",(0,a.jsxs)(n.p,{children:["To create a ",(0,a.jsx)(n.code,{children:"Model"})," in Weave, you need the following:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["a class that inherits from ",(0,a.jsx)(n.code,{children:"weave.Model"})]}),"\n",(0,a.jsx)(n.li,{children:"type definitions on all class attributes"}),"\n",(0,a.jsxs)(n.li,{children:["a typed ",(0,a.jsx)(n.code,{children:"invoke"})," function with the ",(0,a.jsx)(n.code,{children:"@weave.op()"})," decorator"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When you change the class attributes or the code that defines your model, ",(0,a.jsx)(n.strong,{children:"these changes will be logged and the version will be updated"}),". This ensures that you can compare the generations across different versions of your app."]}),"\n",(0,a.jsxs)(n.p,{children:["In the example below, the ",(0,a.jsx)(n.strong,{children:"model name, temperature and system prompt will be tracked and versioned"}),":"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsx)(o.default,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import json\nfrom openai import OpenAI\n\nimport weave\n\n@weave.op()\ndef extract_dinos(wmodel: weave.Model, sentence: str) -> dict:\n    response = wmodel.client.chat.completions.create(\n        model=wmodel.model_name,\n        temperature=wmodel.temperature,\n        messages=[\n            {\n                "role": "system",\n                "content": wmodel.system_prompt\n            },\n            {\n                "role": "user",\n                "content": sentence\n            }\n            ],\n            response_format={ "type": "json_object" }\n        )\n    return response.choices[0].message.content\n\n# Sub-class with a weave.Model\n# highlight-next-line\nclass ExtractDinos(weave.Model):\n    client: OpenAI = None\n    model_name: str\n    temperature: float\n    system_prompt: str\n\n    # Ensure your function is called `invoke` or `predict`\n    # highlight-next-line\n    @weave.op()\n    # highlight-next-line\n    def invoke(self, sentence: str) -> dict:\n        dino_data  = extract_dinos(self, sentence)\n        return json.loads(dino_data)\n'})})}),(0,a.jsx)(o.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet.  Stay tuned!\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Now you can instantiate and call the model with ",(0,a.jsx)(n.code,{children:"invoke"}),":"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsx)(o.default,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'weave.init(\'jurassic-park\')\nclient = OpenAI()\n\nsystem_prompt = """Extract any dinosaur `name`, their `common_name`, \\\nnames and whether its `diet` is a herbivore or carnivore, in JSON format."""\n\n# highlight-next-line\ndinos = ExtractDinos(\n    client=client,\n    model_name=\'gpt-4o\',\n    temperature=0.4,\n    system_prompt=system_prompt\n)\n\nsentence = """I watched as a Tyrannosaurus rex (T. rex) chased after a Triceratops (Trike), \\\nboth carnivore and herbivore locked in an ancient dance. Meanwhile, a gentle giant \\\nBrachiosaurus (Brachi) calmly munched on treetops, blissfully unaware of the chaos below."""\n\n# highlight-next-line\nresult = dinos.invoke(sentence)\nprint(result)\n'})})}),(0,a.jsx)(o.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet.  Stay tuned!\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Now after calling ",(0,a.jsx)(n.code,{children:".invoke"})," you can see the trace in Weave ",(0,a.jsx)(n.strong,{children:"now tracks the model attributes as well as the code"})," for the model functions that have been decorated with ",(0,a.jsx)(n.code,{children:"weave.op()"}),'. You can see the model is also versioned, "v21" in this case, and if you click on the model ',(0,a.jsx)(n.strong,{children:"you can see all of the calls"})," that have used that version of the model"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Re-using a weave model",src:t(46446).Z+"",width:"1664",height:"1292"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["A note on using ",(0,a.jsx)(n.code,{children:"weave.Model"}),":"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use ",(0,a.jsx)(n.code,{children:"predict"})," instead of ",(0,a.jsx)(n.code,{children:"invoke"})," for the name of the function in your Weave ",(0,a.jsx)(n.code,{children:"Model"})," if you prefer."]}),"\n",(0,a.jsxs)(n.li,{children:["If you want other class methods to be tracked by weave they need to be wrapped in ",(0,a.jsx)(n.code,{children:"weave.op()"})]}),"\n",(0,a.jsx)(n.li,{children:"Attributes starting with an underscore are ignored by weave and won't be logged"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"exporting-and-re-using-a-logged-weavemodel",children:["Exporting and re-using a logged ",(0,a.jsx)(n.code,{children:"weave.Model"})]}),"\n",(0,a.jsx)(n.p,{children:"Because Weave stores and versions Models that have been invoked, it is possible to export and re-use these models."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Get the Model ref"}),"\nIn the Weave UI you can get the Model ref for a particular version"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Using the Model"}),"\nOnce you have the URI of the Model object, you can export and re-use it. Note that the exported model is already initialised and ready to use:"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsx)(o.default,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# the exported weave model is already initialised and ready to be called\n# highlight-next-line\nnew_dinos = weave.ref("weave:///morgan/jurassic-park/object/ExtractDinos:ey4udBU2MU23heQFJenkVxLBX4bmDsFk7vsGcOWPjY4").get()\n\n# set the client to the openai client again\nnew_dinos.client = client\n\nnew_sentence = """I also saw an Ankylosaurus grazing on giant ferns"""\nnew_result = new_dinos.invoke(new_sentence)\nprint(new_result)\n'})})}),(0,a.jsx)(o.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet.  Stay tuned!\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Here you can now see the name Model version (v21) was used with the new input:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Re-using a weave model",src:t(52771).Z+"",width:"1260",height:"1120"})}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Follow the ",(0,a.jsx)(n.a,{href:"/tutorial-eval",children:"Build an Evaluation pipeline tutorial"})," to start iteratively improving your applications."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},65488:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(67294),r=t(90512),s=t(12466),o=t(70989),i=t(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=t(85893);function d(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),r=i[t].value;r!==a&&(u(n),o(r))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,r.Z)("tabs__item",l.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function u(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function h(e){const n=(0,o.Y)(e);return(0,c.jsxs)("div",{className:(0,r.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(u,{...n,...e})]})}function p(e){const n=(0,i.default)();return(0,c.jsx)(h,{...e,children:(0,o.h)(e.children)},String(n))}},70989:(e,n,t)=>{t.d(n,{Y:()=>p,h:()=>c});var a=t(67294),r=t(16550),s=t(20469),o=t(91980),i=t(67392),l=t(20812);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[p,m]=h({queryString:t,groupId:r}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,l.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=p??g;return u({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),v(e)}),[m,v,o]),tabValues:o}}},46446:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tutorial-model_invoke3-c22b1abcbd43adb81ec3ae586b6b8989.png"},52771:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tutorial-model_re-use-30528716c6506df138e0757eb6c9f411.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);