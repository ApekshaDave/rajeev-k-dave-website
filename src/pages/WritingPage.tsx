import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  BookOpen, 
  Sparkles, 
  Filter, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { articles, ArticleCategory } from '../data/articles';
import { VisualThumbnail } from '../components/VisualThumbnail';

export const WritingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const writingCategories = [
    'All',
    'Agentic AI',
    'Generative AI',
    'Enterprise AI',
    'Responsible AI',
    'AI Leadership',
    'Machine Learning',
    'AI Architecture'
  ];

  const primaryFeaturedArticle = articles.find(a => a.slug === 'building-production-ready-agentic-systems') || articles[0];
  const secondaryFeaturedArticles = articles.filter(a => a.slug !== primaryFeaturedArticle.slug && a.isFeatured).slice(0, 2);

  const curatedList = articles.filter(a => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI Leadership') return a.category === 'Leadership & Strategy';
    return a.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="space-y-24 sm:space-y-32 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-xs font-heading font-medium tracking-wider uppercase">
            <span>Curated Thought Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Ideas, Insights & Field Notes
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            On Generative AI, agentic systems, enterprise architecture, and building real-world, responsible software.
          </p>
        </div>
      </section>

      {/* 2. PRIMARY FEATURED EDITORIAL ARTICLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-accent-orange/15 text-accent-orange border border-accent-orange/30 font-medium">
                  {primaryFeaturedArticle.category}
                </span>
                <span className="text-text-muted">{primaryFeaturedArticle.readingTime}</span>
                <span className="text-text-muted">·</span>
                <span className="text-text-muted">{primaryFeaturedArticle.publishedAt}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-text-primary group-hover:text-accent-purple transition-colors leading-tight">
                <Link to={`/blog/${primaryFeaturedArticle.slug}`}>
                  {primaryFeaturedArticle.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                {primaryFeaturedArticle.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  to={`/blog/${primaryFeaturedArticle.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-purple hover:bg-purple-600 text-white font-heading font-semibold text-sm transition-all shadow-glow-purple"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link to={`/blog/${primaryFeaturedArticle.slug}`} className="block">
                <VisualThumbnail type={primaryFeaturedArticle.visualType} className="h-60 sm:h-72" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECONDARY FEATURED ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryFeaturedArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="p-6 sm:p-8 rounded-3xl bg-bg-card border border-border hover:border-accent-purple/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <VisualThumbnail type={article.visualType} className="h-48" />

                <div className="flex items-center justify-between text-xs font-mono text-text-muted pt-2">
                  <span className="text-accent-purple font-medium">{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-purple transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed font-light line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-heading font-medium text-text-muted group-hover:text-text-primary">
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

      {/* 4. CURATED ARTICLES WITH CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Selected Publications & Essays
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Curated perspectives on engineering design and technology leadership.
            </p>
          </div>

          {/* Complete archive link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-medium text-accent-orange hover:underline"
          >
            <span>View Full Blog Archive ({articles.length} Articles)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {writingCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-accent-purple text-bg-primary font-semibold shadow-glow-purple'
                  : 'bg-bg-card text-text-secondary hover:text-text-primary border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Curated List */}
        <div className="space-y-4">
          {curatedList.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="p-5 sm:p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-accent-purple font-medium">{article.category}</span>
                  <span className="text-text-muted">·</span>
                  <span className="text-text-muted">{article.readingTime}</span>
                </div>
                <h4 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-purple transition-colors">
                  {article.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 font-light">
                  {article.excerpt}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-heading font-medium text-text-muted group-hover:text-accent-purple">
                <span>Read Note</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
