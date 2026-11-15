import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Cloud, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  GitBranch, 
  Activity, 
  Lock,
  Workflow,
  Sparkles
} from 'lucide-react';
import { expertiseDomains } from '../data/expertise';

export const ExpertisePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-xs font-heading font-medium tracking-wider uppercase">
            <span>Engineering & Architectural Mastery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Enterprise AI, Cloud & Systems Architecture
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            A comprehensive overview of architectural capabilities, production engineering frameworks, and technology stacks cultivated over 20+ years of high-scale enterprise delivery.
          </p>
        </div>
      </section>

      {/* 2. THE FOUR CORE DOMAINS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {expertiseDomains.map((domain, index) => {
          const isOrange = domain.accentColor === '#FF9B38';
          const isLight = domain.accentColor === '#F4F2F0';

          return (
            <div
              key={domain.id}
              id={domain.id}
              className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border relative overflow-hidden space-y-10"
            >
              {/* Domain Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-border/80">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: isOrange ? 'rgba(255, 155, 56, 0.15)' : isLight ? 'rgba(244, 242, 240, 0.1)' : 'rgba(168, 121, 255, 0.15)',
                        color: domain.accentColor,
                        border: `1px solid ${isOrange ? 'rgba(255, 155, 56, 0.3)' : isLight ? 'rgba(244, 242, 240, 0.2)' : 'rgba(168, 121, 255, 0.3)'}`
                      }}
                    >
                      {domain.iconName === 'Cpu' && <Cpu className="w-5 h-5" />}
                      {domain.iconName === 'Cloud' && <Cloud className="w-5 h-5" />}
                      {domain.iconName === 'Layers' && <Layers className="w-5 h-5" />}
                      {domain.iconName === 'Terminal' && <Terminal className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                      Domain 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                    {domain.title}
                  </h2>
                  <p className="text-sm font-heading font-medium" style={{ color: domain.accentColor }}>
                    {domain.tagline}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {domain.description}
                  </p>
                </div>

                {/* Architectural Blueprint Callout */}
                <div className="lg:w-80 p-5 rounded-2xl bg-bg-primary/80 border border-border/80 space-y-3 shrink-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5" style={{ color: domain.accentColor }} />
                    <span>Production Blueprints</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {domain.architecturalPatterns.map((pat, pidx) => (
                      <li key={pidx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: domain.accentColor }} />
                        <span className="font-mono">{pat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {domain.capabilities.map((cap, cidx) => (
                  <div
                    key={cidx}
                    className="p-6 rounded-2xl bg-bg-primary/50 border border-border/60 hover:border-border transition-colors space-y-4"
                  >
                    <h3 className="text-base font-heading font-semibold text-text-primary">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      {cap.description}
                    </p>

                    {/* Technical Competency Breakdown (Editorial, not badges) */}
                    <div className="pt-2 border-t border-border/40">
                      <div className="text-[11px] font-mono text-text-muted mb-2 uppercase tracking-wider">
                        Core Mechanisms & Tools:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cap.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="px-2.5 py-1 rounded-md bg-bg-elevated text-xs font-mono text-text-secondary border border-border/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Technical Deep-Dive Diagram for Domain 1 (GenAI & Agentic AI) */}
              {domain.id === 'genai-agentic' && (
                <div className="p-6 rounded-2xl bg-bg-primary border border-accent-purple/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
                    <span className="text-accent-purple font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Enterprise Agentic Architecture Pipeline
                    </span>
                    <span className="text-text-muted">LangGraph · Semantic Kernel · Google ADK</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-purple font-bold">1. Intake & Auth</span>
                      <p className="text-text-muted text-[11px]">Intent classifier, PII scrubber, dynamic OAuth2 short-lived tokens.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-purple font-bold">2. State Graph Loop</span>
                      <p className="text-text-muted text-[11px]">Cyclic graph, context summarizer, tool latency budgeting.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-purple font-bold">3. Hybrid Retrieval</span>
                      <p className="text-text-muted text-[11px]">BM25 + Dense vector embeddings, RRF rank fusion, cross-encoder re-ranking.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-orange font-bold">4. Eval & Gate</span>
                      <p className="text-text-muted text-[11px]">Hallucination check, ground-truth audit, human-in-the-loop escalation.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Technical Deep-Dive Diagram for Domain 2 (Cloud & Architecture) */}
              {domain.id === 'cloud-architecture' && (
                <div className="p-6 rounded-2xl bg-bg-primary border border-accent-orange/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
                    <span className="text-accent-orange font-semibold flex items-center gap-2">
                      <Workflow className="w-4 h-4" />
                      Model Context Protocol (MCP) & Multi-Cloud Gateway
                    </span>
                    <span className="text-text-muted">Azure Solutions Architect Expert · Databricks</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-orange font-bold">MCP Host Layer</span>
                      <p className="text-text-muted text-[11px]">Standardized client-server protocol enabling LLMs to safely query distributed enterprise tools.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-orange font-bold">Databricks Lakehouse</span>
                      <p className="text-text-muted text-[11px]">100+ unified enterprise data sources powering batch feature engineering & real-time inference.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-card border border-border space-y-1">
                      <span className="text-accent-orange font-bold">Zero-Downtime Mesh</span>
                      <p className="text-text-muted text-[11px]">Edge retail store nodes (Walmart store network scale) with strict data sovereignty guarantees.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 3. CTA TO BOOK & EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-bg-card via-bg-elevated to-bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Ready to delve deeper into real-world architectures?
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Explore the verified career timeline across 20+ years or read the practical architectural field guide in <em>Agents That Survive</em>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/experience"
              className="px-6 py-3 rounded-xl bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all"
            >
              View Experience Timeline
            </Link>
            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-bg-card hover:bg-bg-hover border border-border text-text-primary font-heading font-medium text-sm transition-all"
            >
              Explore Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

