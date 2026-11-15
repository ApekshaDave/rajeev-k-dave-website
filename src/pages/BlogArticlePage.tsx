import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Copy, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { articles } from '../data/articles';
import { VisualThumbnail } from '../components/VisualThumbnail';

export const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const articleIndex = articles.findIndex((a) => a.slug === slug);
  const article = articles[articleIndex];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  const relatedArticles = article.relatedSlugs
    ? articles.filter((a) => article.relatedSlugs?.includes(a.slug))
    : articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. ARTICLE HEADER & NAVIGATION */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-heading font-medium text-text-muted hover:text-accent-purple transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Blog Archive</span>
        </Link>

        {/* Metadata Bar */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-accent-purple font-semibold">
              {article.category}
            </span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent-orange" />
              {article.readingTime}
            </span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center justify-between gap-4 pt-4 pb-6 border-b border-border/40">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/rajeev-hero-portrait.jpg"
                alt="Rajeev Kumar Dave"
                className="w-10 h-10 rounded-full object-cover object-top border border-border"
              />
              <div>
                <div className="text-sm font-heading font-semibold text-text-primary">
                  {article.author}
                </div>
                <div className="text-xs text-text-muted">
                  {article.authorRole}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-1.5 rounded-full border border-border/60 hover:border-accent-purple/40 text-xs font-heading font-medium text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors"
                title="Copy article link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/60 hover:border-accent-purple/40 text-text-muted hover:text-accent-purple transition-colors"
                title="Share on LinkedIn"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Visual Header Graphic */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <VisualThumbnail type={article.visualType} className="h-64 sm:h-80" />
        </div>

        {/* Table of Contents & Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          {/* Sticky Table of Contents (Desktop, Unboxed) */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <aside className="lg:col-span-4 sticky top-24 space-y-4 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-accent-purple flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {article.tableOfContents.map((toc) => (
                  <a
                    key={toc.id}
                    href={`#${toc.id}`}
                    className="block text-text-secondary hover:text-accent-orange py-1 transition-colors border-l border-border/30 hover:border-accent-orange pl-3"
                  >
                    {toc.title}
                  </a>
                ))}
              </nav>

              {/* Author Book Mention */}
              <div className="pt-6 border-t border-border/30 space-y-2">
                <span className="text-[10px] font-mono uppercase text-accent-orange font-semibold block">
                  Author's Book:
                </span>
                <p className="text-text-secondary text-xs leading-relaxed font-light">
                  Read the complete field guide in <em>Agents That Survive (2026)</em>.
                </p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-1 text-xs font-heading font-medium text-accent-orange hover:underline pt-1"
                >
                  <span>Explore Book</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          )}

          {/* Main Article Prose Content */}
          <div className={`${article.tableOfContents?.length ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6 prose prose-invert max-w-none`}>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Article Tags */}
            <div className="pt-8 mt-12 border-t border-border/30 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-text-muted mr-2">Tags:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono text-text-muted border border-border/40"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Previous & Next Article Navigation */}
        <div className="pt-10 border-t border-border/30 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevArticle ? (
            <Link
              to={`/blog/${prevArticle.slug}`}
              className="flex items-center gap-3 group text-left pt-2"
            >
              <ArrowLeft className="w-4 h-4 text-accent-purple shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase">Previous Article</span>
                <div className="text-xs sm:text-sm font-heading font-semibold text-text-primary line-clamp-1 group-hover:text-accent-purple">
                  {prevArticle.title}
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextArticle && (
            <Link
              to={`/blog/${nextArticle.slug}`}
              className="flex items-center justify-between gap-3 group text-right sm:col-start-2 pt-2"
            >
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase">Next Article</span>
                <div className="text-xs sm:text-sm font-heading font-semibold text-text-primary line-clamp-1 group-hover:text-accent-purple">
                  {nextArticle.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-accent-purple shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Related Articles Section (Editorial, No Boxes) */}
        {relatedArticles.length > 0 && (
          <div className="pt-12 border-t border-border/30 space-y-6 pb-12">
            <h3 className="text-xl font-heading font-bold text-text-primary">
              Related Articles & Field Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="group flex flex-col justify-between space-y-2 pt-4 border-t border-border/20 hover:border-accent-purple/40 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-accent-purple">
                      {rel.category} · {rel.readingTime}
                    </div>
                    <h4 className="text-base font-heading font-bold text-text-primary group-hover:text-accent-purple transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-text-secondary line-clamp-2 font-light">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-heading font-medium text-accent-purple flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
