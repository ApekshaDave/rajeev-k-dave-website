import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowUpDown, 
  ArrowRight
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
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-purple uppercase">
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

      {/* 2. MAIN BLOG ARCHIVE CONTAINER (OPEN EDITORIAL LAYOUT, NO BOXES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border-t border-border/40 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sidebar: Categories with Counts */}
          <div className="lg:col-span-3 space-y-3 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-border/40 text-xs font-mono text-text-muted uppercase tracking-wider">
              <span>Categories</span>
              <span>{articles.length} Posts</span>
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
                      setVisibleCount(6);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-heading transition-all ${
                      isSelected
                        ? 'text-accent-purple font-semibold border-l-2 border-accent-purple pl-2'
                        : 'text-text-secondary hover:text-text-primary'
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

          {/* Right Main Area: Search, Sort, and Clean Editorial List */}
          <div className="lg:col-span-9 space-y-8">
            {/* Search & Sort Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-border/30">
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
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent border border-border/60 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
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
                  className="bg-transparent border border-border/60 text-xs font-mono text-text-secondary rounded-full px-3 py-1.5 focus:outline-none focus:border-accent-purple/60 cursor-pointer"
                >
                  <option value="latest" className="bg-bg-primary">Latest First</option>
                  <option value="oldest" className="bg-bg-primary">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'All' || searchQuery) && (
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <span>Filtering:</span>
                {selectedCategory !== 'All' && (
                  <span className="px-2 py-0.5 rounded text-accent-purple border border-accent-purple/30">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-0.5 rounded text-text-secondary border border-border/40">
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

            {/* Articles List (Clean Editorial Rows, No Boxes) */}
            {displayedArticles.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="text-text-primary font-heading font-medium">No articles found</p>
                <p className="text-xs text-text-secondary max-w-sm mx-auto font-light">
                  No articles matched your filter criteria. Try adjusting your search query or select another category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-full bg-accent-purple text-xs font-heading font-semibold text-white mt-2"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {displayedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-border/30 last:border-none transition-colors"
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
                            className="text-[10px] font-mono text-text-muted"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Action Arrow */}
                    <div className="shrink-0 flex items-center justify-end md:justify-center">
                      <div className="text-text-muted group-hover:text-accent-purple group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-5 h-5" />
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
                  className="px-8 py-3 rounded-full text-text-primary hover:text-white font-heading font-medium text-xs sm:text-sm border border-border/60 hover:border-accent-purple/50 transition-all"
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
