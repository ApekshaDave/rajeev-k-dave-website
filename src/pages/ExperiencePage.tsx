import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
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
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
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

      {/* 2. DEDICATED IMPACT SECTION (OPEN EDITORIAL, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border/30">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-purple font-semibold">
                Quantified Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                Executive Impact & Production Metrics
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary font-light max-w-sm">
              Measurable improvements delivered through production AI, automation, and platform re-engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-3 pt-4 border-t border-border/30">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-accent-orange">
                  {metric.value}
                </div>
                <h4 className="text-base font-heading font-semibold text-text-primary">
                  {metric.label}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CAREER TIMELINE (OPEN EDITORIAL, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border-t border-border/40 pt-16">
          {/* Timeline Header & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 pb-6 border-b border-border/30">
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-primary">
                Career Timeline
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-light">
                Verified leadership roles, architectural milestones and team expansions.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'AI & Data', 'DevOps & Architecture', 'Platform & Leadership'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveRoleFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-medium transition-all ${
                    activeRoleFilter === filter
                      ? 'bg-accent-purple text-bg-primary font-semibold shadow-glow-purple'
                      : 'text-text-secondary hover:text-text-primary border border-border/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Items (Flowing, Open Layout) */}
          <div className="relative pl-6 sm:pl-8 border-l border-border/40 space-y-16">
            {filteredExperience.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Marker Dot */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    item.isCurrent 
                      ? 'bg-accent-orange border-accent-orange shadow-glow-orange' 
                      : 'bg-bg-primary border-accent-purple group-hover:bg-accent-purple'
                  }`}
                />

                {/* Experience Content (Unboxed) */}
                <div className="space-y-6 pb-12 border-b border-border/20 last:border-none">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                          {item.role}
                        </h3>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange border border-accent-orange/30 text-[10px] font-mono font-medium">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-heading font-medium text-accent-purple">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
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
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                      Key Accomplishments:
                    </div>
                    <ul className="space-y-2 text-sm text-text-secondary font-light">
                      {item.highlights.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Highlight */}
                  {item.projectHighlight && (
                    <div className="p-5 rounded-2xl border-l-2 border-accent-purple space-y-2 bg-transparent">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-purple font-semibold uppercase tracking-wider">
                        <span>Project Highlight: {item.projectHighlight.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                        {item.projectHighlight.description}
                      </p>
                      <ul className="space-y-1.5 text-xs text-text-muted font-light pt-1">
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
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider mr-2">
                      Stack:
                    </span>
                    {item.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-2.5 py-0.5 rounded text-xs font-mono text-text-secondary border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
