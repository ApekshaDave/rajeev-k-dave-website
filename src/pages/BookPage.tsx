import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  AlertTriangle, 
  GitBranch, 
  Cpu, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { bookData } from '../data/book';

export const BookPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HERO SECTION: BOOK SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-bg-card border border-border overflow-hidden">
          {/* Subtle Warm Orange Illumination matching book aesthetic */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Book Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-heading font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Published Work · 2026</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight">
                  Agents That Survive
                </h1>
                <p className="text-xs sm:text-sm font-mono text-accent-orange tracking-widest uppercase mt-3 leading-relaxed">
                  {bookData.subtitle}
                </p>
              </div>

              <div className="text-xs font-mono text-text-muted">
                Written by <span className="text-text-primary font-semibold">Rajeev K. Dave</span>
              </div>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
                {bookData.fullOverview}
              </p>

              {/* Purchase Callout */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={bookData.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-base transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Available worldwide on Amazon</span>
                </div>
              </div>
            </div>

            {/* Book Cover Presentation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group">
                {/* Radial warm glow */}
                <div className="absolute inset-0 bg-accent-orange/30 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />

                {/* 3D Cover Display */}
                <div className="relative p-4 rounded-2xl bg-bg-card/50 border border-accent-orange/40 shadow-2xl backdrop-blur-md">
                  <img
                    src={bookData.coverImageHd}
                    alt="Agents That Survive - Book Cover by Rajeev K. Dave"
                    className="w-64 sm:w-80 h-auto rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
                  />
                  {/* Floor Glow Reflection */}
                  <div className="w-full h-5 bg-gradient-to-b from-accent-orange/30 to-transparent blur-sm rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FIVE CORE THEMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-heading uppercase tracking-wider text-accent-orange font-semibold">
            Architectural Themes
          </span>
          <h2 className="text-3xl font-heading font-bold text-text-primary">
            Key Themes Explored in the Book
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-light">
            Grounded in production deployments, moving past toy demos into mission-critical stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookData.inTheBook.map((theme, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-orange/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange group-hover:scale-110 transition-transform">
                    {theme.icon === 'AlertTriangle' && <AlertTriangle className="w-5 h-5" />}
                    {theme.icon === 'GitBranch' && <GitBranch className="w-5 h-5" />}
                    {theme.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                    {theme.icon === 'Layers' && <Layers className="w-5 h-5" />}
                    {theme.icon === 'Compass' && <Compass className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/50 text-[11px] font-mono text-text-muted">
                  Theme 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHO SHOULD READ THIS BOOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
              Target Audience
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
              Built for Practitioners & Decision Makers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookData.audience.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-bg-primary/60 border border-border flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-sm font-heading font-medium text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHOR INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-border flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-border shrink-0">
            <img
              src="/assets/images/rajeev-hero-portrait.jpg"
              alt="Rajeev Kumar Dave"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
              About the Author
            </span>
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Rajeev Kumar Dave
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Rajeev is an AI & technology leader, enterprise architect, and Senior Leader – Data & AI at NCR Voyix. With 20+ years of engineering leadership, he guides enterprise AI strategy and builds scalable, production-tested GenAI platforms across diverse commercial domains.
            </p>
            <div className="pt-2">
              <a
                href={bookData.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-accent-orange hover:underline"
              >
                <span>View Author Page & Purchase on Amazon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
