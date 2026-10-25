export interface AIToolCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  capabilities: string[];
  icon: string;
}

export const aiExpertiseData: AIToolCategory[] = [
  {
    id: "llm-assistants",
    title: "AI Assistants & Language Models",
    subtitle: "Reasoning, Prompting & Synthesizing",
    description:
      "Deep daily workflows utilizing leading frontier models for strategic system architecture, comprehensive code review, multi-modal analysis, and dynamic document generation.",
    tools: ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Perplexity AI"],
    capabilities: [
      "Complex prompt engineering & system instructions",
      "Chain-of-thought analysis & documentation synthesis",
      "Context window optimization & token management",
      "Comparative benchmark evaluation",
    ],
    icon: "Bot",
  },
  {
    id: "ai-coding",
    title: "AI-Assisted Coding & Engineering",
    subtitle: "Accelerated Frontend & Architecture",
    description:
      "Leveraging next-generation IDEs and model integrations to 10x development velocity, enforce type safety, and scaffold robust full-stack interfaces.",
    tools: ["Cursor IDE", "GitHub Copilot", "v0 by Vercel", "Claude Code"],
    capabilities: [
      "Context-aware codebase indexing (.cursorrules)",
      "Automated unit test & boilerplate generation",
      "Rapid UI component scaffolding with Tailwind",
      "Interactive refactoring & bug eradication",
    ],
    icon: "Code2",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation & Webhooks",
    subtitle: "Connecting Systems & Event Pipes",
    description:
      "Designing automated data pipelines, webhook listeners, and multi-step triggers to eliminate repetitive manual processes across business operations.",
    tools: ["n8n (Self-hosted & Cloud)", "Make (Integromat)", "Zapier", "REST Webhooks"],
    capabilities: [
      "Custom node logic & JavaScript execution",
      "Database sync across POS and e-commerce stores",
      "Event-driven instant customer alerts",
      "Automated error retries & telemetry logging",
    ],
    icon: "Workflow",
  },
  {
    id: "image-generation",
    title: "Generative Imagery & Visual Assets",
    subtitle: "Conceptual Direction & Editorial Polish",
    description:
      "Directing AI image generators for high-fidelity brand mockups, product visualization concepts, textures, and bespoke visual design assets.",
    tools: ["Midjourney v6", "DALL-E 3", "Stable Diffusion XL", "Recraft"],
    capabilities: [
      "Style consistency & seed parameter control",
      "Aspect ratio tuning & lighting prompt syntax",
      "Visual asset ideation for web hero sections",
      "Clean commercial vector & icon generation",
    ],
    icon: "Image",
  },
  {
    id: "video-generation",
    title: "AI Video Synthesis & Motion",
    subtitle: "Cinematic Concepts & Dynamic Video",
    description:
      "Exploring cutting-edge video generation platforms for teaser clips, product background motion, and next-gen multimedia narratives.",
    tools: ["Runway Gen-3", "Kling AI", "Luma Dream Machine", "Sora"],
    capabilities: [
      "First-and-last frame camera choreography",
      "High-frame-rate smooth looping generation",
      "Video extension & stylistic transitions",
      "Prompt-driven motion vector guidance",
    ],
    icon: "Video",
  },
  {
    id: "audio-generation",
    title: "Audio Synthesis & Voice Design",
    subtitle: "Natural Speech & Soundscapes",
    description:
      "Creating realistic voiceover tracks, narration layers, and bespoke UI sound effects using advanced neural audio models.",
    tools: ["ElevenLabs", "Suno AI", "OpenAI Audio TTS"],
    capabilities: [
      "Realistic multi-lingual voice synthesis",
      "Pacing, emotion, and tone fine-tuning",
      "Audio-enhanced product walkthroughs",
    ],
    icon: "Mic",
  },
  {
    id: "agents-integrations",
    title: "AI Agents & Intelligent Pipelines",
    subtitle: "Autonomous Tool Use & API Actions",
    description:
      "Integrating agentic workflows where LLMs execute external API calls, query structured databases, and make rule-bounded decisions.",
    tools: ["OpenAI Assistants API", "Function Calling", "Structured Outputs", "LangChain"],
    capabilities: [
      "Function schema definitions & JSON validation",
      "Autonomous retrieval-augmented workflows (RAG)",
      "Multi-agent task distribution patterns",
    ],
    icon: "Cpu",
  },
];
