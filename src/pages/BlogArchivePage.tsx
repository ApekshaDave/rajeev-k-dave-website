import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import { bookData } from '../data/book';

export const BlogArchivePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping" />
            <span>Thought Leadership · Coming Soon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-tight">
            Ideas, Insights & Perspectives.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Exploring the evolving world of enterprise AI, agentic systems, production architecture, and responsible technology.
          </p>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light pt-2 border-l-2 border-accent-purple/60 pl-4">
            Rajeev Kumar Dave's technical essays, architecture postmortems, and field notes from 20+ years of enterprise engineering leadership will be published here.
          </p>
        </div>
      </section>

      {/* 2. WHILE YOU WAIT: EXPLORE PUBLISHED BOOK (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Published Work</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
                  Explore the Published Field Guide
                </h3>
                <p className="text-sm font-mono text-accent-orange uppercase">
                  Agents That Survive (2026) · Written by Rajeev K. Dave
                </p>
              </div>

              <p className="text-base text-text-secondary leading-relaxed font-light">
                {bookData.fullOverview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={bookData.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all shadow-glow-orange flex items-center gap-2"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/book"
                  className="px-7 py-3 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all border border-border/60 hover:border-accent-orange/50 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-accent-orange" />
                  <span>About the Book</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <div 
                  className="absolute inset-0 -m-6 rounded-full blur-[70px] opacity-40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, #FF831E 0%, #B84700 50%, transparent 75%)'
                  }}
                />
                <img
                  src={bookData.coverImageHd}
                  alt="Agents That Survive by Rajeev K. Dave"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAY CONNECTED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Connect Directly
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Connect on LinkedIn or reach out for executive advisory, speaking engagements, and enterprise AI discussions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://linkedin.com/in/rajeevkdave"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-accent-purple hover:bg-purple-600 text-white font-heading font-semibold text-sm transition-all shadow-glow-purple flex items-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all border border-border/60"
            >
              Contact Direct
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
