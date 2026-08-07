'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { blogPosts } from '../data/blogPosts'
import profileImage from '../public/profile.jpg'
import aboutImage from '../public/about.jpg'
import hiking1Image from '../public/gallery/hiking-1.jpg'
import hiking2Image from '../public/gallery/hiking-2.jpg'
import hiking3Image from '../public/gallery/hiking-3.jpg'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ image: StaticImageData; alt: string } | null>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const boardContributions = [
      {
      icon: '🔄',
      title: 'Digital Transformation',
      text: 'Hands-on experience steering organisations through structural IT transitions, ERP rollouts, and large-scale digitisation programmes.',
    }, 
    {
      icon: '🤝',
      title: 'Organizational Change',
      text: 'Advising on the human side of technology — change management, capability building, and aligning people with new processes.',
    },
    {
      icon: '🧭',
      title: 'Solution Architecture',
      text: 'Translating complex IT landscapes into strategic direction — bridging the gap between technology and business outcomes.',
    },

    {
      icon: '🔒',
      title: 'Digital Risk & Cybersecurity',
      text: 'Bringing structured awareness of digital risk, data governance, and cyber resilience to board-level conversations and decisions.',
    },
  
    {
      icon: '💡',
      title: 'IT Investment Oversight',
      text: 'Challenging and qualifying IT budgets, vendor choices, and ROI expectations — grounded in real execution experience as a CIO.',
    },
   
    {
      icon: '📊',
      title: 'Governance & Performance',
      text: 'Support establishing meaningful KPIs, IT governance structures, and transparent reporting.',
    },
  ]

  const galleryImages = [
    { image: hiking1Image, alt: 'Pulpit Rock' },
    { image: hiking2Image, alt: 'The Trolls Tongue' },
    { image: hiking3Image, alt: 'Peaceful morning coffee' },
  ]

  return (
    <div id="top" className="min-h-screen bg-slate-900 text-slate-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">egebjerg.it</div>
            <div className="text-xs text-slate-400">CIO · Digital Transformation · AI</div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
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
          <div className="border-t border-slate-700 bg-slate-800 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
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
        <section className="relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-700 blur-3xl" />
            <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-700 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-28">

            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <div className="mb-5 inline-flex self-start items-center gap-2 rounded-full border border-slate-600 bg-slate-700/80 px-4 py-2 text-sm text-slate-200 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                From coding to leading transformation
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Niels Henrik Egebjerg
              </h1>

              <div className="mb-8 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  CIO close to technology, grounded in delivery, and focused on outcomes that matter to
                  the business.
                </p>
                <p>
                  I have led transformation from strategy through execution, including organisational change, governance,
                  and adoption across the enterprise, implementing modern cloud technology and processes ensuring a strong data foundation.
                </p>
                <p>
                  Now I am focused on embedding AI into real business processes in ways
                  that are governed, measurable, and changes how the organisation works and decides.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href="#board"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
                >
                  What I bring to the board
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-slate-600 bg-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 shadow-sm transition hover:border-blue-600 hover:text-blue-400"
                >
                  About me
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — Executive Profile card */}
            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-slate-700 bg-slate-800/80 p-6 shadow-xl shadow-black/40 backdrop-blur-xl">
                <div className="mb-5 flex justify-center">
                  <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-slate-600 shadow-lg">
                    <Image
                      src={profileImage}
                      alt="Niels Henrik Egebjerg"
                      fill
                      sizes="144px"
                      placeholder="blur"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-100">Executive Profile</div>
                    <div className="text-sm text-slate-400">Positioning highlights</div>
                  </div>
                  <div className="rounded-full bg-emerald-900/50 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Execution-first
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Enterprise leadership with human depth',
                    'Applies AI in real operations',
                    'Builds sustainable platforms and processes',
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3 rounded-2xl bg-slate-700/60 p-4">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
                      <p className="text-sm leading-6 text-slate-200">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

       {/* ── ABOUT ── */}
<section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
  <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">

    {/* LEFT — label, heading, experience headline, photo */}
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
          About
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Hands-on leadership, grounded in 25 years of doing the work
        </h2>
      </div>

      {/* Portrait */}
      <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-800 shadow-xl shadow-black/40">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={aboutImage}
            alt="Niels Henrik Egebjerg"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            placeholder="blur"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-4">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-slate-200">Niels Henrik Egebjerg · CIO</span>
        </div>
      </div>
    </div>

    {/* RIGHT — text content */}
