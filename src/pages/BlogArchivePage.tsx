import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { WaveVisual } from '../components/WaveVisual';

export const BlogArchivePage: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40">
      {/* MAIN COMING SOON HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
            <span>Field Notes & Technical Essays</span>
          </div>

          {/* BIG LETTERS COMING SOON */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-purple-200 to-accent-orange tracking-tight leading-none uppercase">
              Coming Soon
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-heading font-medium text-text-secondary tracking-widest uppercase">
              Ideas, Insights & Perspectives
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-2xl mx-auto">
            Rajeev Kumar Dave's technical essays, architecture postmortems, and field notes from 20+ years of enterprise engineering leadership will be published here.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              to="/"
              className="px-8 py-3.5 rounded-full bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/experience"
              className="px-8 py-3.5 rounded-full text-text-primary hover:text-white font-heading font-medium text-sm transition-all duration-200 flex items-center gap-2 border border-border/70 hover:border-accent-purple/50 group"
            >
              <span>Explore Experience</span>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-purple group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-text-secondary hover:text-text-primary font-heading font-medium text-sm transition-all duration-200"
            >
              Contact Direct
            </Link>
          </div>
        </div>
      </section>

      {/* Atmospheric Wave Animation at the bottom */}
      <div className="w-full mt-16 pointer-events-none opacity-50">
        <WaveVisual />
      </div>
    </div>
  );
};
