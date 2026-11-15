import React from 'react';
import { 
  ExternalLink, 
  AlertTriangle, 
  GitBranch, 
  Cpu, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Camera,
  Palette,
  CheckCheck
} from 'lucide-react';
import { bookData } from '../data/book';

export const BookPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HERO SECTION: OPEN EDITORIAL SHOWCASE (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Book Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center text-xs font-mono tracking-widest text-accent-orange uppercase">
              <span>Published Work · 2026</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-tight">
                Agents That Survive
              </h1>
              <p className="text-xs sm:text-sm font-mono text-accent-orange tracking-wider uppercase leading-relaxed max-w-xl">
                {bookData.subtitle}
              </p>
              <p className="text-sm text-text-muted font-light pt-1">
                Written by <span className="text-text-primary font-medium">Rajeev K. Dave</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
              {bookData.fullOverview}
            </p>

            {/* Production Credits - Clean Minimal Line Layout (No Boxes) */}
            <div className="pt-6 border-t border-border/40 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                Production Credits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
                {bookData.credits.map((credit, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent-orange/90">
                      {credit.role === 'Photographer' && <Camera className="w-3 h-3" />}
                      {credit.role === 'Designer' && <Palette className="w-3 h-3" />}
                      {credit.role === 'Technical Reviewer' && <CheckCheck className="w-3 h-3" />}
                      <span>{credit.role}</span>
                    </div>
                    <div className="font-heading font-medium text-sm text-text-primary">
                      {credit.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Callout */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href={bookData.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
              >
                <span>Buy on Amazon</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <span className="text-xs font-mono text-text-muted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available worldwide on Amazon
              </span>
            </div>
          </div>

          {/* Right Column: Realistic 3D Book with Ambient Depth & Subtle Background Blur */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <div className="relative group w-full max-w-[380px] flex flex-col items-center">
              {/* Soft, Diffuse Sunset Amber Atmosphere with Background Blur */}
              <div 
                className="absolute inset-0 -m-8 rounded-full blur-[80px] opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-60"
                style={{
                  background: 'radial-gradient(circle at 60% 45%, #FF831E 0%, #B84700 45%, transparent 75%)'
                }}
              />

              {/* Secondary Soft Depth-of-Field Blur Disc */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 rounded-full bg-accent-purple/15 blur-[100px] pointer-events-none" />

              {/* Realistic 3D Standing Book (Transparent PNG with Authentic Depth) */}
              <div className="relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <img
                  src={bookData.coverImageHd}
                  alt="Agents That Survive by Rajeev K. Dave"
                  className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
                />
              </div>

              {/* Subtle Ground Ambient Shadow & Reflection */}
              <div className="w-3/4 h-6 bg-gradient-to-r from-transparent via-black/80 to-transparent blur-md rounded-full mt-2 z-0" />
              <div className="w-1/2 h-2 bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent blur-sm rounded-full -mt-2 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FIVE CORE THEMES - EDITORIAL NUMBERED SECTIONS (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-border/40 pt-16 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">
              Architectural Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
              Five Critical Themes Explored
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Grounded in production deployments, moving past toy demos into mission-critical stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bookData.inTheBook.map((theme, idx) => (
              <div key={idx} className="space-y-3 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent-orange font-semibold">
                    0{idx + 1}
                  </span>
                  <div className="text-text-muted">
                    {theme.icon === 'AlertTriangle' && <AlertTriangle className="w-4 h-4 text-accent-orange/70" />}
                    {theme.icon === 'GitBranch' && <GitBranch className="w-4 h-4 text-accent-orange/70" />}
                    {theme.icon === 'Cpu' && <Cpu className="w-4 h-4 text-accent-orange/70" />}
                    {theme.icon === 'Layers' && <Layers className="w-4 h-4 text-accent-orange/70" />}
                    {theme.icon === 'Compass' && <Compass className="w-4 h-4 text-accent-orange/70" />}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-text-primary">
                  {theme.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO SHOULD READ THIS BOOK - MINIMAL EDITORIAL LIST (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-purple">
              Target Audience
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
              Built for Practitioners & Decision Makers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {bookData.audience.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border/20">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-sm font-heading font-medium text-text-secondary leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHOR INFORMATION - OPEN EDITORIAL PROFILE (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border-t border-border/40 pt-16 flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-border/60 shrink-0">
            <img
              src="/assets/images/rajeev-hero-portrait.jpg"
              alt="Rajeev Kumar Dave"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-purple">
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
