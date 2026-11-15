import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight, BookOpen, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border mt-24 relative overflow-hidden">
      {/* Subtle top hairline */}
      <div className="hairline-purple h-[1px] w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Executive Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="font-heading font-bold text-2xl text-text-primary tracking-tight">
                RKD<span className="text-accent-orange">.</span>
              </span>
              <span className="text-sm font-heading font-medium text-text-secondary border-l border-border pl-2">
                Rajeev Kumar Dave
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              AI & Technology Leader with 20+ years building products, platforms and engineering organizations. Leading enterprise AI strategy, GenAI adoption, and author of <em>Agents That Survive</em>.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-text-muted">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent-purple" />
                <span>Gurgaon, Haryana, India</span>
              </div>
              <a 
                href="mailto:rajeevkdave@gmail.com" 
                className="flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-purple" />
                <span>rajeevkdave@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-text-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-orange" />
                <span>Responsible AI & Enterprise Governance</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-text-primary uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-text-secondary hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About & Biography
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-text-secondary hover:text-text-primary transition-colors">
                  Core Expertise
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-text-secondary hover:text-text-primary transition-colors">
                  Experience & Timeline
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Publications & Articles */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-text-primary uppercase tracking-wider">
              Publications
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/book" className="text-accent-orange hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Agents That Survive</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-text-primary transition-colors">
                  <span>Research & Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Professional Profiles */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-text-primary uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/rajeevkdave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center gap-1 group"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:rajeevkdave@gmail.com"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center gap-1 group"
                >
                  <span>Email Direct</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-text-secondary hover:text-accent-orange transition-colors flex items-center gap-1 group"
                >
                  <span>Amazon Author Page</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-12 mt-12 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Rajeev Kumar Dave. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>AI Strategy</span>
            <span>•</span>
            <span>Enterprise Architecture</span>
            <span>•</span>
            <span>Responsible AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

