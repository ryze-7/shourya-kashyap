'use client'

import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/src/data/blogs'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts, articles, and insights about web development, technology, and my learning journey. 
            New posts published regularly.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 bg-card border border-accent/30 rounded-lg overflow-hidden hover:border-accent transition-colors group">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded">Featured</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              {blogPosts[2].title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              {blogPosts[2].description}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {blogPosts[2].date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {blogPosts[2].readTime} read
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPosts[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-background border border-accent/30 text-accent rounded hover:border-accent transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${blogPosts[2].slug}`}
              className="inline-flex items-center gap-2 text-accent hover:text-emerald-400 transition-colors font-medium"
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* All Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-background border border-accent/30 text-accent rounded hover:border-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} read
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 pt-12 border-t border-border">
          {/* <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Subscribe to My Newsletter</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get notified when I publish new articles and insights about web development and tech.
            </p>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-accent-foreground rounded font-medium hover:bg-emerald-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  )
}
