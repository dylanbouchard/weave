// This is a mapping of LLM names to their max token limits.
// Directly from the pycache model_providers.json in trace_server.
// Some were removed because they are not supported when Josiah tried on Oct 30, 2024.
export const LLM_MAX_TOKENS = {
  'gpt-4o-mini': {
    provider: 'openai',
    max_tokens: 16384,
    supports_function_calling: true,
  },
  'claude-3-5-sonnet-20240620': {
    provider: 'anthropic',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'claude-3-5-sonnet-20241022': {
    provider: 'anthropic',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'claude-3-haiku-20240307': {
    provider: 'anthropic',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'claude-3-opus-20240229': {
    provider: 'anthropic',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'claude-3-sonnet-20240229': {
    provider: 'anthropic',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-001': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-002': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-8b-exp-0827': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-8b-exp-0924': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-exp-0827': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash-latest': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-flash': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro-001': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro-002': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro-exp-0801': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro-exp-0827': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro-latest': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-1.5-pro': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gemini/gemini-pro': {
    provider: 'gemini',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'gpt-3.5-turbo-0125': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-3.5-turbo-1106': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4-1106-preview': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4-32k-0314': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: false,
  },
  'gpt-4-turbo-2024-04-09': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4-turbo-preview': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4-turbo': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4o-2024-05-13': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'gpt-4o-2024-08-06': {
    provider: 'openai',
    max_tokens: 16384,
    supports_function_calling: true,
  },
  'gpt-4o-mini-2024-07-18': {
    provider: 'openai',
    max_tokens: 16384,
    supports_function_calling: true,
  },
  'gpt-4o': {
    provider: 'openai',
    max_tokens: 4096,
    supports_function_calling: true,
  },
  'groq/gemma-7b-it': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/gemma2-9b-it': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/llama-3.1-8b-instant': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/llama3-70b-8192': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/llama3-8b-8192': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/llama3-groq-8b-8192-tool-use-preview': {
    provider: 'groq',
    max_tokens: 8192,
    supports_function_calling: true,
  },
  'groq/mixtral-8x7b-32768': {
    provider: 'groq',
    max_tokens: 32768,
    supports_function_calling: true,
  },
  'o1-mini-2024-09-12': {
    provider: 'openai',
    max_tokens: 65536,
    supports_function_calling: true,
  },
  'o1-mini': {
    provider: 'openai',
    max_tokens: 65536,
    supports_function_calling: true,
  },
};

export type LLMMaxTokensKey = keyof typeof LLM_MAX_TOKENS;

export const LLM_PROVIDERS = ['openai', 'anthropic', 'gemini', 'groq'];
export const LLM_PROVIDER_LABELS: Record<
  (typeof LLM_PROVIDERS)[number],
  string
> = {
  openai: 'OpenAI',
  anthropic: 'Anthropic',
  gemini: 'Gemini',
  groq: 'Groq',
};
