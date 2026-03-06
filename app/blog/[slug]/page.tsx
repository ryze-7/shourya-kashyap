import { use } from 'react'
import { Navbar } from '@/components/navbar'
import { getPostBySlug } from '@/src/data/blogs'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-mono">post not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </div>
            <div>By {post.author}</div>
          </div>
        </header>

        {/* Content */}
        <div className="mb-12">
          <div
            className="space-y-4 text-sm leading-7"
            style={{ color: 'var(--fg-muted)' }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<h2>/g, '<h2 style="font-size:1.25rem;font-weight:700;color:inherit;margin-top:2.5rem;margin-bottom:0.75rem;">')
                .replace(/<h3>/g, '<h3 style="font-size:1rem;font-weight:600;color:inherit;margin-top:1.5rem;margin-bottom:0.5rem;">')
                .replace(/<p>/g, '<p style="margin-bottom:1rem;line-height:1.8;font-size:0.9rem;">')
                .replace(/<ul>/g, '<ul style="list-style:disc;padding-left:1.5rem;margin-bottom:1rem;">')
                .replace(/<li>/g, '<li style="margin-bottom:0.4rem;font-size:0.9rem;line-height:1.7;">')
                .replace(/<code>/g, '<code style="background:var(--muted);border:1px solid var(--border);padding:0.1rem 0.4rem;border-radius:3px;font-size:0.8rem;color:var(--accent);">')
                .replace(/<pre>/g, '<pre style="background:var(--muted);border:1px solid var(--border);padding:1rem;border-radius:4px;overflow-x:auto;margin-bottom:1rem;font-size:0.8rem;">')
                .replace(/<strong>/g, '<strong style="font-weight:600;">')
            }}
          />
        </div>

        {/* More Articles */}
        <section className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-emerald-400 transition-colors font-medium"
          >
            ← Back to all articles
          </Link>
        </section>
      </article>
    </div>
  )
}