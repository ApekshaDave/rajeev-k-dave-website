export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  projectHighlight?: {
    title: string;
    description: string;
    points: string[];
  };
  technologies: string[];
}

export interface MetricHighlight {
  value: string;
  label: string;
  sublabel: string;
  category: 'efficiency' | 'scale' | 'speed' | 'impact';
}

export const impactMetrics: MetricHighlight[] = [
  {
    value: "40%",
    label: "Reduction in Manual Categorization",
    sublabel: "Via RAG-based knowledge systems connected to enterprise document stores",
    category: "efficiency"
  },
  {
    value: "30%",
    label: "Reduction in Avg Resolution Time",
    sublabel: "Across conversational AI handling 50K+ monthly customer support voice interactions",
    category: "speed"
  },
  {
    value: "25%",
    label: "Improvement in CSAT Scores",
    sublabel: "Customer satisfaction uplift driven by instant intent routing & conversational accuracy",
    category: "impact"
  },
  {
    value: "60%",
    label: "Faster Incident Response Time",
    sublabel: "AIOps ML-driven anomaly detection and intelligent incident correlation",
    category: "speed"
  },
  {
    value: "45%",
    label: "Reduction in MTTR",
    sublabel: "Mean time to resolution slashed across mission-critical platform outages",
    category: "efficiency"
  },
  {
    value: "30M+",
    label: "Records Search Improvement",
    sublabel: "Semantic retrieval and neural re-ranking reducing query times from ~5 min to <1 min",
    category: "scale"
  }
];