<div className="flex flex-col justify-center space-y-5 text-lg leading-8 text-slate-300">

  <h3 className="text-2xl font-bold tracking-tight text-white">
    Experience
  </h3>

  <p>
    Technology is only as good as the people and processes around it. That is the lesson 25 years in IT teaches you — especially when you have been close to both sides: building the systems and working alongside the teams that depend on them.
</p>
<p>
I hold a Master&apos;s degree in IT, and my academic foundation shapes the way I structure problems, assess risk, and think in systems. I have worked across ERP and CRM, e-commerce, systems administration, security, and compliance — in internationally active businesses, always close to the decisions. I have rarely had the luxury of big teams or big budgets — which means I solve problems with clarity, structure, and resourcefulness. Today, at C-level, that is still exactly how I work.</p>

  {/* Emotional Intelligence */}
  <div className="pt-2">
    <h4 className="mb-4 text-xl font-semibold text-white">
      Emotional intelligence
    </h4>

    <p className="leading-relaxed text-slate-300">
      On the leadership side, I work deliberately with emotional intelligence —
      and that starts with self-awareness. Knowing your own triggers, blind spots,
      and default reactions is the foundation.
      Then focusing on the people around you — their motivations,
      concerns and ways of working.
</p>
    <p className="mt-4 leading-relaxed text-slate-300">
      You need to read the room, build genuine trust, and understand
      what each person needs to move forward.
    </p>
  </div>

  <p className="font-medium text-slate-200">
    Transformation programmes do not fail because of technology — they fail because of people.
    And you cannot bring people with you if you do not know yourself, and if you do not know them.
  </p>

</div>
  </div>
</section>

        {/* BOARD CONTRIBUTIONS */}
        <section id="board" className="bg-slate-800 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  Board / Advisory Board
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  What I bring to the board table
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {boardContributions.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-slate-700 bg-gradient-to-b from-slate-700 to-slate-800 p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Latest writing
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  CIO thoughts
                </h2>
              </div>
              <a href="#contact" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Let&apos;s connect →
              </a>
            </div>

            {/* Authenticity note */}
            <div className="mb-12 flex items-start gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4">
              <span className="mt-0.5 text-base">✍️</span>
              <p className="text-sm leading-7 text-slate-300">
                All posts are written from my own experience —{' '}
                <span className="font-semibold text-slate-100">no ghostwriters, no AI generation.</span>
              </p>
            </div>

            {blogPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-[1.75rem] border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-800/60 p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-black/30"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold leading-snug text-white transition group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-7 text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                      Read post →
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-700 bg-slate-800/50 px-8 py-20 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-700 text-2xl">
                  📝
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  First posts are on their way
                </h3>
                <p className="max-w-md text-sm leading-7 text-slate-400">
                  I am working on the first articles right now. Check back soon — or connect on LinkedIn
                  to be notified when they go live.
                </p>
                <a
                  href="https://www.linkedin.com/in/egebjerg72/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-2xl border border-slate-600 bg-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-600 hover:text-blue-400"
                >
                  Follow on LinkedIn →
                </a>
              </div>
            )}

          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-slate-800 py-20">
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
                .filter((img) => !failedImages.has(img.image.src))
                .map((img) => (
                  <button
                    key={img.image.src}
                    onClick={() => setLightbox(img)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-700 bg-slate-700 shadow-sm transition hover:border-slate-500 hover:shadow-xl hover:shadow-black/40 focus:outline-none"
                  >
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      onError={() => setFailedImages((prev) => new Set([...prev, img.image.src]))}
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
        <section className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-emerald-500 p-[1px] shadow-xl shadow-blue-900/30">
              <div className="rounded-[2rem] bg-slate-800 px-8 py-10 md:px-12 md:py-12">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="mb-3 inline-block rounded-full bg-blue-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                      Perspective
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                      Technology only matters when it changes how we work and decide
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                      My focus is not technology for its own sake, but how platforms, AI and operating
                      models can support better execution, stronger leadership and practical business
                      value.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#contact"
                      className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
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
      <footer id="contact" className="border-t border-slate-700 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <div className="text-lg font-semibold text-white">Niels Henrik Egebjerg</div>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
              CIO · egebjerg.it
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-400">
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
            className="absolute right-5 top-5 z-10 rounded-full bg-slate-700 p-2 text-slate-300 transition hover:bg-slate-600 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="flex max-h-[90vh] max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.alt}
              width={lightbox.image.width}
              height={lightbox.image.height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              placeholder="blur"
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-2xl"
            />
            <p className="mt-4 text-sm font-medium text-slate-300">{lightbox.alt}</p>
          </div>
        </div>
      )}

    </div>
  )
}