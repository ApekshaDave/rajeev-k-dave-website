import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Cpu, 
  Network, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { WaveVisual } from '../components/WaveVisual';
import { heroMetrics, experienceData } from '../data/experience';
import { bookData } from '../data/book';

export const HomePage: React.FC = () => {
  const currentRole = experienceData[0]; // Senior Leader - Data & AI at NCR Voyix

  return (
    <div className="space-y-28 sm:space-y-36 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Hero Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-purple uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
              <span>AI & Technology Leader</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary tracking-tight leading-[1.1]">
              Turning AI ambition into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-purple-300 to-accent-orange">enterprise impact.</span>
            </h1>

            {/* Supporting designation */}
            <p className="text-base sm:text-lg font-heading font-medium text-text-secondary border-l-2 border-accent-orange pl-4 py-0.5">
              AI & Technology Leader <span className="text-accent-purple">|</span> GenAI Strategy <span className="text-accent-purple">|</span> AI Product & Engineering
            </p>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
              20+ years building products, platforms and engineering organizations. I lead AI strategy, GenAI adoption and delivery at scale — turning emerging technologies into practical, measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/experience"
                className="px-7 py-3.5 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book"
                className="px-7 py-3.5 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all duration-200 flex items-center gap-2 group border border-border/70 hover:border-accent-orange/50"
              >
                <BookOpen className="w-4 h-4 text-accent-orange" />
                <span>Explore Book</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Column (Pop-Out 3D Portrait Effect) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end pt-8">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] group">
              {/* 1. Atmospheric Ambient Lighting / Halo behind the subject */}
              <div 
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[80px] opacity-45 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 121, 255, 0.45) 0%, rgba(255, 155, 56, 0.25) 50%, transparent 75%)'
                }}
              />

              {/* 2. Sleek Editorial Arch / Portal Pedestal Backdrop (Frame that the portrait pops out of) */}
              <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px]">
                {/* Background Arch Frame */}
                <div className="absolute inset-x-4 bottom-0 top-16 rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#181A26]/80 via-[#10121A]/90 to-transparent border-t border-x border-accent-purple/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />

                {/* Fine concentric decorative radar/grid arch lines */}
                <div className="absolute inset-x-8 top-20 h-48 rounded-t-[120px] border-t border-accent-purple/20 pointer-events-none opacity-60" />
                <div className="absolute inset-x-14 top-28 h-40 rounded-t-[100px] border-t border-accent-orange/20 pointer-events-none opacity-50" />

                {/* 3. Pop-Out Subject: Head breaks out above the arch! */}
                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2">
                  <img
                    src="/assets/images/rajeev-hero-transparent.png"
                    alt="Rajeev Kumar Dave - Head of AI & Data"
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] contrast-[1.03]"
                  />

                  {/* Soft bottom vignette blending into the floor wave */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent pointer-events-none" />
                </div>

                {/* 4. Floating Executive Badge (Pop-out Depth Element) */}
                <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 transition-transform duration-500 group-hover:translate-x-1">
                  <div className="px-4 py-2 rounded-full bg-bg-primary/90 backdrop-blur-md border border-border/80 shadow-2xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                    <div className="text-left">
                      <div className="text-xs font-heading font-semibold text-text-primary">
                        Rajeev Kumar Dave
                      </div>
                      <div className="text-[10px] font-mono text-text-muted">
                        Senior Leader · Data & AI
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Pill (Top-Right Depth Element) */}
                <div className="absolute top-12 -right-2 sm:-right-4 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="px-3 py-1.5 rounded-full bg-bg-primary/90 backdrop-blur-md border border-accent-purple/40 shadow-xl flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-semibold text-accent-purple">
                      20+ Yrs Enterprise
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave visual animation beneath hero */}
        <div className="mt-8 -mb-4">
          <WaveVisual />
        </div>
      </section>

      {/* 2. IMPACT METRICS SECTION - UNBOXED EDITORIAL STAT BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-border/40 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {heroMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="space-y-2 lg:border-l lg:border-border/30 lg:first:border-none lg:pl-8 lg:first:pl-0"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-accent-purple">
                  {metric.value}
                </div>
                <div className="text-sm font-heading font-semibold text-text-primary">
                  {metric.label}
                </div>
                <div className="text-xs text-text-muted leading-relaxed font-light">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP FOCUS - UNBOXED EDITORIAL COLUMNS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-border/40">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-purple font-semibold">
              Executive Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
              Core Leadership Pillars
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md font-light">
            Bridging executive strategy with hands-on architecture to execute dependable AI at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1. AI Strategy & Adoption */}
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="w-8 h-8 flex items-center justify-center text-accent-purple">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              1. AI Strategy & Adoption
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Setting roadmaps across 15+ business units, aligning executive investment, technical feasibility, and concrete business outcomes.
            </p>
            <div className="pt-2 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              <span>Multi-BU Roadmaps & ROI</span>
            </div>
          </div>

          {/* 2. GenAI Products & Platforms */}
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="w-8 h-8 flex items-center justify-center text-accent-orange">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              2. GenAI Products & Platforms
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Architecting enterprise RAG, Agentic workflows, and voice AI systems handling 50K+ monthly calls with 30% lower resolution times.
            </p>
            <div className="pt-2 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>Production Voice & Agents</span>
            </div>
          </div>

          {/* 3. Enterprise Architecture */}
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="w-8 h-8 flex items-center justify-center text-accent-purple">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              3. Enterprise Architecture
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Unifying 100+ data sources on Databricks, architecting multi-cloud Azure & GCP fabrics, and securing Model Context Protocol (MCP) gateways.
            </p>
            <div className="pt-2 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              <span>Multi-Cloud & Databricks</span>
            </div>
          </div>

          {/* 4. Responsible AI & Governance */}
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="w-8 h-8 flex items-center justify-center text-accent-orange">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              4. Responsible AI & Governance
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Institutionalizing bias controls, model audits, OAuth2 credential safeguards, and continuous evaluation suites to protect enterprise reputation.
            </p>
            <div className="pt-2 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>Ethics, Bias & Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED EXPERIENCE - OPEN EDITORIAL OVERVIEW (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border/30">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-purple font-semibold">
                Current Role · Enterprise AI Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                Senior Leader – Data & AI
              </h3>
              <p className="text-base text-accent-orange font-heading font-medium">
                NCR Voyix · Gurgaon, India (Jan 2024 – Present)
              </p>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-accent-purple hover:underline"
            >
              <span>View Full Career Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-base text-text-secondary leading-relaxed max-w-4xl font-light">
            Leading AI strategy and multi-business unit delivery across retail and restaurant ecosystems. Directing cross-functional teams of 20+ spanning AI, machine learning engineering, cloud architecture, and DevOps.
          </p>

          {/* Key Accomplishments Checklist (No Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-3.5 pb-4 border-b border-border/20">
              <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary leading-relaxed font-light">
                <strong className="text-text-primary font-medium">RAG Knowledge Products:</strong> Automated 40% of manual categorization across enterprise document stores.
              </span>
            </div>
            <div className="flex items-start gap-3.5 pb-4 border-b border-border/20">
              <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary leading-relaxed font-light">
                <strong className="text-text-primary font-medium">Conversational AI Voice Agents:</strong> Handles 50K+ monthly support queries, cutting resolution times by 30%.
              </span>
            </div>
            <div className="flex items-start gap-3.5 pb-4 border-b border-border/20">
              <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary leading-relaxed font-light">
                <strong className="text-text-primary font-medium">Enterprise Databricks Platform:</strong> Unified 100+ data sources for production ML and feature engineering.
              </span>
            </div>
            <div className="flex items-start gap-3.5 pb-4 border-b border-border/20">
              <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary leading-relaxed font-light">
                <strong className="text-text-primary font-medium">Spec-Driven Development:</strong> Structured review gates and eval checkpoints reducing release cycles from weeks to days.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED BOOK SECTION: AGENTS THAT SURVIVE (REAL 3D BOOK WITH SOFT BACKGROUND BLUR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Book Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center text-xs font-mono tracking-widest text-accent-orange uppercase">
                <span>Featured Book · 2026 Publication</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
                  Agents That Survive
                </h2>
                <p className="text-xs sm:text-sm font-mono text-accent-orange tracking-widest uppercase">
                  Written by Rajeev K. Dave
                </p>
              </div>

              <blockquote className="text-lg text-text-primary font-serif italic border-l-2 border-accent-orange pl-4 py-1">
                "Five critical gaps. Real-world patterns. Production-ready systems built for 2026 and beyond."
              </blockquote>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                A practical field guide to building production-ready Agentic AI systems, covering critical gaps, real-world patterns, and engineering approaches for AI agents that need to work reliably beyond the prototype stage.
              </p>

              {/* In the Book Quick Highlights (Unboxed) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  In The Book:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span>The 5 Critical Gaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span>Real-World Patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span>Production-Ready Architectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span>What's Next (2026+)</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <a
                  href={bookData.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/book"
                  className="px-7 py-3.5 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all duration-200 flex items-center gap-2 border border-border/70 hover:border-accent-orange/50"
                >
                  <BookOpen className="w-4 h-4 text-accent-orange" />
                  <span>About the Book</span>
                </Link>
              </div>
            </div>

            {/* Book Cover Presentation with Soft Ambient Background Blur */}
            <div className="lg:col-span-5 flex justify-center items-center py-6">
              <div className="relative group w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center">
                {/* Soft Sunset Amber Background Glow with Blur */}
                <div 
                  className="absolute inset-0 -m-8 rounded-full blur-[75px] opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-60"
                  style={{
                    background: 'radial-gradient(circle at 60% 45%, #FF831E 0%, #B84700 40%, transparent 75%)'
                  }}
                />

                {/* Secondary Purple Depth Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-full bg-accent-purple/15 blur-[90px] pointer-events-none" />

                {/* 3D Standing Book (Transparent PNG) */}
                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <img
                    src={bookData.coverImageHd}
                    alt="Agents That Survive by Rajeev K. Dave"
                    className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
                  />
                </div>

                {/* Realistic Ground Shadow & Floor Reflection */}
                <div className="w-3/4 h-5 bg-gradient-to-r from-transparent via-black/80 to-transparent blur-md rounded-full mt-2 z-0" />
                <div className="w-1/2 h-2 bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent blur-sm rounded-full -mt-2 z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
