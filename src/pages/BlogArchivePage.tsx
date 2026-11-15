import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowUpDown, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  Filter,
  Check
} from 'lucide-react';
import { articles, articleCategories, ArticleCategory } from '../data/articles';
import { VisualThumbnail } from '../components/VisualThumbnail';

export const BlogArchivePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [visibleCount, setVisibleCount] = useState(6);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    articleCategories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = articles.filter(a => a.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesCategory =
          selectedCategory === 'All' || article.category === selectedCategory;

        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((t) => t.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="space-y-16 sm:space-y-24 pt-24 sm:pt-28 lg:pt-32">
      {/* 1. BLOG HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-xs font-heading font-medium tracking-wider uppercase">
            <span>Knowledge Archive</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Ideas, Insights & Perspectives.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Exploring the evolving world of AI, engineering, enterprise architecture and responsible technology.
          </p>
        </div>
      </section>

      {/* 2. MAIN BLOG ARCHIVE CONTAINER (Sidebar + Grid Layout matching mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar: Categories with Counts */}
          <div className="lg:col-span-3 space-y-4 bg-bg-card p-5 rounded-2xl border border-border sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-border/80 text-xs font-heading font-semibold text-text-primary uppercase tracking-wider">
              <span>Categories</span>
              <span className="text-text-muted font-mono">{articles.length} Posts</span>
            </div>

            <div className="space-y-1">
              {articleCategories.map((category) => {
                const isSelected = selectedCategory === category;
                const count = categoryCounts[category] || 0;

                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleCount(6); // Reset pagination on category change
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-medium transition-all ${
                      isSelected
                        ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/40 shadow-sm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                    }`}
                  >
                    <span>{category}</span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Area: Search, Sort, and Cards */}
          <div className="lg:col-span-9 space-y-6">
            {/* Search & Sort Controls Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-bg-card border border-border">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles by title, keywords or topic..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-bg-primary border border-border text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest')}
                  className="bg-bg-primary border border-border text-xs font-mono text-text-secondary rounded-xl px-3 py-2 focus:outline-none focus:border-accent-purple/60 cursor-pointer"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'All' || searchQuery) && (
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <span>Filtering:</span>
                {selectedCategory !== 'All' && (
                  <span className="px-2 py-0.5 rounded bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-0.5 rounded bg-bg-elevated text-text-secondary border border-border">
                    Query: "{searchQuery}"
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-accent-orange hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Articles List / Grid */}
            {displayedArticles.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-bg-card border border-border space-y-3">
                <p className="text-text-primary font-heading font-medium">No articles found</p>
                <p className="text-xs text-text-secondary max-w-sm mx-auto">
                  No articles matched your filter criteria. Try adjusting your search query or select another category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-accent-purple text-xs font-heading font-semibold text-white mt-2"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="p-5 sm:p-6 rounded-2xl bg-bg-card border border-border hover:border-accent-purple/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                  >
                    {/* Left: Thumbnail Preview */}
                    <div className="w-full md:w-56 shrink-0">
                      <VisualThumbnail type={article.visualType} className="h-36 sm:h-36" />
                    </div>

                    {/* Middle: Article Info */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="text-accent-purple font-semibold">
                          {article.category}
                        </span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted">{article.readingTime}</span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted">{article.publishedAt}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary group-hover:text-accent-purple transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 font-light">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {article.tags.slice(0, 3).map((tag, tidx) => (
                          <span
                            key={tidx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Action Arrow */}
                    <div className="shrink-0 flex items-center justify-end md:justify-center">
                      <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-text-muted group-hover:text-accent-purple group-hover:border-accent-purple/40 group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination / Load More */}
            {hasMore && (
              <div className="pt-6 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="px-8 py-3 rounded-xl bg-bg-card hover:bg-bg-elevated border border-border hover:border-accent-purple/40 text-text-primary font-heading font-medium text-xs sm:text-sm transition-all"
                >
                  Load More Articles ({filteredArticles.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

