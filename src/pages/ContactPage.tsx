import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Executive Advisory / AI Strategy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-heading font-medium tracking-wider uppercase">
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Direct Contact & Executive Inquiries
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Whether exploring enterprise AI strategy, speaking opportunities, technical advisory, or discussion around <em>Agents That Survive</em>.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-bg-card border border-border space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Professional Identity
                </span>
                <h3 className="text-2xl font-heading font-bold text-text-primary">
                  Rajeev Kumar Dave
                </h3>
                <p className="text-sm font-heading font-medium text-accent-purple">
                  Senior Leader – Data & AI | GenAI Strategist & Author
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/70 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">Location</span>
                    <span className="text-text-primary font-medium">Gurgaon, Haryana, India</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">Email Direct</span>
                    <a
                      href="mailto:rajeevkdave@gmail.com"
                      className="text-text-primary hover:text-accent-purple transition-colors font-medium"
                    >
                      rajeevkdave@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">Phone</span>
                    <a
                      href="tel:+919810931843"
                      className="text-text-primary hover:text-accent-purple transition-colors font-mono text-xs"
                    >
                      +91 981-093-1843
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent-orange shrink-0 mt-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">LinkedIn</span>
                    <a
                      href="https://linkedin.com/in/rajeevkdave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent-orange transition-colors font-medium flex items-center gap-1"
                    >
                      <span>linkedin.com/in/rajeevkdave</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Advisory note */}
              <div className="pt-4 border-t border-border/70 flex items-start gap-2.5 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                <span>
                  Responses are handled with utmost confidentiality and discretion. Direct calendar slots are available upon request.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-border relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1">
                    Please provide brief context so we can connect effectively.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-bg-primary/80 border border-green-500/40 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-heading font-semibold text-text-primary">
                        Message Received
                      </h4>
                      <p className="text-xs text-text-secondary max-w-sm mx-auto">
                        Thank you for reaching out. Rajeev will review your inquiry and follow up shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-bg-card border border-border text-xs font-heading text-text-secondary hover:text-text-primary"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-heading font-medium text-text-secondary">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-heading font-medium text-text-secondary">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. elena@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-heading font-medium text-text-secondary">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border text-sm text-text-primary focus:outline-none focus:border-accent-purple/60 cursor-pointer font-mono text-xs"
                      >
                        <option>Executive Advisory / AI Strategy</option>
                        <option>Keynote Speaking / Panel Discussion</option>
                        <option>Agents That Survive Book Inquiry</option>
                        <option>Enterprise Architecture Consultation</option>
                        <option>General Professional Connection</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-heading font-medium text-text-secondary">
                        Message / Project Context *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describe your organization's goals, timeline, or discussion topic..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-heading font-semibold text-sm transition-all duration-200 shadow-glow-orange flex items-center justify-center gap-2 group"
                      >
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

