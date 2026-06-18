'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const boardContributions = [
    {
      icon: '🧭',
      title: 'Technology Strategy',
      text: 'Translating complex IT landscapes into strategic direction — bridging the gap between technology and business outcomes at board level.',
    },
    {
      icon: '🔒',
      title: 'Digital Risk & Cybersecurity',
      text: 'Bringing structured awareness of digital risk, data governance, and cyber resilience to board-level conversations and decisions.',
    },
    {
      icon: '🔄',
      title: 'Digital Transformation',
      text: 'Hands-on experience steering organisations through structural IT transitions, ERP rollouts, and large-scale digitisation programmes.',
    },
    {
      icon: '💡',
      title: 'IT Investment Oversight',
      text: 'Challenging and qualifying IT budgets, vendor choices, and ROI expectations — grounded in real execution experience as a CIO.',
    },
    {
      icon: '🤝',
      title: 'Organisational Change',
      text: 'Advising on the human side of technology — change management, capability building, and aligning people with new digital operating models.',
    },
    {
      icon: '📊',
      title: 'Governance & Performance',
      text: 'Supporting boards in establishing meaningful KPIs, IT governance structures, and transparent reporting on technology investments.',
    },
  ]

  // ── ADD YOUR PHOTOS HERE ──────────────────────────────────
  // Drop images in /public/gallery/ and add a line below.
  const galleryImages = [
    { src: '/gallery/hiking-1.jpg', alt: 'Pulpit Rock' },
    { src: '/gallery/hiking-2.jpg', alt: 'The Trolls Tongue' },
    { src: '/gallery/hiking-3.jpg', alt: 'Morning coffee' },
  ]
  // ─────────────────────────────────────────────────────────

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">egebjerg.it</div>
            <div className="text-xs text-slate-500">CIO · Digital Transformation · AI</div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm font-medium text-slate-400 md:flex">
            <a href="#about"   className="transition hover:text-blue-400">About</a>
            <a href="#board"   className="transition hover:text-blue-400">Board</a>
            <a href="#blog"    className="transition hover:text-blue-400">Blog</a>
            <a href="#gallery" className="transition hover:text-blue-400">Gallery</a>
            <a href="#contact" className="transition hover:text-blue-400">Contact</a>
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
          <div className="border-t border-slate-800 bg-slate-900 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-300">
              <a href="#about"   onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">About</a>
              <a href="#board"   onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">Board</a>
              <a href="#blog"    onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">Blog</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">Gallery</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="transition hover:text-blue-400">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-700 blur-3xl" />
            <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-700 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-28">
            <div className="max-w-3xl flex flex-col">
              <div className="mb-5 inline-flex self-start items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm text-slate-300 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Modern leadership, AI and digital execution
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Niels Henrik Egebjerg
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                CIO focused on digital transformation, enterprise platforms, automation, and AI adoption.
                I share perspectives on leadership, ERP, AI, and how technology shapes the future way of working.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#blog" className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500">
                  Explore the blog
                </a>
                <a href="#about" className="rounded-2xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-300 shadow-sm transition hover:border-blue-600 hover:text-blue-400">
                  About me
                </a>
              </div>

              <div className="mt-auto pt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Leadership', value: 'CIO perspective' },
                  { label: 'Focus',      value: 'AI & transformation' },
                  { label: 'Approach',   value: 'Adopt · Govern · Scale' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm backdrop-blur">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-sm font-medium text-slate-200">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/40 backdrop-blur-xl">
                <div className="mb-5 flex justify-center">
                  <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-slate-700 shadow-lg">
                    <Image
                      src="/profile.jpg"
                      alt="Niels Henrik Egebjerg"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-100">Executive Profile</div>
                    <div className="text-sm text-slate-500">Positioning highlights</div>
                  </div>
                  <div className="rounded-full bg-emerald-900/50 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Execution-first
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Enterprise leadership grounded in business value',
                    'AI adoption with practical governance and execution',
                    'Strong interest in modern platforms, automation and scalable change',
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3 rounded-2xl bg-slate-800/60 p-4">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
                      <p className="text-sm leading-6 text-slate-300">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                About
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Building modern digital capabilities with a practical leadership style
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I work at the intersection of leadership, technology, and business execution. My focus is on creating
                environments where enterprise systems, automation, and AI support better decision-making and stronger
                operational performance.
              </p>
              <p>
                This site is a place to share perspectives on CIO leadership, digital transformation, ERP, AI,
                automation, and the future of work. It is intended as both a professional profile and a platform for
                ongoing reflection.
              </p>
            </div>
          </div>
        </section>

        {/* BOARD CONTRIBUTIONS */}
        <section id="board" className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  Board & Advisory Boards
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  What I bring to the board table
                </h2>
              </div>
              <p className="max-w-sm text-slate-400">
                As a CIO with 10+ years across industries, I contribute with strategic
                clarity on technology — where it creates value, where it carries risk,
                and how to govern it well.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {boardContributions.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-slate-800 bg-gradient-to-b from-slate-800 to-slate-900 p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section header */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Latest writing
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Thoughts on AI, leadership and digital transformation
                </h2>
              </div>
              <a href="#contact" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Let&apos;s connect →
              </a>
            </div>

            {/* Authenticity note */}
            <div className="mb-12 flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
              <span className="mt-0.5 text-base">✍️</span>
              <p className="text-sm leading-7 text-slate-400">
                All posts are written from my own experience —{' '}
                <span className="font-semibold text-slate-300">no ghostwriters, no AI generation.</span>
              </p>
            </div>

            {/* Empty state */}
            <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-800 bg-slate-900/50 px-8 py-20 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-2xl">
                📝
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                First posts are on their way
              </h3>
              <p className="max-w-md text-sm leading-7 text-slate-500">
                I am working on the first articles right now. Check back soon — or connect on LinkedIn to be notified when they go live.
              </p>
              <a
                href="https://www.linkedin.com/in/egebjerg72/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-2xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-600 hover:text-blue-400"
              >
                Follow on LinkedIn →
              </a>
            </div>

          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mb-10">
              <div className="mb-4 inline-block rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                Outside the office
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                The trails that reset the thinking
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages
                .filter((img) => !failedImages.has(img.src))
                .map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setLightbox(img)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-800 shadow-sm transition hover:border-slate-600 hover:shadow-xl hover:shadow-black/40 focus:outline-none"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      onError={() => setFailedImages((prev) => new Set([...prev, img.src]))}
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="p-5">
                        <p className="text-sm font-medium text-white">{img.alt}</p>
                      </div>
                    </div>
                  </button>
                ))}
            </div>

          </div>
        </section>

        {/* PERSPECTIVE BANNER */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-emerald-500 p-[1px] shadow-xl shadow-blue-900/30">
              <div className="rounded-[2rem] bg-slate-900 px-8 py-10 md:px-12 md:py-12">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="mb-3 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                      Perspective
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                      Technology only matters when it changes how we work and decide
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                      My focus is not technology for its own sake, but how platforms, AI and operating models can
                      support better execution, stronger leadership and practical business value.
                    </p>
                  </div>
                  <div>
                    <a href="#contact" className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <div className="text-lg font-semibold text-white">Niels Henrik Egebjerg</div>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
              CIO | Digital transformation | AI adoption | Enterprise platforms
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-500">
            <a
              href="https://www.linkedin.com/in/egebjerg72/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a href="mailto:nh@egebjerg.it" className="transition hover:text-blue-400">
              nh@egebjerg.it
            </a>
            <a href="#top" className="transition hover:text-blue-400">
              Back to top
            </a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="flex max-h-[90vh] max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-2xl"
            />
            <p className="mt-4 text-sm font-medium text-slate-300">{lightbox.alt}</p>
          </div>
        </div>
      )}

    </div>
  )
}