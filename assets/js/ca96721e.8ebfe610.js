"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4418],{42305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(85893),o=t(11151),a=t(65488),s=t(85162);const i={},l="Builtin Scorers",c={id:"guides/evaluation/builtin_scorers",title:"Builtin Scorers",description:"Installation",source:"@site/docs/guides/evaluation/builtin_scorers.mdx",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/builtin_scorers",permalink:"/guides/evaluation/builtin_scorers",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/evaluation/builtin_scorers.mdx",tags:[],version:"current",lastUpdatedAt:1739548798e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Guardrails and Monitors",permalink:"/guides/evaluation/guardrails_and_monitors"},next:{title:"Prompts",permalink:"/guides/core-types/prompts"}},d={},u=[{value:"<code>HallucinationFreeScorer</code>",id:"hallucinationfreescorer",level:2},{value:"<code>SummarizationScorer</code>",id:"summarizationscorer",level:2},{value:"<code>OpenAIModerationScorer</code>",id:"openaimoderationscorer",level:2},{value:"<code>EmbeddingSimilarityScorer</code>",id:"embeddingsimilarityscorer",level:2},{value:"<code>ValidJSONScorer</code>",id:"validjsonscorer",level:2},{value:"<code>ValidXMLScorer</code>",id:"validxmlscorer",level:2},{value:"<code>PydanticScorer</code>",id:"pydanticscorer",level:2},{value:"RAGAS - <code>ContextEntityRecallScorer</code>",id:"ragas---contextentityrecallscorer",level:2},{value:"RAGAS - <code>ContextRelevancyScorer</code>",id:"ragas---contextrelevancyscorer",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"builtin-scorers",children:"Builtin Scorers"}),"\n",(0,r.jsxs)(a.Z,{groupId:"programming-language",queryString:!0,children:[(0,r.jsxs)(s.default,{value:"python",label:"Python",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Installation"})}),(0,r.jsx)(n.p,{children:"To use Weave's predefined scorers you need to install some additional dependencies:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install weave[scorers]\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LLM-evaluators"}),"\nUpdate Feb 2025: The pre-defined scorers that leverage LLMs now automatically integrate with litellm.\nYou no longer need to pass an LLM client; just set the ",(0,r.jsx)(n.code,{children:"model_id"}),".\nSee the supported models ",(0,r.jsx)(n.a,{href:"https://docs.litellm.ai/docs/providers",children:"here"}),"."]}),(0,r.jsx)(n.h2,{id:"hallucinationfreescorer",children:(0,r.jsx)(n.code,{children:"HallucinationFreeScorer"})}),(0,r.jsx)(n.p,{children:"This scorer checks if your AI system's output includes any hallucinations based on the input data."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from weave.scorers import HallucinationFreeScorer\n\nscorer = HallucinationFreeScorer()\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Customization:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Customize the ",(0,r.jsx)(n.code,{children:"system_prompt"})," and ",(0,r.jsx)(n.code,{children:"user_prompt"}),' attributes of the scorer to define what "hallucination" means for you.']}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"score"})," method expects an input column named ",(0,r.jsx)(n.code,{children:"context"}),". If your dataset uses a different name, use the ",(0,r.jsx)(n.code,{children:"column_map"})," attribute to map ",(0,r.jsx)(n.code,{children:"context"})," to the dataset column."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Here you have an example in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import asyncio\nimport weave\nfrom weave.scorers import HallucinationFreeScorer\n\n# Initialize scorer with a column mapping if needed.\nhallucination_scorer = HallucinationFreeScorer(\n    model_id="openai/gpt-4o", # or any other model supported by litellm\n    column_map={"context": "input", "output": "other_col"}\n)\n\n# Create dataset\ndataset = [\n    {"input": "John likes various types of cheese."},\n    {"input": "Pepe likes various types of cheese."},\n]\n\n@weave.op\ndef model(input: str) -> str:\n    return "The person\'s favorite cheese is cheddar."\n\n# Run evaluation\nevaluation = weave.Evaluation(\n    dataset=dataset,\n    scorers=[hallucination_scorer],\n)\nresult = asyncio.run(evaluation.evaluate(model))\nprint(result)\n# Example output:\n# {\'HallucinationFreeScorer\': {\'has_hallucination\': {\'true_count\': 2, \'true_fraction\': 1.0}}, \'model_latency\': {\'mean\': ...}}\n'})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"summarizationscorer",children:(0,r.jsx)(n.code,{children:"SummarizationScorer"})}),(0,r.jsx)(n.p,{children:"Use an LLM to compare a summary to the original text and evaluate the quality of the summary."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weave.scorers import SummarizationScorer\n\nscorer = SummarizationScorer(\n    model_id="openai/gpt-4o"  # or any other model supported by litellm\n)\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How It Works:"})}),(0,r.jsx)(n.p,{children:"This scorer evaluates summaries in two ways:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Entity Density:"}),' Checks the ratio of unique entities (like names, places, or things) mentioned in the summary to the total word count in the summary in order to estimate the "information density" of the summary. Uses an LLM to extract the entities. Similar to how entity density is used in the Chain of Density paper, ',(0,r.jsx)(n.a,{href:"https://arxiv.org/abs/2309.04269",children:"https://arxiv.org/abs/2309.04269"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quality Grading:"})," An LLM evaluator grades the summary as ",(0,r.jsx)(n.code,{children:"poor"}),", ",(0,r.jsx)(n.code,{children:"ok"}),", or ",(0,r.jsx)(n.code,{children:"excellent"}),". These grades are then mapped to scores (0.0 for poor, 0.5 for ok, and 1.0 for excellent) for aggregate performance evaluation."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Customization:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Adjust ",(0,r.jsx)(n.code,{children:"summarization_evaluation_system_prompt"})," and ",(0,r.jsx)(n.code,{children:"summarization_evaluation_prompt"})," to tailor the evaluation process."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The scorer uses litellm internally."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"score"})," method expects the original text (the one being summarized) to be present in the ",(0,r.jsx)(n.code,{children:"input"})," column. Use ",(0,r.jsx)(n.code,{children:"column_map"})," if your dataset uses a different name."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Here you have an example usage in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport weave\nfrom weave.scorers import SummarizationScorer\n\nclass SummarizationModel(weave.Model):\n    @weave.op()\n    async def predict(self, input: str) -> str:\n        return \"This is a summary of the input text.\"\n\n# Initialize scorer\nsummarization_scorer = SummarizationScorer(\n    model_id=\"openai/gpt-4o\"  # or any other model supported by litellm\n)\n# Create dataset\ndataset = [\n    {\"input\": \"The quick brown fox jumps over the lazy dog.\"},\n    {\"input\": \"Artificial Intelligence is revolutionizing various industries.\"}\n]\n# Run evaluation\nevaluation = weave.Evaluation(dataset=dataset, scorers=[summarization_scorer])\nresults = asyncio.run(evaluation.evaluate(SummarizationModel()))\nprint(results)\n# Example output:\n# {'SummarizationScorer': {'is_entity_dense': {'true_count': 0, 'true_fraction': 0.0}, 'summarization_eval_score': {'mean': 0.0}, 'entity_density': {'mean': 0.0}}, 'model_latency': {'mean': ...}}\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"openaimoderationscorer",children:(0,r.jsx)(n.code,{children:"OpenAIModerationScorer"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"OpenAIModerationScorer"})," uses OpenAI's Moderation API to check if the AI system's output contains disallowed content, such as hate speech or explicit material."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from weave.scorers import OpenAIModerationScorer\n\nscorer = OpenAIModerationScorer()\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How It Works:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sends the AI's output to the OpenAI Moderation endpoint and returns a structured response indicating if the content is flagged."}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes:"}),"\nHere is an example in the context of an evaluation:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport weave\nfrom weave.scorers import OpenAIModerationScorer\n\nclass MyModel(weave.Model):\n    @weave.op\n    async def predict(self, input: str) -> str:\n        return input\n\n# Initialize scorer\nmoderation_scorer = OpenAIModerationScorer()\n\n# Create dataset\ndataset = [\n    {\"input\": \"I love puppies and kittens!\"},\n    {\"input\": \"I hate everyone and want to hurt them.\"}\n]\n\n# Run evaluation\nevaluation = weave.Evaluation(dataset=dataset, scorers=[moderation_scorer])\nresults = asyncio.run(evaluation.evaluate(MyModel()))\nprint(results)\n# Example output:\n# {'OpenAIModerationScorer': {'flagged': {'true_count': 1, 'true_fraction': 0.5}, 'categories': {'violence': {'true_count': 1, 'true_fraction': 1.0}}}, 'model_latency': {'mean': ...}}\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"embeddingsimilarityscorer",children:(0,r.jsx)(n.code,{children:"EmbeddingSimilarityScorer"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"EmbeddingSimilarityScorer"})," computes the cosine similarity between the embeddings of the AI system's output and a target text from your dataset. It is useful for measuring how similar the AI's output is to a reference text."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weave.scorers import EmbeddingSimilarityScorer\n\nsimilarity_scorer = EmbeddingSimilarityScorer(\n    model_id="openai/text-embedding-3-small",  # or any other model supported by litellm\n    threshold=0.4  # the cosine similarity threshold\n)\n'})}),(0,r.jsxs)(n.p,{children:["Note: You can use ",(0,r.jsx)(n.code,{children:"column_map"})," to map the ",(0,r.jsx)(n.code,{children:"target"})," column to a different name."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"threshold"})," (float): The minimum cosine similarity score (between -1 and 1) needed to consider the two texts similar (defaults to ",(0,r.jsx)(n.code,{children:"0.5"}),")."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Here is an example usage in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import asyncio\nimport weave\nfrom weave.scorers import EmbeddingSimilarityScorer\n\n# Initialize scorer\nsimilarity_scorer = EmbeddingSimilarityScorer(\n    model_id="openai/text-embedding-3-small",  # or any other model supported by litellm\n    threshold=0.7\n)\n# Create dataset\ndataset = [\n    {\n        "input": "He\'s name is John",\n        "target": "John likes various types of cheese.",\n    },\n    {\n        "input": "He\'s name is Pepe.",\n        "target": "Pepe likes various types of cheese.",\n    },\n]\n# Define model\n@weave.op\ndef model(input: str) -> str:\n    return "John likes various types of cheese."\n\n# Run evaluation\nevaluation = weave.Evaluation(\n    dataset=dataset,\n    scorers=[similarity_scorer],\n)\nresult = asyncio.run(evaluation.evaluate(model))\nprint(result)\n# Example output:\n# {\'EmbeddingSimilarityScorer\': {\'is_similar\': {\'true_count\': 1, \'true_fraction\': 0.5}, \'similarity_score\': {\'mean\': 0.844851403}}, \'model_latency\': {\'mean\': ...}}\n'})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"validjsonscorer",children:(0,r.jsx)(n.code,{children:"ValidJSONScorer"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ValidJSONScorer"})," checks whether the AI system's output is valid JSON. This scorer is useful when you expect the output to be in JSON format and need to verify its validity."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from weave.scorers import ValidJSONScorer\n\njson_scorer = ValidJSONScorer()\n"})}),(0,r.jsx)(n.p,{children:"Here is an example in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport weave\nfrom weave.scorers import ValidJSONScorer\n\nclass JSONModel(weave.Model):\n    @weave.op()\n    async def predict(self, input: str) -> str:\n        # This is a placeholder.\n        # In a real scenario, this would generate JSON.\n        return '{\"key\": \"value\"}'\n\nmodel = JSONModel()\njson_scorer = ValidJSONScorer()\n\ndataset = [\n    {\"input\": \"Generate a JSON object with a key and value\"},\n    {\"input\": \"Create an invalid JSON\"}\n]\n\nevaluation = weave.Evaluation(dataset=dataset, scorers=[json_scorer])\nresults = asyncio.run(evaluation.evaluate(model))\nprint(results)\n# Example output:\n# {'ValidJSONScorer': {'json_valid': {'true_count': 2, 'true_fraction': 1.0}}, 'model_latency': {'mean': ...}}\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"validxmlscorer",children:(0,r.jsx)(n.code,{children:"ValidXMLScorer"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ValidXMLScorer"})," checks whether the AI system's output is valid XML. It is useful when expecting XML-formatted outputs."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from weave.scorers import ValidXMLScorer\n\nxml_scorer = ValidXMLScorer()\n"})}),(0,r.jsx)(n.p,{children:"Here is an example in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport weave\nfrom weave.scorers import ValidXMLScorer\n\nclass XMLModel(weave.Model):\n    @weave.op()\n    async def predict(self, input: str) -> str:\n        # This is a placeholder. In a real scenario, this would generate XML.\n        return '<root><element>value</element></root>'\n\nmodel = XMLModel()\nxml_scorer = ValidXMLScorer()\n\ndataset = [\n    {\"input\": \"Generate a valid XML with a root element\"},\n    {\"input\": \"Create an invalid XML\"}\n]\n\nevaluation = weave.Evaluation(dataset=dataset, scorers=[xml_scorer])\nresults = asyncio.run(evaluation.evaluate(model))\nprint(results)\n# Example output:\n# {'ValidXMLScorer': {'xml_valid': {'true_count': 2, 'true_fraction': 1.0}}, 'model_latency': {'mean': ...}}\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"pydanticscorer",children:(0,r.jsx)(n.code,{children:"PydanticScorer"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PydanticScorer"})," validates the AI system's output against a Pydantic model to ensure it adheres to a specified schema or data structure."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from weave.scorers import PydanticScorer\nfrom pydantic import BaseModel\n\nclass FinancialReport(BaseModel):\n    revenue: int\n    year: str\n\npydantic_scorer = PydanticScorer(model=FinancialReport)\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.h2,{id:"ragas---contextentityrecallscorer",children:["RAGAS - ",(0,r.jsx)(n.code,{children:"ContextEntityRecallScorer"})]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ContextEntityRecallScorer"})," estimates context recall by extracting entities from both the AI system's output and the provided context, then computing the recall score. It is based on the ",(0,r.jsx)(n.a,{href:"https://github.com/explodinggradients/ragas",children:"RAGAS"})," evaluation library."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weave.scorers import ContextEntityRecallScorer\n\nentity_recall_scorer = ContextEntityRecallScorer(\n    model_id="openai/gpt-4o"\n)\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How It Works:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uses an LLM to extract unique entities from the output and context and calculates recall."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Recall"})," indicates the proportion of important entities from the context that are captured in the output."]}),"\n",(0,r.jsx)(n.li,{children:"Returns a dictionary with the recall score."}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Expects a ",(0,r.jsx)(n.code,{children:"context"})," column in your dataset. Use the ",(0,r.jsx)(n.code,{children:"column_map"})," attribute if the column name is different."]}),"\n"]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.h2,{id:"ragas---contextrelevancyscorer",children:["RAGAS - ",(0,r.jsx)(n.code,{children:"ContextRelevancyScorer"})]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ContextRelevancyScorer"})," evaluates the relevancy of the provided context to the AI system's output. It is based on the ",(0,r.jsx)(n.a,{href:"https://github.com/explodinggradients/ragas",children:"RAGAS"})," evaluation library."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weave.scorers import ContextRelevancyScorer\n\nrelevancy_scorer = ContextRelevancyScorer(\n    model_id="openai/gpt-4o",  # or any other model supported by litellm\n    relevancy_prompt="""\nGiven the following question and context, rate the relevancy of the context to the question on a scale from 0 to 1.\n\nQuestion: {question}\nContext: {context}\nRelevancy Score (0-1):\n"""\n)\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How It Works:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uses an LLM to rate the relevancy of the context to the output on a scale from 0 to 1."}),"\n",(0,r.jsxs)(n.li,{children:["Returns a dictionary with the ",(0,r.jsx)(n.code,{children:"relevancy_score"}),"."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Expects a ",(0,r.jsx)(n.code,{children:"context"})," column in your dataset. Use ",(0,r.jsx)(n.code,{children:"column_map"})," if a different name is used."]}),"\n",(0,r.jsxs)(n.li,{children:["Customize the ",(0,r.jsx)(n.code,{children:"relevancy_prompt"})," to define how relevancy is assessed."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Here is an example usage in the context of an evaluation:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import asyncio\nfrom textwrap import dedent\nimport weave\nfrom weave.scorers import ContextEntityRecallScorer, ContextRelevancyScorer\n\nclass RAGModel(weave.Model):\n    @weave.op()\n    async def predict(self, question: str) -> str:\n        "Retrieve relevant context"\n        return "Paris is the capital of France."\n\n# Define prompts\nrelevancy_prompt: str = dedent("""\n    Given the following question and context, rate the relevancy of the context to the question on a scale from 0 to 1.\n\n    Question: {question}\n    Context: {context}\n    Relevancy Score (0-1):\n    """)\n# Initialize scorers\nentity_recall_scorer = ContextEntityRecallScorer()\nrelevancy_scorer = ContextRelevancyScorer(relevancy_prompt=relevancy_prompt)\n# Create dataset\ndataset = [\n    {\n        "question": "What is the capital of France?",\n        "context": "Paris is the capital city of France."\n    },\n    {\n        "question": "Who wrote Romeo and Juliet?",\n        "context": "William Shakespeare wrote many famous plays."\n    }\n]\n# Run evaluation\nevaluation = weave.Evaluation(\n    dataset=dataset,\n    scorers=[entity_recall_scorer, relevancy_scorer]\n)\nresults = asyncio.run(evaluation.evaluate(RAGModel()))\nprint(results)\n# Example output:\n# {\'ContextEntityRecallScorer\': {\'recall\': {\'mean\': ...}}, \n# \'ContextRelevancyScorer\': {\'relevancy_score\': {\'mean\': ...}}, \n# \'model_latency\': {\'mean\': ...}}\n'})})]}),(0,r.jsx)(s.default,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet.  Stay tuned!\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The built-in scorers were calibrated using OpenAI models (e.g. ",(0,r.jsx)(n.code,{children:"openai/gpt-4o"}),", ",(0,r.jsx)(n.code,{children:"openai/text-embedding-3-small"}),"). If you wish to experiment with other providers, you can simply update the ",(0,r.jsx)(n.code,{children:"model_id"}),". For example, to use an Anthropic model:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weave.scorers import SummarizationScorer\n\n# Switch to Anthropic\'s Claude model\nsummarization_scorer = SummarizationScorer(\n    model_id="anthropic/claude-3-5-sonnet-20240620"\n)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});t(67294);var r=t(90512);const o={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t,children:n})}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(67294),o=t(90512),a=t(12466),s=t(70989),i=t(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=t(85893);function d(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),o=i[t].value;o!==r&&(u(n),s(o))},m=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:m,onClick:h,...a,className:(0,o.Z)("tabs__item",l.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function u(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function h(e){const n=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,o.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(u,{...n,...e})]})}function m(e){const n=(0,i.default)();return(0,c.jsx)(h,{...e,children:(0,s.h)(e.children)},String(n))}},70989:(e,n,t)=>{t.d(n,{Y:()=>m,h:()=>c});var r=t(67294),o=t(16550),a=t(20469),s=t(91980),i=t(67392),l=t(20812);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=d(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[m,p]=h({queryString:t,groupId:o}),[x,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,l.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),y=(()=>{const e=m??x;return u({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),v(e)}),[p,v,s]),tabValues:s}}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);