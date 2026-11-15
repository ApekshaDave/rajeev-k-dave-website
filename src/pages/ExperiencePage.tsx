import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Terminal, 
  Zap,
  TrendingUp,
  Clock,
  Search,
  Filter
} from 'lucide-react';
import { experienceData, impactMetrics } from '../data/experience';

export const ExperiencePage: React.FC = () => {
  const [activeRoleFilter, setActiveRoleFilter] = useState<'All' | 'AI & Data' | 'DevOps & Architecture' | 'Platform & Leadership'>('All');

  const filteredExperience = experienceData.filter((item) => {
    if (activeRoleFilter === 'All') return true;
    if (activeRoleFilter === 'AI & Data') {
      return item.role.includes('Data & AI') || item.role.includes('Automation Lead');
    }
    if (activeRoleFilter === 'DevOps & Architecture') {
      return item.role.includes('DevOps') || item.role.includes('IoT');
    }
    if (activeRoleFilter === 'Platform & Leadership') {
      return item.role.includes('Founder') || item.role.includes('Delivery') || item.role.includes('Leader');
    }
    return true;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-heading font-medium tracking-wider uppercase">
            <span>Verified Career History</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            A 20+ Year Journey in AI, Data & Platform Engineering
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            From founding technology consultancies to directing enterprise AI adoption across 15+ business units at NCR Voyix. A continuous track record of delivering measurable outcomes.
          </p>
        </div>
      </section>

      {/* 2. DEDICATED IMPACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-border/70">
            <div>
              <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
                Quantified Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                Executive Impact & Production Metrics
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary max-w-sm">
              Measurable improvements delivered through production AI, automation, and platform re-engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-bg-primary/70 border border-border/80 hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-accent-orange">
                    {metric.value}
                  </div>
                  <h4 className="text-sm font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors">
                    {metric.label}
                  </h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-4 pt-3 border-t border-border/50 font-light">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CAREER TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              Career Timeline
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Verified leadership roles, architectural milestones and team expansions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'AI & Data', 'DevOps & Architecture', 'Platform & Leadership'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveRoleFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-medium transition-all ${
                  activeRoleFilter === filter
                    ? 'bg-accent-purple text-bg-primary font-semibold shadow-glow-purple'
                    : 'bg-bg-card text-text-secondary hover:text-text-primary border border-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l border-border space-y-16">
          {filteredExperience.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.isCurrent 
                    ? 'bg-accent-orange border-accent-orange shadow-glow-orange' 
                    : 'bg-bg-primary border-accent-purple group-hover:bg-accent-purple'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-6 border-b border-border/60">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange border border-accent-orange/30 text-[11px] font-mono font-medium">
                          Current Leadership
                        </span>
                      )}
                    </div>
                    <div className="text-base font-heading font-medium text-accent-purple">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5 text-text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-accent-purple" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Key Achievements:
                  </div>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    {item.highlights.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Highlight Box if available (e.g. Google CX L1 Voice Agent) */}
                {item.projectHighlight && (
                  <div className="p-5 rounded-2xl bg-bg-primary border border-accent-purple/30 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-purple font-semibold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-accent-orange" />
                      <span>Project Highlight: {item.projectHighlight.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.projectHighlight.description}
                    </p>
                    <ul className="space-y-1.5 text-xs text-text-muted">
                      {item.projectHighlight.points.map((pt, ptidx) => (
                        <li key={ptidx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider mr-2">
                    Technologies:
                  </span>
                  {item.technologies.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-1 rounded-md bg-bg-elevated text-xs font-mono text-text-secondary border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
