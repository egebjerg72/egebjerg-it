'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../../../lib/i18n/context'
import LanguageSwitcher from '../../../components/LanguageSwitcher'
import type { BlogPost } from '../../../data/blogPosts'

export default function BlogPostView({ post }: { post: BlogPost }) {
  const { t, language } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)

  const title = language === 'da' ? post.titleDa : post.title
  const content = language === 'da' ? post.contentDa : post.content
  const readingTime = language === 'da' ? post.readingTimeDa : post.readingTime

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'da' ? 'da-DK' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">

      {/* HEADER — same as homepage */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="group">
            <div className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-400">
              egebjerg.it
            </div>
            <div className="text-xs text-slate-400">{t.nav.tagline}</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex items-center">
            <Link href="/#about"   className="transition hover:text-blue-400">{t.nav.about}</Link>
            <Link href="/#board"   className="transition hover:text-blue-400">{t.nav.board}</Link>
            <Link href="/#blog"    className="transition hover:text-blue-400">{t.nav.blog}</Link>
            <Link href="/#gallery" className="transition hover:text-blue-400">{t.nav.gallery}</Link>
            <button onClick={() => setConnectOpen(true)} className="bg-transparent p-0 leading-none transition hover:text-blue-400">{t.nav.contact}</button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center gap-1.5 md:hidden"
          >
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="border-t border-slate-700 bg-slate-800 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
              <Link href="/#about"   onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">{t.nav.about}</Link>
              <Link href="/#board"   onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">{t.nav.board}</Link>
              <Link href="/#blog"    onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">{t.nav.blog}</Link>
              <Link href="/#gallery" onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">{t.nav.gallery}</Link>
              <button onClick={() => { setMenuOpen(false); setConnectOpen(true) }} className="text-left transition hover:text-blue-400">{t.nav.contact}</button>
              <div className="pt-1"><LanguageSwitcher /></div>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">

        {/* Label */}
        <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
          {t.blogPost.label}
        </div>

        {/* Title */}
        <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          {title}
        </h1>

        {/* Meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span>{post.author}</span>
          <span className="text-slate-600">·</span>
          <span>{formattedDate}</span>
          <span className="text-slate-600">·</span>
          <span>{readingTime}</span>
        </div>

        <hr className="mb-10 border-slate-700" />

        {/* Blog body */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
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

      {/* CONNECT MODAL */}
      {connectOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.connect.heading}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onKeyDown={(e) => e.key === 'Escape' && setConnectOpen(false)}
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setConnectOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg rounded-[2rem] border border-slate-700/60 bg-slate-900/95 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl md:p-10">
            <button
              onClick={() => setConnectOpen(false)}
              aria-label={t.connect.close}
              className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-700 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {t.connect.heading}
            </h2>
            <p className="mb-8 leading-8 text-slate-300">
              {t.connect.body}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:nh@egebjerg.it"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                {t.connect.email}
              </a>
              <a
                href="https://www.linkedin.com/in/egebjerg72/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-slate-600 bg-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                {t.connect.linkedin}
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-500">
              {t.connect.disclaimer}
            </p>
          </div>
        </div>
      )}

    </div>
  )
}
