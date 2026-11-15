import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Cloud, 
  Layers, 
  Terminal, 
  Sparkles,
  Workflow,
  ArrowRight
} from 'lucide-react';
import { expertiseDomains } from '../data/expertise';

export const ExpertisePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-purple uppercase">
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

      {/* 2. THE FOUR CORE DOMAINS (OPEN EDITORIAL, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {expertiseDomains.map((domain, index) => {
          return (
            <div
              key={domain.id}
              id={domain.id}
              className="border-t border-border/40 pt-16 space-y-12"
            >
              {/* Domain Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-border/30">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                      Domain 0{index + 1}
                    </span>
                    <span className="text-text-muted">·</span>
                    <span className="text-xs font-mono uppercase" style={{ color: domain.accentColor }}>
                      {domain.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                    {domain.title}
                  </h2>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light max-w-2xl">
                    {domain.description}
                  </p>
                </div>

                {/* Production Blueprints Column */}
                <div className="lg:col-span-4 space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5" style={{ color: domain.accentColor }} />
                    <span>Production Blueprints</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-secondary font-light">
                    {domain.architecturalPatterns.map((pat, pidx) => (
                      <li key={pidx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: domain.accentColor }} />
                        <span className="font-mono">{pat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Capabilities (Clean Typographic Grid, No Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {domain.capabilities.map((cap, cidx) => (
                  <div key={cidx} className="space-y-3 pt-4 border-t border-border/20">
                    <h3 className="text-base font-heading font-semibold text-text-primary">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      {cap.description}
                    </p>

                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {cap.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="px-2 py-0.5 rounded text-xs font-mono text-text-muted border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Technical Deep-Dive Pipeline for Domain 1 */}
              {domain.id === 'genai-agentic' && (
                <div className="pt-8 border-t border-border/20 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-purple font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Enterprise Agentic Architecture Pipeline
                    </span>
                    <span className="text-text-muted">LangGraph · Semantic Kernel · Google ADK</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
                    <div className="space-y-1 border-t border-border/30 pt-3">
                      <span className="text-accent-purple font-bold text-xs font-mono">1. Intake & Auth</span>
                      <p className="text-text-secondary text-xs font-light">Intent classifier, PII scrubber, dynamic OAuth2 short-lived tokens.</p>
                    </div>
                    <div className="space-y-1 border-t border-border/30 pt-3">
                      <span className="text-accent-purple font-bold text-xs font-mono">2. State Graph Loop</span>
                      <p className="text-text-secondary text-xs font-light">Cyclic graph, context summarizer, tool latency budgeting.</p>
                    </div>
                    <div className="space-y-1 border-t border-border/30 pt-3">
                      <span className="text-accent-purple font-bold text-xs font-mono">3. Hybrid Retrieval</span>
                      <p className="text-text-secondary text-xs font-light">BM25 + Dense vector embeddings, RRF rank fusion, cross-encoder re-ranking.</p>
                    </div>
                    <div className="space-y-1 border-t border-border/30 pt-3">
                      <span className="text-accent-orange font-bold text-xs font-mono">4. Eval & Gate</span>
                      <p className="text-text-secondary text-xs font-light">Hallucination check, ground-truth audit, human-in-the-loop escalation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 3. CTA (CLEAN EDITORIAL, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border-t border-border/40 pt-16 flex flex-col md:flex-row items-baseline justify-between gap-8">
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
              className="px-6 py-3 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all"
            >
              View Experience Timeline
            </Link>
            <Link
              to="/book"
              className="px-6 py-3 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all border border-border/60"
            >
              Explore Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
