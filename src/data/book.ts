export interface BookDetails {
  title: string;
  subtitle: string;
  author: string;
  year: string;
  shortDescription: string;
  fullOverview: string;
  coverImage: string;
  coverImageHd: string;
  amazonUrl: string;
  credits: {
    role: string;
    name: string;
  }[];
  inTheBook: {
    title: string;
    description: string;
    icon: string;
  }[];
  audience: string[];
}

export const bookData: BookDetails = {
  title: "Agents That Survive",
  subtitle: "FIVE CRITICAL GAPS. REAL-WORLD PATTERNS. PRODUCTION-READY SYSTEMS BUILT FOR 2026 AND BEYOND.",
  author: "Rajeev K. Dave",
  year: "2026",
  shortDescription: "Five critical gaps. Real-world patterns. Production-ready systems built for 2026 and beyond.",
  fullOverview: "A practical field guide to building production-ready Agentic AI systems, covering critical gaps, real-world patterns, and engineering approaches for AI agents that need to work reliably beyond the prototype stage. Grounded in 20+ years of enterprise engineering leadership and real-world multi-agent deployments, this book bridges the vast chasm between fragile agent demos and resilient enterprise software.",
  coverImage: "/assets/images/agents-that-survive-3d.png",
  coverImageHd: "/assets/images/agents-that-survive-3d.png",
  amazonUrl: "https://www.amazon.in/Agents-That-Survive-REAL-WORLD-PRODUCTION-READY/dp/B0HGMRJF96", // Link to Amazon India
  credits: [
    { role: "Photographer", name: "Sharad Nagar" },
    { role: "Designer", name: "Apeksha Dave" },
    { role: "Technical Reviewer", name: "Michael Palmer" }
  ],
  inTheBook: [
    {
      title: "The 5 Critical Gaps",
      description: "Why demo agents fail under real enterprise constraints — state drift, non-deterministic tool failures, latency cascades, security boundary leaks, and evaluation blindspots.",
      icon: "AlertTriangle"
    },
    {
      title: "Real-World Patterns",
      description: "Proven architectural blueprints for resilient state graphs, cyclic workflows, deterministic fallbacks, and multi-model consensus mechanisms.",
      icon: "GitBranch"
    },
    {
      title: "Production-Ready Architectures",
      description: "Engineering rigor applied to LLMs: distributed tracing across tool invocations, short-lived credentials, structured telemetry, and zero-trust API gateways.",
      icon: "Cpu"
    },
    {
      title: "Agentic AI in Practice",
      description: "Case studies and architectural postmortems from enterprise deployments handling tens of thousands of complex real-world workflows.",
      icon: "Layers"
    },
    {
      title: "What's Next (2026+)",
      description: "Preparing systems for the autonomous enterprise: Model Context Protocol (MCP), agent-to-agent collaboration fabrics, and evolutionary self-healing pipelines.",
      icon: "Compass"
    }
  ],
  audience: [
    "Enterprise Architects & CTOs designing long-lived AI roadmaps",
    "Engineering Leaders tasked with scaling AI beyond prototype sandboxes",
    "AI Engineers & ML Practitioners seeking production-grade reliability patterns",
    "Product Leaders needing dependable, measurable agent outcomes"
  ]
};
