import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { SidebarItemCategoryBase } from "@docusaurus/plugin-content-docs-types";

const CATEGORY_SECTION_HEADER_MIXIN: SidebarItemCategoryBase = {
  type: "category",
  collapsible: false,
  collapsed: false,
  className: "sidebar-section-title",
};

const sidebars: SidebarsConfig = {
  documentationSidebar: [
    {
      label: "👋 Getting Started",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      items: [
        "introduction",
        {
          type: "doc",
          label: "Trace LLMs",
          id: "quickstart",
        },
        {
          type: "doc",
          label: "Trace Applications",
          id: "tutorial-tracing_2",
        },
        "tutorial-weave_models",
        {
          type: "doc",
          label: "Build an Evaluation",
          id: "tutorial-eval",
        },
        {
          type: "doc",
          label: "Evaluate a RAG App",
          id: "tutorial-rag",
        },
      ],
    },
    {
      label: "🤖 Product Walkthrough",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "LLM Application Tracing",
          link: { type: "doc", id: "guides/tracking/index" },
          items: [
            "guides/tracking/tracing",
            "guides/tracking/ops",
            "guides/tracking/objects",
          ],
        },
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Evaluation",
          link: { type: "doc", id: "guides/core-types/evaluations" },
          items: ["guides/evaluation/scorers", "guides/evaluation/guardrails_and_monitors"],
        },
        "guides/core-types/prompts",
        "guides/core-types/models",
        "guides/core-types/datasets",
        "guides/tracking/feedback",
        "guides/tracking/costs",
        "guides/tools/comparison",
        "guides/tools/playground",
        "guides/core-types/media",
        "guides/core-types/env-vars",
        "guides/troubleshooting",
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Tools & Utilities",
          link: { type: "doc", id: "guides/tools/index" },
          items: ["guides/tools/serve", "guides/tools/deploy"],
        },
      ],
    },
    {
      label: "🔥 Integrations",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      link: { type: "doc", id: "guides/integrations/index" },
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "LLM Providers",
          items: [
            "guides/integrations/openai",
            "guides/integrations/anthropic",
            "guides/integrations/cerebras",
            "guides/integrations/cohere",
            "guides/integrations/mistral",
            "guides/integrations/azure",
            "guides/integrations/bedrock",
            "guides/integrations/google-gemini",
            "guides/integrations/together_ai",
            "guides/integrations/groq",
            "guides/integrations/openrouter",
            "guides/integrations/litellm",
            "guides/integrations/nvidia_nim",
          ],
        },
        "guides/integrations/local_models",
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Frameworks",
          items: [
            ,
            "guides/integrations/langchain",
            "guides/integrations/llamaindex",
            "guides/integrations/dspy",
            "guides/integrations/instructor",
          ],
        },
      ],
    },
    {
      label: "🏭 Enterprise",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      items: [
        {
          type: "doc",
          id: "guides/platform/index",
        },
      ],
    },
  ],
  // TODO: add the actual ts-sdk sidebar
  typescriptSdkSidebar: [
    { type: "autogenerated", dirName: "reference/typescript-sdk" },
  ],
  pythonSdkSidebar: [
    { type: "autogenerated", dirName: "reference/python-sdk" },
  ],
  serviceApiSidebar: require("./docs/reference/service-api/sidebar.ts")
    .filter((row) => {
      if (row.id == "reference/service-api/fastapi") {
        // Remove FastAPI from the sidebar - this is a default homepage that is not useful for us
        return false;
      }

      // Hide the `Service` category from the sidebar
      if (row.label == "Service") {
        return false;
      }

      return true;
    })
    .map((row) => {
      // This makes each section nicely formatted.
      // Totally up for debate if we want to keep this or not.
      if (row.type === "category") {
        return {
          ...row,
          ...CATEGORY_SECTION_HEADER_MIXIN,
        };
      }

      return row;
    }),
  // This will probably need to be customized in the future
  notebookSidebar: [
    {
      label: "Python",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      collapsible: true,
      collapsed: false,
      items: [
        { type: "autogenerated", dirName: "reference/gen_notebooks" },
      ],
    },
    {
      label: "TypeScript",
      ...CATEGORY_SECTION_HEADER_MIXIN,
      collapsible: true,
      collapsed: false,
      items: [
        { type: "autogenerated", dirName: "reference/generated_typescript_docs" },
      ],
    },
  ],
};

export default sidebars;
