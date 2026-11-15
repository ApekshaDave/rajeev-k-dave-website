import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Experience', path: '/experience' },
    { label: 'Book', path: '/book', badge: '2026' },
    { label: 'Writing', path: '/writing' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-border/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="font-heading font-bold text-xl sm:text-2xl text-text-primary tracking-tight transition-colors group-hover:text-accent-purple">
              RKD<span className="text-accent-orange">.</span>
            </span>
            <div className="hidden sm:flex flex-col border-l border-border pl-3">
              <span className="text-xs font-heading font-medium text-text-secondary tracking-wider uppercase">
                Rajeev K. Dave
              </span>
              <span className="text-[10px] text-text-muted tracking-tight">
                AI & Technology Leader
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-1.5 rounded-md text-sm font-heading font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover/50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-accent-orange/15 text-accent-orange border border-accent-orange/30 font-mono">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-purple shadow-glow-purple rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book"
              className="px-3 py-1.5 rounded-lg border border-border text-xs font-heading font-medium text-text-secondary hover:text-accent-orange hover:border-accent-orange/40 transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-accent-orange" />
              <span>Agents That Survive</span>
            </Link>

            <Link
              to="/contact"
              className="px-4 py-1.5 rounded-lg border border-border bg-bg-card hover:bg-bg-elevated hover:border-accent-purple/50 text-text-primary hover:text-white transition-all text-sm font-heading font-medium flex items-center gap-1.5 group shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg border border-border bg-bg-card text-xs font-heading font-medium text-text-primary"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-border bg-bg-card text-text-secondary hover:text-text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-orange" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border px-4 pt-4 pb-6 mt-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-3 mb-2 border-b border-border/50">
            <p className="text-xs font-heading text-text-muted uppercase tracking-wider">
              Rajeev Kumar Dave
            </p>
            <p className="text-[11px] text-text-secondary">
              Gurgaon, India · Senior Leader – Data & AI
            </p>
          </div>

          {navLinks.map((item) => {
            const isActive = item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-heading font-medium ${
                  isActive
                    ? 'bg-bg-elevated text-accent-purple border border-border'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange border border-accent-orange/30">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}

          <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2.5">
            <Link
              to="/book"
              className="w-full py-2.5 px-4 rounded-lg bg-bg-card border border-border text-center text-sm font-heading font-medium text-accent-orange flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Agents That Survive (2026)</span>
            </Link>
            <Link
              to="/contact"
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-accent-purple/20 to-accent-orange/20 border border-accent-purple/40 text-center text-sm font-heading font-medium text-text-primary flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-accent-purple" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
