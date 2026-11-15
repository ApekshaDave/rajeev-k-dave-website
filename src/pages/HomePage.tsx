import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  BookOpen, 
  Compass, 
  Cpu, 
  Network, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { WaveVisual } from '../components/WaveVisual';
import { VisualThumbnail } from '../components/VisualThumbnail';
import { heroMetrics, experienceData } from '../data/experience';
import { bookData } from '../data/book';
import { articles } from '../data/articles';

export const HomePage: React.FC = () => {
  const currentRole = experienceData[0]; // Senior Leader - Data & AI at NCR Voyix
  const featuredArticles = articles.filter(a => a.isFeatured).slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-heading font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
              <span>AI & Technology Leader</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary tracking-tight leading-[1.1]">
              Turning AI ambition into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-purple-300 to-accent-orange">enterprise impact.</span>
            </h1>

            {/* Supporting designation */}
            <p className="text-base sm:text-lg font-heading font-medium text-text-secondary border-l-2 border-accent-orange/70 pl-4 py-0.5">
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
                className="px-6 py-3.5 rounded-xl bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/blog"
                className="px-6 py-3.5 rounded-xl bg-bg-card hover:bg-bg-elevated border border-border hover:border-accent-purple/50 text-text-primary font-heading font-medium text-sm transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Explore Blog & Research</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hero Right Column (Portrait with glowing accents) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle Ambient Glow Behind Photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/30 via-transparent to-accent-orange/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-bg-card/60 p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-bg-primary">
                  <img
                    src="/assets/images/rajeev-hero-portrait.jpg"
                    alt="Rajeev Kumar Dave - Head of AI & Data"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-bg-card/90 backdrop-blur-md border border-border flex items-center justify-between">
                    <div>
                      <div className="text-xs font-heading font-semibold text-text-primary">
                        Rajeev Kumar Dave
                      </div>
                      <div className="text-[11px] text-text-secondary">
                        Senior Leader – Data & AI
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                      20+ Yrs Exp
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

      {/* 2. IMPACT METRICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-bg-card/70 border border-border hover:border-accent-purple/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-xl group-hover:bg-accent-purple/10 transition-colors" />
              <div className="relative z-10 space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-accent-purple">
                  {metric.value}
                </div>
                <div className="text-sm font-heading font-semibold text-text-primary">
                  {metric.label}
                </div>
                <div className="text-xs text-text-muted leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LEADERSHIP FOCUS (4 Minimal Sections) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
              Executive Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
              Core Leadership Pillars
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            Bridging executive strategy with hands-on architecture to execute dependable AI at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. AI Strategy & Adoption */}
          <div className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors">
                1. AI Strategy & Adoption
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Setting roadmaps across 15+ business units, aligning executive investment, technical feasibility, and concrete business outcomes.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              <span>Multi-BU Roadmaps & ROI</span>
            </div>
          </div>

          {/* 2. GenAI Products & Platforms */}
          <div className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                2. GenAI Products & Platforms
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Architecting enterprise RAG, Agentic workflows, and voice AI systems handling 50K+ monthly calls with 30% lower resolution times.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>Production Voice & Agents</span>
            </div>
          </div>

          {/* 3. Enterprise Architecture */}
          <div className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors">
                3. Enterprise Architecture
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Unifying 100+ data sources on Databricks, architecting multi-cloud Azure & GCP fabrics, and securing Model Context Protocol (MCP) gateways.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              <span>Multi-Cloud & Databricks</span>
            </div>
          </div>

          {/* 4. Responsible AI & Governance */}
          <div className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                4. Responsible AI & Governance
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Institutionalizing bias controls, model audits, OAuth2 credential safeguards, and continuous evaluation suites to protect enterprise reputation.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50 text-xs text-text-muted font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>Ethics, Bias & Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED EXPERIENCE (NCR Voyix Position Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-border relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
              <div>
                <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
                  Current Role · Enterprise AI Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                  Senior Leader – Data & AI
                </h3>
                <p className="text-base text-accent-orange font-heading font-medium mt-0.5">
                  NCR Voyix · Gurgaon, India (Jan 2024 – Present)
                </p>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bg-elevated border border-border text-sm font-heading font-medium text-text-secondary hover:text-text-primary hover:border-accent-purple/40 transition-colors w-fit"
              >
                <span>View Full Career Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              Leading AI strategy and multi-business unit delivery across retail and restaurant ecosystems. Directing cross-functional teams of 20+ spanning AI, machine learning engineering, cloud architecture, and DevOps.
            </p>

            {/* Key Accomplishments Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-primary/50 border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary">
                  <strong>RAG Knowledge Products:</strong> Automated 40% of manual categorization across enterprise document stores.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-primary/50 border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary">
                  <strong>Conversational AI Voice Agents:</strong> Handles 50K+ monthly support queries, cutting resolution times by 30%.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-primary/50 border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary">
                  <strong>Enterprise Databricks Platform:</strong> Unified 100+ data sources for production ML and feature engineering.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-primary/50 border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary">
                  <strong>Spec-Driven Development:</strong> Structured review gates and eval checkpoints reducing release cycles from weeks to days.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED BOOK SECTION: AGENTS THAT SURVIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary border border-border relative overflow-hidden shadow-2xl">
          {/* Subtle Warm Orange Illumination matching book aesthetic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Book Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-heading font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Book · 2026 Publication</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
                  Agents That Survive
                </h2>
                <p className="text-xs sm:text-sm font-mono text-accent-orange tracking-widest uppercase mt-2">
                  Written by Rajeev K. Dave
                </p>
              </div>

              <blockquote className="text-lg text-text-primary font-serif italic border-l-2 border-accent-orange pl-4 py-1">
                "Five critical gaps. Real-world patterns. Production-ready systems built for 2026 and beyond."
              </blockquote>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                A practical field guide to building production-ready Agentic AI systems, covering critical gaps, real-world patterns, and engineering approaches for AI agents that need to work reliably beyond the prototype stage.
              </p>

              {/* In the Book Quick Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-text-primary">
                  In The Book:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary font-mono">
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
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={bookData.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/book"
                  className="px-6 py-3.5 rounded-xl bg-bg-elevated hover:bg-bg-hover border border-border hover:border-accent-orange/40 text-text-primary font-heading font-medium text-sm transition-all duration-200 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-accent-orange" />
                  <span>About the Book</span>
                </Link>
              </div>
            </div>

            {/* Book Cover Presentation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group">
                {/* Warm orange radial backlight glow */}
                <div className="absolute inset-0 bg-accent-orange/25 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />

                {/* 3D Book Presentation Card */}
                <div className="relative p-3 rounded-2xl bg-bg-card/40 border border-accent-orange/30 shadow-2xl backdrop-blur-sm">
                  <img
                    src={bookData.coverImageHd}
                    alt="Agents That Survive - Written by Rajeev K. Dave"
                    className="w-56 sm:w-64 h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
                  />
                  {/* Subtle reflection floor effect */}
                  <div className="w-full h-4 bg-gradient-to-b from-accent-orange/20 to-transparent blur-sm rounded-full mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THOUGHT LEADERSHIP (3 Selected Articles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
              Perspectives & Engineering Notes
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
              Thought Leadership & Research
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-heading font-medium text-accent-purple hover:text-white transition-colors"
          >
            <span>Explore Complete Blog Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="p-5 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <VisualThumbnail type={article.visualType} />

                {/* Category & Date */}
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="text-accent-purple font-medium">{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3 font-light">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-heading font-medium text-text-muted group-hover:text-text-primary">
                <span>{article.publishedAt}</span>
                <span className="flex items-center gap-1 text-accent-purple group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

