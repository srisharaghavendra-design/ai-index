export type LinkItem = {
  title: string;
  url?: string;
  date?: string; // ISO: "YYYY-MM-DD"
  summary?: string;
  tags?: string[];
};

export type ProductItem = {
  name: string;
  url?: string;
  type?: "model" | "api" | "app" | "platform" | "tooling" | "other";
  pricing?: string;
  summary?: string;
};

export type Company = {
  name: string;
  slug: string;
  tagline: string;

  category?: string;
  pricing?: string;
  hq?: string;
  website?: string;
  notes?: string;

  tags?: string[];

  products?: ProductItem[];
  news?: LinkItem[];
  launches?: LinkItem[];
};

export const companies: Company[] = [
  {
    name: "OpenAI",
    slug: "openai",
    tagline: "Foundation models + API platform",
    category: "Foundation model",
    pricing: "Usage-based",
    hq: "San Francisco, US",
    website: "https://openai.com",
    notes: "ChatGPT + API ecosystem",
    tags: ["LLM", "API", "Multimodal"],

    products: [
      { name: "ChatGPT", url: "https://chatgpt.com", type: "app", summary: "AI assistant for consumers and teams." },
      { name: "OpenAI API", url: "https://platform.openai.com", type: "api", pricing: "Usage-based", summary: "APIs for text, vision, audio, tools." },
      { name: "GPT-4o", type: "model", summary: "Real-time multimodal model family." },
      { name: "DALL·E", type: "model", summary: "Image generation model family." },
      { name: "Whisper", type: "model", summary: "Speech-to-text model." },
    ],
    news: [
      { title: "Developer platform docs & updates", url: "https://platform.openai.com/docs", tags: ["Docs", "API"] },
      { title: "OpenAI blog updates", url: "https://openai.com/news", tags: ["Company"] },
      { title: "Policy & safety updates", url: "https://openai.com/policies", tags: ["Policy", "Safety"] },
    ],
    launches: [
      { title: "ChatGPT launch", date: "2022-11-30" },
      { title: "GPT-4 launch", date: "2023-03-14" },
      { title: "GPT-4o launch", date: "2024-05-13" },
    ],
  },

  {
    name: "Anthropic",
    slug: "anthropic",
    tagline: "Claude models + API",
    category: "Foundation model",
    pricing: "Usage-based",
    hq: "San Francisco, US",
    website: "https://www.anthropic.com",
    notes: "Safety-focused AI research",
    tags: ["LLM", "Safety", "API"],

    products: [
      { name: "Claude", url: "https://claude.ai", type: "app", summary: "AI assistant for writing and analysis." },
      { name: "Claude API", url: "https://docs.anthropic.com", type: "api", pricing: "Usage-based", summary: "API access to Claude models." },
      { name: "Claude models", type: "model", summary: "Claude family (general + reasoning)." },
      { name: "Claude for Teams/Enterprise", url: "https://www.anthropic.com", type: "app", summary: "Business-focused Claude offering." },
    ],
    news: [
      { title: "Anthropic docs & model updates", url: "https://docs.anthropic.com", tags: ["Docs", "API"] },
      { title: "Anthropic blog", url: "https://www.anthropic.com/news", tags: ["Company"] },
      { title: "Research & safety posts", url: "https://www.anthropic.com/research", tags: ["Research", "Safety"] },
    ],
    launches: [
      { title: "Claude launch", date: "2023-03-14" },
      { title: "Claude 3 launch", date: "2024-03-04" },
      { title: "Claude 3.5 launch", date: "2024-06-20" },
    ],
  },

  {
    name: "Google DeepMind",
    slug: "google-deepmind",
    tagline: "Research + models across Google",
    category: "Research lab",
    pricing: "Via Google Cloud / products",
    hq: "London, UK",
    website: "https://deepmind.google",
    notes: "Gemini models + AI research",
    tags: ["LLM", "Research", "Multimodal"],

    products: [
      { name: "Gemini", url: "https://ai.google", type: "model", summary: "Google’s multimodal model family." },
      { name: "Google AI Studio (Gemini API)", url: "https://aistudio.google.com", type: "api", summary: "Build with Gemini in AI Studio." },
      { name: "Vertex AI", url: "https://cloud.google.com/vertex-ai", type: "platform", summary: "Enterprise ML/GenAI platform on GCP." },
      { name: "AlphaFold", url: "https://deepmind.google/technologies/alphafold", type: "tooling", summary: "Protein structure prediction." },
      { name: "Imagen", url: "https://ai.google", type: "model", summary: "Text-to-image model family (Google)." },
    ],
    news: [
      { title: "DeepMind blog", url: "https://deepmind.google/discover/blog/", tags: ["Research"] },
      { title: "Google AI announcements", url: "https://blog.google/technology/ai/", tags: ["Company"] },
      { title: "Vertex AI updates", url: "https://cloud.google.com/blog/products/ai-machine-learning", tags: ["Cloud"] },
    ],
    launches: [
      { title: "Gemini launch", date: "2023-12-06" },
      { title: "Gemini Advanced", date: "2024-02-08" },
      { title: "AlphaFold 3", date: "2024-05-08" },
    ],
  },

  {
    name: "Meta (Llama)",
    slug: "meta-llama",
    tagline: "Open models + ecosystem",
    category: "Open model",
    pricing: "Open-weight",
    hq: "Menlo Park, US",
    website: "https://ai.meta.com",
    notes: "Llama open models",
    tags: ["LLM", "Open-weight", "Ecosystem"],

    products: [
      { name: "Llama models", url: "https://ai.meta.com/llama/", type: "model", summary: "Llama open(-ish) weight model family." },
      { name: "Meta AI", url: "https://ai.meta.com/meta-ai/", type: "app", summary: "Assistant experiences across Meta apps." },
      { name: "Llama on GitHub", url: "https://github.com/meta-llama", type: "tooling", summary: "Developer resources and releases." },
      { name: "Llama 2", type: "model", summary: "Second generation release." },
      { name: "Llama 3", type: "model", summary: "Third generation release." },
    ],
    news: [
      { title: "Meta AI blog", url: "https://ai.meta.com/blog/", tags: ["Research", "Product"] },
      { title: "Llama resources", url: "https://ai.meta.com/llama/", tags: ["Models"] },
      { title: "Meta Llama GitHub", url: "https://github.com/meta-llama", tags: ["Open-source"] },
    ],
    launches: [
      { title: "Llama initial release", date: "2023-02-24" },
      { title: "Llama 2 launch", date: "2023-07-18" },
      { title: "Llama 3 launch", date: "2024-04-18" },
    ],
  },

  {
    name: "xAI",
    slug: "xai",
    tagline: "Grok + AI lab",
    category: "Foundation model",
    pricing: "Subscription-based",
    hq: "Austin, US",
    website: "https://x.ai",
    notes: "Integrated with X platform",
    tags: ["LLM", "Consumer", "X"],

    products: [
      { name: "Grok", url: "https://x.ai", type: "app", summary: "Assistant experience tied to X (plan-dependent)." },
      { name: "Grok models", type: "model", summary: "Grok model family." },
      { name: "xAI site", url: "https://x.ai", type: "platform", summary: "Company/product landing and updates." },
    ],
    news: [
      { title: "xAI updates", url: "https://x.ai", tags: ["Company"] },
      { title: "Grok announcements", url: "https://x.ai", tags: ["Product"] },
    ],
    launches: [
      { title: "Grok initial release", date: "2023-11-04" },
      { title: "Grok 2", date: "2024-08-01" },
    ],
  },

  {
    name: "Mistral AI",
    slug: "mistral-ai",
    tagline: "Open-weight + API models",
    category: "Open-weight model",
    pricing: "Usage-based",
    hq: "Paris, France",
    website: "https://mistral.ai",
    notes: "Efficient open models",
    tags: ["Open-weight", "LLM", "API"],

    products: [
      { name: "Mistral models", url: "https://mistral.ai", type: "model", summary: "Model family (open + hosted)." },
      { name: "Mistral API", url: "https://mistral.ai", type: "api", pricing: "Usage-based", summary: "Hosted API access." },
      { name: "Mixtral", type: "model", summary: "Mixture-of-Experts model family." },
      { name: "Mistral on Hugging Face", url: "https://huggingface.co/mistralai", type: "platform", summary: "Open model downloads and cards." },
    ],
    news: [
      { title: "Mistral announcements", url: "https://mistral.ai", tags: ["Company"] },
      { title: "Mistral on Hugging Face", url: "https://huggingface.co/mistralai", tags: ["Models"] },
      { title: "API/docs updates", url: "https://mistral.ai", tags: ["Docs", "API"] },
    ],
    launches: [
      { title: "Mistral 7B", date: "2023-09-27" },
      { title: "Mixtral 8x7B", date: "2023-12-11" },
      { title: "Mixtral 8x22B", date: "2024-04-10" },
    ],
  },

  {
    name: "Cohere",
    slug: "cohere",
    tagline: "Enterprise NLP + API",
    category: "Foundation model",
    pricing: "Usage-based",
    hq: "Toronto, Canada",
    website: "https://cohere.com",
    notes: "Enterprise-focused LLMs",
    tags: ["Enterprise", "LLM", "API"],

    products: [
      { name: "Cohere API", url: "https://docs.cohere.com", type: "api", pricing: "Usage-based", summary: "Generate, embed, rerank, classify." },
      { name: "Command", url: "https://cohere.com", type: "model", summary: "Instruction-tuned generation models." },
      { name: "Command R / R+", type: "model", summary: "RAG-friendly model family." },
      { name: "Embed", type: "model", summary: "Embedding models for retrieval." },
    ],
    news: [
      { title: "Cohere docs", url: "https://docs.cohere.com", tags: ["Docs", "API"] },
      { title: "Cohere blog", url: "https://cohere.com/blog", tags: ["Company"] },
      { title: "Enterprise announcements", url: "https://cohere.com", tags: ["Enterprise"] },
    ],
    launches: [
      { title: "Command models (ongoing)", date: "2023-01-01" },
      { title: "Command R", date: "2024-04-01" },
    ],
  },

  {
    name: "Stability AI",
    slug: "stability-ai",
    tagline: "Open generative models",
    category: "Generative AI",
    pricing: "Mixed",
    hq: "London, UK",
    website: "https://stability.ai",
    notes: "Stable Diffusion creator",
    tags: ["Image", "Open", "GenAI"],

    products: [
      { name: "Stable Diffusion", url: "https://stability.ai", type: "model", summary: "Text-to-image model family." },
      { name: "SDXL", type: "model", summary: "High-fidelity Stable Diffusion variant." },
      { name: "DreamStudio", url: "https://dreamstudio.ai", type: "app", summary: "Web UI for generating images." },
      { name: "Stable Video", type: "model", summary: "Video generation models (varies by version)." },
    ],
    news: [
      { title: "Stability AI blog", url: "https://stability.ai/blog", tags: ["Company"] },
      { title: "Product/model updates", url: "https://stability.ai", tags: ["Models"] },
    ],
    launches: [
      { title: "Stable Diffusion", date: "2022-08-22" },
      { title: "SDXL", date: "2023-07-26" },
    ],
  },

  {
    name: "Hugging Face",
    slug: "hugging-face",
    tagline: "Model hub + AI tooling",
    category: "Platform",
    pricing: "Freemium",
    hq: "New York, US",
    website: "https://huggingface.co",
    notes: "Open AI community platform",
    tags: ["Platform", "Open-source", "Tools"],

    products: [
      { name: "Model Hub", url: "https://huggingface.co/models", type: "platform", summary: "Discover models and datasets." },
      { name: "Spaces", url: "https://huggingface.co/spaces", type: "platform", summary: "Host demos and apps." },
      { name: "Inference API", url: "https://huggingface.co/inference-api", type: "api", summary: "Hosted inference API." },
      { name: "Inference Endpoints", url: "https://huggingface.co/inference-endpoints", type: "platform", summary: "Dedicated production endpoints." },
    ],
    news: [
      { title: "Hugging Face blog", url: "https://huggingface.co/blog", tags: ["Company"] },
      { title: "Transformers (GitHub)", url: "https://github.com/huggingface/transformers", tags: ["Open-source"] },
      { title: "Enterprise Hub", url: "https://huggingface.co/enterprise", tags: ["Enterprise"] },
    ],
    launches: [
      { title: "Transformers library", date: "2018-10-01" },
      { title: "Inference Endpoints", date: "2022-01-01" },
    ],
  },

  {
    name: "Perplexity",
    slug: "perplexity",
    tagline: "AI search engine",
    category: "AI Search",
    pricing: "Subscription-based",
    hq: "San Francisco, US",
    website: "https://perplexity.ai",
    notes: "AI-powered search experience",
    tags: ["Search", "Consumer", "Subscription"],

    products: [
      { name: "Perplexity", url: "https://perplexity.ai", type: "app", summary: "AI answer engine + web search." },
      { name: "Perplexity Pro", url: "https://perplexity.ai", type: "app", pricing: "Subscription", summary: "Higher limits + premium features." },
      { name: "Perplexity blog", url: "https://www.perplexity.ai/hub/blog", type: "platform", summary: "Updates and product posts." },
    ],
    news: [
      { title: "Perplexity Hub (blog)", url: "https://www.perplexity.ai/hub/blog", tags: ["Company"] },
      { title: "Product announcements", url: "https://perplexity.ai", tags: ["Product"] },
    ],
    launches: [
      { title: "Perplexity launch", date: "2022-12-01" },
      { title: "Perplexity Pro", date: "2023-02-01" },
    ],
  },
];