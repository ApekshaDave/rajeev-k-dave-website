import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { bookData } from '../data/book';

export const BlogArchivePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const upcomingTopics = [
    {
      title: "Building Production-Ready Agentic Systems",
      category: "Agentic AI",
      summary: "State graph isolation, deterministic fallbacks, and multi-model consensus for production agents beyond prototype sandboxes."
    },
    {
      title: "RAG at Enterprise Scale: Beyond Naive Vector Search",
      category: "RAG & LLMs",
      summary: "Sparse/dense hybrid retrieval, reciprocal rank fusion (RRF), and neural cross-encoder re-ranking across 30M+ enterprise records."
    },
    {
      title: "The Bias-Variance Tradeoff in Modern Deep Learning",
      category: "Machine Learning",
      summary: "How over-parameterized foundation models, benign overfitting, and deep double descent challenge classical textbook wisdom."
    },
    {
      title: "Securing Autonomous Agents: Short-Lived Credentials and OAuth2",
      category: "AI Security",
      summary: "Zero-trust architectures for tool-calling agents to prevent prompt injection privilege escalation and data-loss risks."
    },
    {
      title: "Spec-Driven Development for Enterprise Generative AI",
      category: "Enterprise AI",
      summary: "Replacing chaotic prompt tinkering with strict interface contracts, cross-functional review gates, and deterministic eval suites."
    },
    {
      title: "AIOps in Practice: Reducing MTTR by 45% via Anomaly Detection",
      category: "MLOps",
      summary: "Transforming high-volume distributed telemetry and alert storms into intelligent incident correlation and automated triage."
    }
  ];

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping" />
            <span>Field Notes & Research · Coming Soon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-tight">
            Ideas, Insights & Perspectives.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Exploring the evolving world of enterprise AI, agentic systems, production architecture, and responsible technology.
          </p>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light pt-2 border-l-2 border-accent-purple/60 pl-4">
            Rajeev Kumar Dave's curated repository of technical essays, architecture postmortems, and field notes from 20+ years of enterprise engineering is currently being prepared for release.
          </p>
        </div>
      </section>

      {/* 2. FORTHCOMING TOPICS PREVIEW (OPEN EDITORIAL GRID, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border/30">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-purple font-semibold">
                Forthcoming Publications
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                Topics & Papers in Progress
              </h2>
            </div>
            <span className="text-xs font-mono text-text-muted">
              Scheduled for 2026 Release
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingTopics.map((topic, idx) => (
              <div key={idx} className="space-y-3 pt-4 border-t border-border/20">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-purple font-medium">
                    {topic.category}
                  </span>
                  <span className="text-text-muted">
                    Paper 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-semibold text-text-primary leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  {topic.summary}
                </p>

                <div className="pt-2 text-[11px] font-mono text-accent-orange/80 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Drafting / In Editorial Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHILE YOU WAIT: EXPLORE PUBLISHED BOOK (NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-orange uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available Now</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
                  Read the Published Book in the Meantime
                </h3>
                <p className="text-sm font-mono text-accent-orange uppercase">
                  Agents That Survive (2026) · Written by Rajeev K. Dave
                </p>
              </div>

              <p className="text-base text-text-secondary leading-relaxed font-light">
                {bookData.shortDescription} A practical field guide addressing the critical engineering gaps between demo-grade multi-agent prototypes and resilient enterprise systems.
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
              <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                <div 
                  className="absolute inset-0 -m-6 rounded-full blur-[60px] opacity-40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, #FF831E 0%, #B84700 50%, transparent 75%)'
                  }}
                />
                <img
                  src={bookData.coverImageHd}
                  alt="Agents That Survive by Rajeev K. Dave"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STAY INFORMED / CONNECT (CLEAN MINIMAL, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/40 pt-16 flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Stay Informed on New Releases
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Connect directly on LinkedIn for immediate publication announcements, speaking sessions, and architectural discussions.
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
              Send an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