export const heroMetrics = [
  { value: "20+", label: "Years in Technology", detail: "Products, platforms & enterprise engineering" },
  { value: "15+", label: "Business Units", detail: "Enterprise AI adoption roadmap & governance" },
  { value: "50K+", label: "Monthly Voice Interactions", detail: "High-scale conversational agent systems" },
  { value: "20+", label: "Team Members Led", detail: "AI, ML engineering, cloud & DevOps teams" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ncr-voyix-sr-leader",
    role: "Senior Leader – Data & AI",
    company: "NCR Voyix",
    location: "Gurgaon, India",
    period: "Jan 2024 – Present",
    isCurrent: true,
    summary: "Sets the enterprise AI adoption roadmap across 15+ business units, balancing tangible business value, technical feasibility, security, and responsible AI governance. Leads teams of 20+ across AI, ML engineering, cloud, and DevOps.",
    highlights: [
      "Set the AI adoption roadmap across 15+ business units, balancing business value, technical feasibility, and responsible AI considerations.",
      "Led the development of RAG-based knowledge products connected to enterprise document stores, automating 40% of manual categorization and making information easier to find.",
      "Built conversational AI agents for customer support using NLP and voice AI, handling 50,000+ monthly interactions, reducing resolution times by 30%, and improving CSAT by 25%.",
      "Shaped a Databricks data and AI platform unifying 100+ data sources for experimentation, feature engineering, and production workloads.",
      "Introduced practical evaluation pipelines for agents and LLM applications to systematically compare models and validate quality before production rollout.",
      "Established MLOps practices covering versioning, deployment, monitoring, and audit logging, cutting deployment cycles from weeks to days.",
      "Introduced a spec-driven development approach for GenAI and Agentic AI (piloted with Restaurant BU) featuring structured specs, review gates, and evaluation checkpoints.",
      "Led AI security and red-team activities, enforcing OAuth2 reviews and short-lived credentials for agent integrations.",
      "Embedded Responsible AI practices into day-to-day delivery, including bias controls, model audits, and governance policies."
    ],
    projectHighlight: {
      title: "Google CX L1 Helpdesk Voice Agent",
      description: "Architected and delivered a CLI-based voice agent integrated with Google Customer Experience (CX) to handle inbound L1 helpdesk calls, intent-based routing, and query resolution.",
      points: [
        "Automated inbound call intake, routing by semantic intent, resolution of high-frequency queries, and conditional escalation to human agents.",
        "Developed custom agent skills in VS Code using Google CX APIs with continuous automated deployment to live agent environments.",
        "Accelerated handler development and testing with GitHub Copilot while maintaining strict version control and test-driven rigor.",
        "Produced real-time structured call transcripts and entity extraction pipelines for downstream business analytics."
      ]
    },
    technologies: ["LangGraph", "Semantic Kernel", "Google ADK", "Databricks", "Azure", "GCP", "RAG", "MLOps", "OAuth2", "Python"]
  },
  {
    id: "ncr-corp-devops-sr-mgr",
    role: "DevOps Senior Manager / Automation Lead",
    company: "NCR Corporation India Pvt Ltd",
    location: "Gurgaon, India",
    period: "Dec 2020 – Dec 2023",
    summary: "Spearheaded enterprise AIOps, machine learning automation, and DevSecOps transformation across core engineering platforms.",
    highlights: [
      "Built AIOps capabilities using ML-based anomaly detection and incident correlation, improving incident response time by 60% and reducing MTTR by 45%.",
      "Introduced AI-assisted voice transcription for more than 10,000 hours of customer calls monthly, generating structured output for downstream NLP and service-quality analysis.",
      "Improved enterprise search across 30M+ records using semantic retrieval and re-ranking, reducing typical query time from ~5 minutes to under one minute.",
      "Automated email-to-ticket triage with NLP, eliminating ~50% of manual triage work and boosting routing accuracy.",
      "Built a unified DevSecOps platform integrating CI/CD, vulnerability scanning, security gates, and deployment observability."
    ],
    technologies: ["Python", "Machine Learning", "AIOps", "Semantic Search", "DevSecOps", "CI/CD", "NLP", "Azure"]
  },
  {
    id: "ncr-corp-devops-mgr",
    role: "DevOps Manager / Solution Architect",
    company: "NCR Corporation",
    location: "Gurgaon, India",
    period: "Aug 2019 – Nov 2020",
    summary: "Architected self-service platform automation and streamlined delivery across multiple engineering organizations.",
    highlights: [
      "Built self-service automation platforms used by 10+ engineering teams, simplifying releases and removing manual dependencies.",
      "Connected RPA and collaboration tools with deployment workflows, enhancing end-to-end traceability and eliminating hand-off bottlenecks.",
      "Reduced operational costs by 5–10% through process re-engineering and automated validation."
    ],
    technologies: ["Azure", "Automation", "CI/CD", "RPA", "Process Optimization", "Microservices"]
  },
  {
    id: "ncr-corp-iot-mgr",
    role: "IoT Manager / Solution Architect",
    company: "NCR Corporation",
    location: "Gurgaon, India",
    period: "Nov 2017 – Jul 2019",
    summary: "Led IoT platform solutions and edge deployments for massive enterprise retail environments across international store networks.",
    highlights: [
      "Led a team of six engineers delivering IoT platform solutions and hybrid edge-cloud deployments for large retail environments, including Walmart store networks across multiple regions.",
      "Defined architecture and deployment standards focused on ultra-low latency, strict data sovereignty, and repeatable platform delivery."
    ],
    technologies: ["IoT Architectures", "Edge Computing", "Azure IoT", "Hybrid Cloud", "Distributed Systems"]
  },
  {
    id: "ncr-corp-delivery-mgr",
    role: "Delivery Manager / Solution Architect",
    company: "NCR Corporation",
    location: "Gurgaon, India",
    period: "Mar 2014 – Oct 2017",
    summary: "Established and led the Mobile Center of Excellence (CoE), architecting customer-facing enterprise applications.",
    highlights: [
      "Led the Mobile Center of Excellence with nine developers delivering customer-facing mobile applications used by 50,000+ active users.",
      "Managed the end-to-end product lifecycle from architecture and security reviews through production rollout and continuous enhancement."
    ],
    technologies: ["Mobile Architecture", "API Gateways", "Enterprise Integration", "Agile Delivery"]
  },
  {
    id: "hunch-software",
    role: "Founder & Managing Director",
    company: "Hunch Software Pvt Ltd",
    location: "Gurgaon, India",
    period: "Jan 2010 – Jan 2012",
    summary: "Founded and scaled an enterprise technology consultancy delivering custom software solutions, product engineering, and technical advisory.",
    highlights: [
      "Founded a technology consultancy delivering custom enterprise solutions and managed end-to-end product delivery, client relations, and commercial growth.",
      "Built architecture patterns for distributed web platforms and led commercial client engagements."
    ],
    technologies: ["Executive Leadership", "Enterprise Architecture", "Product Strategy", "Consulting"]
  }
];
