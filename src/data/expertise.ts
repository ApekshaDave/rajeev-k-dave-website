export interface SkillItem {
  name: string;
  level: string;
  context: string;
  highlight?: boolean;
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
    skills: string[];
  }[];
  architecturalPatterns: string[];
}

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: "genai-agentic",
    title: "Generative AI & Agentic AI",
    tagline: "From stochastic LLM prototypes to deterministic, resilient production systems",
    description: "Deep expertise in building enterprise-grade multi-agent architectures, retrieval systems, and evaluation pipelines that survive production failures, control token costs, and maintain strict data privacy.",
    accentColor: "#A879FF",
    iconName: "Cpu",
    capabilities: [
      {
        title: "Agentic Systems & Multi-Agent Orchestration",
        description: "Designing stateful agent workflows, cyclic graphs, autonomous tool-use mechanisms, and human-in-the-loop approvals using LangGraph, Semantic Kernel, and Google ADK.",
        skills: ["LangGraph", "Semantic Kernel", "Google ADK", "Multi-Agent Collaboration", "Cyclic State Management", "Tool Routing"]
      },
      {
        title: "Enterprise RAG & Semantic Retrieval",
        description: "End-to-end retrieval pipelines combining dense/sparse hybrid search, contextual compression, reciprocal rank fusion (RRF), cross-encoder re-ranking, and Text-to-SQL data engines.",
        skills: ["RAG Architecture", "Text-to-SQL", "Semantic Search", "Neural Re-Ranking", "Contextual Compression", "Vector Stores"]
      },
      {
        title: "LLM Evaluation, Red-Teaming & Prompt Engineering",
        description: "Systematic offline and online evaluation frameworks, regression testing against ground-truth benchmarks, structured prompting, and jailbreak/adversarial injection testing.",
        skills: ["LLM Evaluation", "Prompt Engineering", "Adversarial Red-Teaming", "Hallucination Detection", "Synthetic Data Generation"]
      },
      {
        title: "Responsible AI & Governance",
        description: "Implementing bias detection, fairness constraints, output guardrails, data lineage, and audit trails to align AI initiatives with regulatory standards.",
        skills: ["Responsible AI", "Safety Guardrails", "PII Redaction", "Model Explainability", "Compliance & Risk"]
      }
    ],
    architecturalPatterns: [
      "Spec-Driven Agent Development (SDAD)",
      "Hybrid RAG with Reciprocal Rank Fusion",
      "Dynamic Short-Lived Credential Injection for Tool Calling",
      "Multi-Model Consensus & Hallucination Arbitration"
    ]
  },
  {
    id: "cloud-architecture",
    title: "Cloud & Enterprise Architecture",
    tagline: "Scalable, resilient hybrid-cloud foundations built for massive enterprise throughput",
    description: "20+ years designing enterprise architectures across Google Cloud, Microsoft Azure, and Databricks. Certified Azure Solutions Architect Expert with hands-on mastery of microservices and integration fabrics.",
    accentColor: "#FF9B38",
    iconName: "Cloud",
    capabilities: [
      {
        title: "Multi-Cloud & Data Platforms",
        description: "Enterprise data foundations on Google Cloud, Azure, and Databricks unifying 100+ distributed data sources for high-concurrency analytical and ML workloads.",
        skills: ["Google Cloud", "Microsoft Azure (Solutions Architect Expert)", "Databricks", "Hybrid Cloud", "Distributed Data Stores"]
      },
      {
        title: "Interoperability & Protocol Architecture",
        description: "Modern API ecosystems, Model Context Protocol (MCP) integrations, OpenAPI specifications, API gateways, and iPaaS connectivity across legacy and cloud backends.",
        skills: ["MCP (Model Context Protocol)", "OpenAPI", "Microservices", "API Gateways", "Enterprise Integration", "iPaaS"]
      },
      {
        title: "Resilience & Distributed Systems",
        description: "Architectures engineered for near-zero downtime, partition tolerance, low latency, and regional data sovereignty.",
        skills: ["Fault-Tolerant Design", "Event-Driven Systems", "Data Sovereignty", "High-Availability SLAs"]
      }
    ],
    architecturalPatterns: [
      "Enterprise MCP Host & Agent Security Gateway",
      "Unified Lakehouse Architecture with Databricks",
      "Edge-to-Cloud Retail IoT Mesh for 50,000+ Stores",
      "Zero-Trust Microservices Service Mesh"
    ]
  },
  {
    id: "engineering-operations",
    title: "Engineering & MLOps Operations",
    tagline: "Industrializing machine learning and software delivery from weeks to days",
    description: "Bridging the gap between data science and mission-critical production. Building automated CI/CD, DevSecOps pipelines, automated model registries, and full-fidelity observability.",
    accentColor: "#A879FF",
    iconName: "Layers",
    capabilities: [
      {
        title: "MLOps & AI Lifecycle Management",
        description: "End-to-end pipelines for model versioning, automated retraining triggers, deployment staging, feature stores, and drift monitoring.",
        skills: ["MLOps", "Model Versioning", "Automated Staging", "Feature Store Integration", "Concept Drift Detection"]
      },
      {
        title: "DevSecOps & Platform Automation",
        description: "Zero-friction developer platforms incorporating SAST/DAST security gates, automated compliance checks, and self-service deployment orchestration.",
        skills: ["CI/CD Pipelines", "DevSecOps", "Automated Testing", "Infrastructure Automation", "Release Orchestration"]
      },
      {
        title: "Observability & Audit Logging",
        description: "Distributed tracing across microservices and asynchronous LLM chains, structured JSON telemetry, and tamper-resistant audit trails.",
        skills: ["Distributed Tracing", "Structured Logging", "Audit Logging", "AIOps Incident Correlation", "MTTR Optimization"]
      },
      {
        title: "Identity & Credential Security",
        description: "Hardening enterprise AI agents with OAuth2 delegation, least-privilege scoping, and short-lived credential brokering.",
        skills: ["OAuth2 Protocols", "Credential Management", "Role-Based Access Control (RBAC)", "Secret Vaults"]
      }
    ],
    architecturalPatterns: [
      "Automated Agent CI/CD with Synthetic Eval Gates",
      "End-to-End Tracing across LLM Tool Calls & Microservices",
      "Short-Lived Token Exchange for Autonomous Agents",
      "Anomaly Detection Telemetry with 45% MTTR Reduction"
    ]
  },
  {
    id: "core-technologies",
    title: "Technologies & Core Stacks",
    tagline: "Hands-on mastery grounded in code, data pipelines, and infrastructure as code",
    description: "Comfortable in executive boardrooms while staying immersed in codebases to challenge architectural assumptions, unblock engineers, and review PRs.",
    accentColor: "#F4F2F0",
    iconName: "Terminal",
    capabilities: [
      {
        title: "Programming & Data Querying",
        description: "Writing performant, clean asynchronous code, complex relational SQL analytics, and systems scripting for rapid operational automation.",
        skills: ["Python (Async, FastAPI, PyData)", "SQL (Advanced Analytics, Query Optimization)", "Bash & Shell Scripting", "RESTful & GraphQL APIs"]
      },
      {
        title: "Infrastructure as Code & Tooling",
        description: "Declarative infrastructure provisioning, automated local development setups, and AI-accelerated workflows.",
        skills: ["Terraform", "VS Code Dev Environments", "GitHub Copilot Enterprise", "Docker & Containerization"]
      }
    ],
    architecturalPatterns: [
      "Declarative Multi-Environment Infrastructure Modules",
      "High-Performance Async Event Loop Pipelines",
      "Optimized Vector Database Ingestion Workers"
    ]
  }
];

export const leadershipPillars = [
  {
    title: "AI Strategy & Adoption",
    description: "Formulating clear, pragmatic roadmaps across multiple business units that tie directly to revenue growth, operational efficiency, and measurable ROI.",
    icon: "Compass"
  },
  {
    title: "GenAI Products & Platforms",
    description: "Building production-ready conversational systems, knowledge extraction engines, and agentic workflows that operate reliably at scale.",
    icon: "Cpu"
  },
  {
    title: "Enterprise Architecture",
    description: "Designing hybrid-cloud, microservices, and data architectures built for high-throughput resilience, low latency, and zero-downtime operations.",
    icon: "Network"
  },
  {
    title: "Responsible AI & Governance",
    description: "Instituting ethical guidelines, fairness audits, safety guardrails, and compliance oversight to deploy AI with transparency and enterprise trust.",
    icon: "ShieldCheck"
  }
];
