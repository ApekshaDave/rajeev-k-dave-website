import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
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

      {/* 3. VISUAL CAREER TIMELINE (GUARANTEED NO OVERLAPPING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-border/40 pt-16">
          {/* Timeline Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 pb-6 border-b border-border/30">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                Chronological Career Timeline
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-light">
                Follow the 20+ year evolution from mobile engineering and IoT to enterprise generative AI.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'AI & Data', 'DevOps & Architecture', 'Platform & Leadership'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveRoleFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-medium transition-all ${
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

          {/* Timeline Container */}
          <div className="relative">
            {/* Continuous Vertical Spine: Positioned strictly at 210px on desktop, 16px on mobile */}
            <div className="hidden md:block absolute left-[210px] top-3 bottom-10 w-[2px] bg-gradient-to-b from-accent-orange via-accent-purple to-border/30" />
            <div className="md:hidden absolute left-4 top-3 bottom-10 w-[2px] bg-gradient-to-b from-accent-orange via-accent-purple to-border/30" />

            {/* Timeline Milestones */}
            <div className="space-y-16 sm:space-y-20">
              {filteredExperience.map((item) => (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start group">
                  {/* Left Column (Desktop Only): Width fixed at 180px with pr-8 ensuring ample clearance from the 210px spine */}
                  <div className="hidden md:block w-[180px] shrink-0 text-right pr-8 space-y-1 pt-0.5">
                    <div className="text-xs font-mono font-bold tracking-wider text-accent-orange">
                      {item.period}
                    </div>
                    <div className="text-xs font-heading font-semibold uppercase text-text-primary">
                      {item.company}
                    </div>
                    <div className="text-[11px] font-mono text-text-muted flex items-center justify-end gap-1">
                      <MapPin className="w-3 h-3 text-accent-purple" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Desktop Spine Node Marker (centered at left-[201px]) */}
                  <div className="hidden md:flex absolute left-[201px] top-1 z-10 w-5 h-5 items-center justify-center">
                    {item.isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-5 h-5 rounded-full bg-accent-orange/30 animate-ping" />
                        <span className="relative w-4 h-4 rounded-full bg-accent-orange border-2 border-bg-primary shadow-glow-orange" />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-purple group-hover:border-accent-orange group-hover:bg-accent-purple transition-all" />
                    )}
                  </div>

                  {/* Mobile Header (Date/Company positioned cleanly above content on small screens) */}
                  <div className="md:hidden pl-10 pb-3 space-y-1">
                    {/* Mobile Node Marker */}
                    <div className="absolute left-[9px] top-1 z-10">
                      {item.isCurrent ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-accent-orange block border-2 border-bg-primary shadow-glow-orange" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-purple block" />
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-accent-orange font-bold">{item.period}</span>
                      <span className="text-text-muted">·</span>
                      <span className="text-text-primary font-semibold">{item.company}</span>
                      <span className="text-text-muted">({item.location})</span>
                    </div>
                  </div>

                  {/* Right Column: Content with generous left padding (md:pl-12) */}
                  <div className="pl-10 md:pl-12 flex-1 space-y-5 pb-8 border-b border-border/20 last:border-none">
                    {/* Role Header */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary group-hover:text-accent-purple transition-colors">
                          {item.role}
                        </h3>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange border border-accent-orange/30 text-[10px] font-mono font-medium">
                            Active Leadership Role
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed font-light">
                        {item.summary}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                        Key Deliverables & Architectural Milestones:
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

                    {/* Project Highlight Callout */}
                    {item.projectHighlight && (
                      <div className="p-5 rounded-2xl border-l-2 border-accent-orange bg-transparent space-y-2">
                        <div className="text-xs font-mono text-accent-orange font-semibold uppercase tracking-wider">
                          Highlight: {item.projectHighlight.title}
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                          {item.projectHighlight.description}
                        </p>
                        <ul className="space-y-1 text-xs text-text-muted font-light pt-1">
                          {item.projectHighlight.points.map((pt, ptidx) => (
                            <li key={ptidx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0 mt-1" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stack Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider mr-2">
                        Technologies:
                      </span>
                      {item.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-0.5 rounded text-xs font-mono text-text-muted border border-border/40 hover:border-accent-purple/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Origin Base Marker */}
            <div className="relative flex items-center pt-8">
              <div className="hidden md:block w-[180px] text-right pr-8 text-xs font-mono text-text-muted">
                Career Inception
              </div>
              <div className="hidden md:flex absolute left-[206px] w-2.5 h-2.5 rounded-full bg-border/60" />
              <div className="md:hidden absolute left-[11px] w-2.5 h-2.5 rounded-full bg-border/60" />
              <div className="pl-10 md:pl-12 text-xs font-mono text-text-muted">
                20+ Years of Engineering, Architecture & Executive Technology Leadership
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
