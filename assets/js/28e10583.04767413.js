"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8871],{88466:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=i(85893),a=i(11151);const s={},o="Tracing",r={id:"guides/tracking/index",title:"Tracing",description:'Weave provides powerful tracing capabilities to track and version objects and function calls in your applications. This comprehensive system enables better monitoring, debugging, and iterative development of AI-powered applications, allowing you to "track insights between commits."',source:"@site/docs/guides/tracking/index.md",sourceDirName:"guides/tracking",slug:"/guides/tracking/",permalink:"/guides/tracking/",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/tracking/index.md",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Evaluate a RAG App",permalink:"/tutorial-rag"},next:{title:"Calls",permalink:"/guides/tracking/tracing"}},c={},l=[{value:"Key Tracing Features",id:"key-tracing-features",level:2},{value:"Calls",id:"calls",level:3},{value:"Ops",id:"ops",level:3},{value:"Objects",id:"objects",level:3},{value:"FAQs",id:"faqs",level:2},{value:"What information does Weave capture for a function?",id:"what-information-does-weave-capture-for-a-function",level:3},{value:"How can I disable code capture?",id:"how-can-i-disable-code-capture",level:3},{value:"How can I disable system information capture?",id:"how-can-i-disable-system-information-capture",level:3},{value:"How can I disable client information capture?",id:"how-can-i-disable-client-information-capture",level:3},{value:"Will Weave affect my function&#39;s execution speed?",id:"will-weave-affect-my-functions-execution-speed",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tracing",children:"Tracing"}),"\n",(0,t.jsx)(n.p,{children:'Weave provides powerful tracing capabilities to track and version objects and function calls in your applications. This comprehensive system enables better monitoring, debugging, and iterative development of AI-powered applications, allowing you to "track insights between commits."'}),"\n",(0,t.jsx)(n.h2,{id:"key-tracing-features",children:"Key Tracing Features"}),"\n",(0,t.jsx)(n.p,{children:"Weave's tracing functionality comprises three main components:"}),"\n",(0,t.jsx)(n.h3,{id:"calls",children:"Calls"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/guides/tracking/tracing",children:"Calls"})," trace function calls, inputs, and outputs, enabling you to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Analyze data flow through your application"}),"\n",(0,t.jsx)(n.li,{children:"Debug complex interactions between components"}),"\n",(0,t.jsx)(n.li,{children:"Optimize application performance based on call patterns"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ops",children:"Ops"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/guides/tracking/ops",children:"Ops"})," are automatically versioned and tracked functions (which produce Calls) that allow you to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Monitor function performance and behavior"}),"\n",(0,t.jsx)(n.li,{children:"Maintain a record of function modifications"}),"\n",(0,t.jsx)(n.li,{children:"Ensure experiment reproducibility"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objects",children:"Objects"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/guides/tracking/objects",children:"Objects"})," form Weave's extensible serialization layer, automatically versioning runtime objects (often the inputs and outputs of Calls). This feature allows you to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Track changes in data structures over time"}),"\n",(0,t.jsx)(n.li,{children:"Maintain a clear history of object modifications"}),"\n",(0,t.jsx)(n.li,{children:"Easily revert to previous versions when needed"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By leveraging these tracing capabilities, you can gain deeper insights into your application's behavior, streamline your development process, and build more robust AI-powered systems."}),"\n",(0,t.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,t.jsx)(n.h3,{id:"what-information-does-weave-capture-for-a-function",children:"What information does Weave capture for a function?"}),"\n",(0,t.jsxs)(n.p,{children:["A function can be designated as a Weave ",(0,t.jsx)(n.a,{href:"/guides/tracking/ops",children:"Op"})," either manually through a decorator or automatically as part of an enabled integration. When an Op executes, Weave captures detailed information to support your analysis. Weave provides you with fine grained control over what is logged in case you would like something different than the default; see below for configuration examples."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code capture"})," - Weave captures a representation of the Op's source code. This includes inline comments as well as recursively capturing the value of variables or the source of non-Op functions that were called. Code capture allows you to see what your function was doing even if the change was not saved to your source control system. Code capture is used as part of Op versioning, allowing you to understand the evaluation of your code over time. If code capture is disabled, a hash value will be used instead."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Function name, inputs, and outputs"})," - The name of the function will be captured but can be ",(0,t.jsx)(n.a,{href:"/guides/tracking/tracing/#call-display-name",children:"overridden"}),". A JSON-based representation of the inputs and outputs will be captured. For inputs, argument name will be capture in addition to value. Weave lets you ",(0,t.jsx)(n.a,{href:"/guides/tracking/ops#customize-logged-inputs-and-outputs",children:"customize the logging"})," of inputs and outputs - you can specify a function to add/remove/modify what is logged."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Op call hierarchy"}),' - When an Op is called within the context of another Op executing, this relationship is captured, even in cases\nwhere there is an intermediate non-Op function executing. This relationship between Op calls is used to provide a "Trace tree".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Execution status and exceptions"})," - Weave tracks whether a function is executing, finished, or errored. If an exception occurs during execution the error message and a stack track is recorded."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"System information"})," - Weave may capture information about which operating system the client is running on including detailed version information."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Client information"})," - Weave may capture information about the Weave client itself, such as the programming language in use and detailed version information for that language and the Weave client library."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Timing"})," - The execution start and end time is captured and also used for latency calculations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Token usage"})," - In some ",(0,t.jsx)(n.a,{href:"/guides/integrations/",children:"integrations"})," LLM token usage counts may be automatically logged."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User and run context"})," - Logging is associated with a W&B user account. That will be captured along with any wandb Run context."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Derived information"})," - Weave may compute derived information from the raw information logged, for example a cost estimate may be calculated based on token usage and knowledge of the model used. Weave also aggregates some information over calls."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Additional information you choose"})," - You can choose to log ",(0,t.jsx)(n.a,{href:"/guides/core-types/models#track-production-calls",children:"custom attributes"})," as part of your call or attach ",(0,t.jsx)(n.a,{href:"/guides/tracking/feedback#add-feedback-to-a-call",children:"feedback"})," to a call."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-disable-code-capture",children:"How can I disable code capture?"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable code capture during Weave client initialization: ",(0,t.jsx)(n.code,{children:'weave.init("entity/project", settings={"capture_code": False})'}),".\nYou can also use the ",(0,t.jsx)(n.a,{href:"/guides/core-types/env-vars",children:"environment variable"})," ",(0,t.jsx)(n.code,{children:"WEAVE_CAPTURE_CODE=false"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-disable-system-information-capture",children:"How can I disable system information capture?"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable system information capture during Weave client initialization: ",(0,t.jsx)(n.code,{children:'weave.init("entity/project", settings={"capture_system_info": False})'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-disable-client-information-capture",children:"How can I disable client information capture?"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable client information capture during Weave client initialization: ",(0,t.jsx)(n.code,{children:'weave.init("entity/project", settings={"capture_client_info": False})'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"will-weave-affect-my-functions-execution-speed",children:"Will Weave affect my function's execution speed?"}),"\n",(0,t.jsx)(n.p,{children:"The overhead of Weave logging is typically negligible compared to making a call to an LLM.\nTo minimize Weave's impact on the speed of your Op's execution, its network activity happens on a background thread.\nWhen your program is exiting it may appear to pause while any remaining enqueued data is logged."})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);