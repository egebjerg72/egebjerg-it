'use client'

import Link from 'next/link'
import { useLanguage } from '../../../lib/i18n/context'
import type { BlogPost } from '../../../data/blogPosts'

export default function BlogPostView({ post }: { post: BlogPost }) {
  const { t, language } = useLanguage()

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'da' ? 'da-DK' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="group">
            <div className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-400">
              egebjerg.it
            </div>
            <div className="text-xs text-slate-400">{t.nav.tagline}</div>
          </Link>
          <Link
            href="/#blog"
            className="text-sm font-semibold text-slate-300 transition hover:text-blue-400"
          >
            {t.blogPost.allPosts}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">

        {/* Label */}
        <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
          {t.blogPost.label}
        </div>

        {/* Title */}
        <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span>{post.author}</span>
          <span className="text-slate-600">·</span>
          <span>{formattedDate}</span>
          <span className="text-slate-600">·</span>
          <span>{post.readingTime}</span>
        </div>

        <hr className="mb-10 border-slate-700" />

        {/* Blog body */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="mb-8 mt-12 border-slate-700" />

        {/* Footer nav */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#blog"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            {t.blogPost.backToAll}
          </Link>
          <a
            href="https://www.linkedin.com/in/egebjerg72/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
          >
            {t.blogPost.followLinkedIn}
          </a>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 lg:px-10">
          <div className="text-sm text-slate-400">{t.blogPost.copyright}</div>
          <a
            href="mailto:nh@egebjerg.it"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            nh@egebjerg.it
          </a>
        </div>
      </footer>

    </div>
  )
}
