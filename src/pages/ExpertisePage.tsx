import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Cloud, 
  Layers, 
  Terminal, 
  Workflow,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { expertiseDomains } from '../data/expertise';

export const ExpertisePage: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>(expertiseDomains[0].id);

  const activeDomain = expertiseDomains.find(d => d.id === activeDomainId) || expertiseDomains[0];

  const domainIcons: Record<string, React.ReactNode> = {
    'genai-agentic': <Cpu className="w-4 h-4" />,
    'cloud-architecture': <Cloud className="w-4 h-4" />,
    'engineering-operations': <Layers className="w-4 h-4" />,
    'core-technologies': <Terminal className="w-4 h-4" />
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-24 sm:pt-28 lg:pt-32 pb-16">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-purple uppercase">
            <span>Engineering & Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Core Technical Expertise
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Architectural frameworks, production engineering capabilities, and technology stacks cultivated over 20+ years of enterprise delivery.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE DOMAIN SELECTOR (TABS TO ELIMINATE CLUTTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-8">
          {/* Domain Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-border/30">
            {expertiseDomains.map((domain, index) => {
              const isSelected = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-heading font-medium transition-all ${
                    isSelected
                      ? 'bg-accent-purple text-bg-primary font-semibold shadow-glow-purple'
                      : 'text-text-secondary hover:text-text-primary border border-border/50 hover:border-border'
                  }`}
                >
                  {domainIcons[domain.id]}
                  <span>{domain.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Presentation: Clean, High-Hierarchy & Uncluttered */}
          <div className="pt-10 space-y-12">
            {/* Domain Overview Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-border/30">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-accent-orange font-semibold">
                  {activeDomain.tagline}
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                  {activeDomain.title}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light max-w-2xl">
                  {activeDomain.description}
                </p>
              </div>

              {/* Verified Blueprints Rail */}
              <div className="lg:col-span-4 space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-accent-purple" />
                  <span>Verified Blueprints</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-text-secondary">
                  {activeDomain.architecturalPatterns.map((pat, pidx) => (
                    <li key={pidx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0 mt-1.5" />
                      <span>{pat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Structured Capabilities Grid (Concise & Scannable) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeDomain.capabilities.map((cap, cidx) => (
                <div key={cidx} className="space-y-3 pt-4 border-t border-border/20">
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-text-primary">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {cap.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cap.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-2.5 py-1 rounded text-xs font-mono text-text-muted border border-border/40 hover:border-accent-purple/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Special Architectural Pipeline Visual for GenAI */}
            {activeDomain.id === 'genai-agentic' && (
              <div className="pt-8 border-t border-border/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-accent-purple font-semibold">
                    Enterprise Agentic Architecture Pipeline
                  </span>
                  <span className="text-text-muted">LangGraph · Semantic Kernel · Google ADK</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-border/40 space-y-1">
                    <span className="text-accent-purple font-bold text-xs font-mono">1. Intake & Auth</span>
                    <p className="text-text-secondary text-xs font-light">Intent routing, PII redaction, short-lived OAuth2 tokens.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border/40 space-y-1">
                    <span className="text-accent-purple font-bold text-xs font-mono">2. State Graph Loop</span>
                    <p className="text-text-secondary text-xs font-light">Cyclic graphs, context reduction, latency budgets.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border/40 space-y-1">
                    <span className="text-accent-purple font-bold text-xs font-mono">3. Hybrid Retrieval</span>
                    <p className="text-text-secondary text-xs font-light">BM25 + dense vectors, RRF rank fusion, cross-encoders.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border/40 space-y-1">
                    <span className="text-accent-orange font-bold text-xs font-mono">4. Eval & Gate</span>
                    <p className="text-text-secondary text-xs font-light">Hallucination check, ground-truth audit, escalation.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. QUICK NAVIGATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 flex flex-col sm:flex-row items-baseline justify-between gap-8">
          <div className="space-y-1">
            <h3 className="text-xl font-heading font-bold text-text-primary">
              Ready to explore verified production milestones?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary font-light">
              Review the 20+ year chronological career timeline or explore the published field guide.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/experience"
              className="px-6 py-2.5 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-xs transition-all shadow-glow-orange flex items-center gap-2"
            >
              <span>View Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/book"
              className="px-6 py-2.5 rounded-full text-text-primary hover:text-white font-heading font-medium text-xs border border-border/60 hover:border-accent-purple/50 transition-all"
            >
              About the Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
