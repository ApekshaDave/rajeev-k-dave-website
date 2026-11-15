import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Mic2, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  Layers, 
  Users, 
  BookOpen
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const leadershipPrinciples = [
    {
      title: "Business Impact First",
      description: "Technology is a multiplier, not an end in itself. Every AI model, architectural choice, and platform roadmap must tie back to quantifiable business metrics, margin improvement, and user delight.",
      icon: Compass
    },
    {
      title: "Build for Scale & Resilience",
      description: "Prototypes thrive in pristine conditions; enterprise systems must withstand non-deterministic failures, latency spikes, and multi-tenant spikes without collapsing.",
      icon: Layers
    },
    {
      title: "Responsible AI by Design",
      description: "Ethics, safety guardrails, PII redaction, and bias controls are non-negotiable architectural requirements. We embed governance directly into the delivery pipeline.",
      icon: ShieldCheck
    },
    {
      title: "Empower & Unblock Teams",
      description: "Great technology organizations thrive on psychological safety, architectural clarity, and continuous mentorship. Leadership is about setting the vision and eliminating friction.",
      icon: Users
    },
    {
      title: "Continuous Hands-on Craft",
      description: "Executive leadership is sharpest when grounded in technical reality. Staying close to code, pull requests, and architectural tradeoffs earns team trust and stops architectural drift.",
      icon: BookOpen
    }
  ];

  const educationList = [
    {
      degree: "Certificate of Higher Education, Data Science and Artificial Intelligence",
      institution: "Indian Institute of Management (IIM) Kozhikode",
      year: "2024"
    },
    {
      degree: "M.Sc., Data Science and Artificial Intelligence",
      institution: "Chandigarh University",
      year: "Pursuing"
    },
    {
      degree: "M.Sc., Cyber Law and Security",
      institution: "IMT Ghaziabad",
      year: "2014"
    },
    {
      degree: "M.A., Economics",
      institution: "Madurai Kamaraj University",
      year: "2009"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Gujarat University",
      year: "2012"
    }
  ];

  const certificationsList = [
    { title: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft", badge: "Expert" },
    { title: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", badge: "AI" },
    { title: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft", badge: "Data" },
    { title: "Microsoft Certified: Azure IoT Developer Specialty", issuer: "Microsoft", badge: "IoT" },
    { title: "Oracle Cloud Infrastructure 2021 Architect Associate", issuer: "Oracle", badge: "Cloud" },
    { title: "Certified SAFe 4 Agilist", issuer: "Scaled Agile", badge: "Agile" },
  ];

  const awardsList = [
    {
      title: "Winner, Global ITS Hackathon",
      years: "2024, 2023, 2020",
      description: "Multiple-time winner for breakthrough AI, machine learning and operational automation platforms."
    },
    {
      title: "Top Ten Finalist, Global Hackathon",
      years: "2019",
      description: "Recognized among thousands of global participants for distributed edge-cloud architecture."
    },
    {
      title: "IT Excellence Award — Mobility Hybrid Application",
      years: "2015",
      description: "Recognized for leading the Mobile CoE delivering applications for 50,000+ users."
    },
    {
      title: "R&D Award — Near Zero Downtime Project",
      years: "2013",
      description: "Engineering excellence award for high-availability distributed systems."
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. EDITORIAL HERO & BIOGRAPHY HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-heading font-medium tracking-wider uppercase">
              <span>Executive Biography</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
              A Technologist, Builder and AI Leader
            </h1>

            <p className="text-lg text-text-primary font-serif italic border-l-2 border-accent-purple pl-4">
              "My journey over the past two decades has centered on turning technological shifts into tangible enterprise outcomes — bridging high-level corporate strategy with deep architectural execution."
            </p>

            <div className="space-y-4 text-text-secondary leading-relaxed font-light text-base">
              <p>
                I am an AI and technology leader with <strong>20+ years of experience</strong> building software products, enterprise platforms, and cross-functional engineering organizations. Based in Gurgaon, Haryana, India, I currently serve as <strong>Senior Leader – Data & AI at NCR Voyix</strong>, directing AI strategy, GenAI adoption, and production delivery across 15+ business units.
              </p>
              <p>
                Throughout my career, I have held leadership and architect roles spanning <strong>enterprise AI, AIOps, cloud architectures, IoT edge platforms, and mobile centers of excellence</strong>. I believe true leadership requires comfort in both executive boardrooms — discussing investment horizons, regulatory risks, and strategic roadmaps — and deep in engineering discussions, evaluating state graph designs, token economics, and telemetry pipelines.
              </p>
              <p>
                In 2026, I authored <em>Agents That Survive</em>, a field guide addressing the critical engineering gaps between demo-grade multi-agent prototypes and resilient, fault-tolerant enterprise systems.
              </p>
            </div>
          </div>

          {/* Primary Speaking Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-accent-purple/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border bg-bg-card p-2 shadow-2xl">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-bg-primary">
                  <img
                    src="/assets/images/rajeev-event-mic.jpg"
                    alt="Rajeev Kumar Dave speaking at NCR Voyix"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-bg-card/90 backdrop-blur-md border border-border text-xs">
                    <span className="font-heading font-semibold text-text-primary block">
                      Speaking on Enterprise GenAI & Ethics
                    </span>
                    <span className="text-[11px] text-text-muted">
                      NCR Voyix Technology Forum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading uppercase tracking-wider text-accent-purple font-semibold">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl font-heading font-bold text-text-primary">
            Technology Leadership Principles
          </h2>
          <p className="text-sm text-text-secondary">
            The core tenets forged over two decades of leading mission-critical engineering initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipPrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent-purple group-hover:text-accent-orange transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. EDITORIAL PHOTOGRAPHY & SPEAKING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-heading uppercase tracking-wider text-accent-orange font-semibold">
                Engagement & Culture
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                Engineering Culture, Community & Keynotes
              </h2>
            </div>
            <p className="text-sm text-text-secondary max-w-md">
              Fostering inclusive, high-velocity engineering organizations, mentoring technologists, and speaking at industry forums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Photo 1: B&W Event Photo */}
            <div className="p-3 rounded-2xl bg-bg-card border border-border overflow-hidden group">
              <div className="rounded-xl overflow-hidden aspect-[16/11] relative">
                <img
                  src="/assets/images/rajeev-event-bw.jpg"
                  alt="Rajeev Kumar Dave addressing engineering teams"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-bg-primary/80 backdrop-blur-sm border border-border/60 text-xs text-text-secondary">
                  <span className="font-heading font-semibold text-text-primary">Keynote & Town Hall:</span> Inspiring engineering teams and celebrating technical milestones.
                </div>
              </div>
            </div>

            {/* Photo 2: Candid Event Photo */}
            <div className="p-3 rounded-2xl bg-bg-card border border-border overflow-hidden group">
              <div className="rounded-xl overflow-hidden aspect-[16/11] relative">
                <img
                  src="/assets/images/rajeev-event-candid.jpg"
                  alt="Rajeev Kumar Dave receiving industry recognition"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-bg-primary/80 backdrop-blur-sm border border-border/60 text-xs text-text-secondary">
                  <span className="font-heading font-semibold text-text-primary">Recognition & Awards:</span> Leading with empathy, celebrating innovation, and recognizing team excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATION & CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-bg-card border border-border hover:border-accent-purple/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-text-muted font-mono mb-1">
                    <span>{item.institution}</span>
                    <span className="text-accent-purple font-medium">{item.year}</span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-text-primary">
                    {item.degree}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Industry Credentials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Certifications & Credentials
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-bg-card border border-border hover:border-accent-orange/30 transition-colors flex flex-col justify-between gap-3"
                >
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-elevated text-accent-orange border border-border inline-block mb-2">
                      {cert.badge}
                    </span>
                    <div className="text-xs font-heading font-semibold text-text-primary leading-snug">
                      {cert.title}
                    </div>
                  </div>
                  <div className="text-[11px] text-text-muted font-mono">
                    Issuer: {cert.issuer}
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-accent-purple/10 to-transparent border border-accent-purple/30 flex items-start gap-3">
              <Mic2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
              <div className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-heading">Industry Speaker:</strong> Regularly delivers keynote sessions and technical talks on Generative AI, Responsible AI, and Machine Learning Ethics across enterprise forums.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AWARDS & RECOGNITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
            <div>
              <span className="text-xs font-heading uppercase tracking-wider text-accent-orange font-semibold">
                Track Record of Excellence
              </span>
              <h3 className="text-2xl font-heading font-bold text-text-primary mt-1">
                Awards & Technical Honors
              </h3>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bg-elevated border border-border text-xs font-heading font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <span>Explore Career Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsList.map((award, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-bg-primary/60 border border-border/80 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-heading font-semibold text-text-primary">
                      {award.title}
                    </h4>
                    <span className="text-xs font-mono text-accent-orange">
                      {award.years}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
