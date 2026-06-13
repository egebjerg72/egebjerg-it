export default function Page() {
  const posts = [
    {
      title: "AI Is Changing the Operating Model of Leadership",
      date: "12 June 2026",
      excerpt:
        "AI is no longer only about productivity. It is becoming part of how leaders shape decision-making, execution, and organisational learning.",
      category: "AI & Leadership",
    },
    {
      title: "Why ERP Modernisation Is a Leadership Discipline",
      date: "05 June 2026",
      excerpt:
        "ERP programmes succeed when leaders balance architecture, process clarity, and sustained business adoption—not just technology choices.",
      category: "Digital Transformation",
    },
    {
      title: "From Automation to Augmentation",
      date: "28 May 2026",
      excerpt:
        "The strongest use cases for AI are not replacing people, but helping skilled teams move faster, think better, and execute with higher quality.",
      category: "Strategy",
    },
  ];

  const focusAreas = [
    {
      title: "Digital Transformation",
      text: "Leading modernisation of business platforms, processes, and operating models with a practical execution mindset.",
    },
    {
      title: "AI & Copilot Adoption",
      text: "Turning AI from curiosity into measurable business value through adoption, governance, and specialised use cases.",
    },
    {
      title: "Enterprise Platforms",
      text: "Working across ERP, collaboration, automation, and data to create a coherent and future-ready digital landscape.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">egebjerg.it</div>
            <div className="text-xs text-slate-500">CIO · Digital Transformation · AI</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-blue-600">About</a>
            <a href="#focus" className="transition hover:text-blue-600">Focus</a>
            <a href="#blog" className="transition hover:text-blue-600">Blog</a>
            <a href="#contact" className="transition hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
            <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-200 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Modern leadership, AI and digital execution
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Niels Henrik Egebjerg
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                CIO focused on digital transformation, enterprise platforms, automation, and AI adoption.
                I share perspectives on leadership, ERP, Copilot, and how technology shapes the future way of working.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#blog"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  Explore the blog
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  About me
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Leadership", value: "CIO perspective" },
                  { label: "Focus", value: "AI & transformation" },
                  { label: "Platform", value: "ERP · M365 · Automation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-sm font-medium text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Executive Profile</div>
                    <div className="text-sm text-slate-500">Positioning highlights</div>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Growth mindset
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Enterprise leadership grounded in business value",
                    "AI adoption with practical governance and execution",
                    "Strong interest in modern platforms, automation and scalable change",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
                      <p className="text-sm leading-6 text-slate-700">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                About
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Building modern digital capabilities with a practical leadership style
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I work at the intersection of leadership, technology, and business execution. My focus is on creating environments where enterprise systems, automation, and AI support better decision-making and stronger operational performance.
              </p>
              <p>
                This site is a place to share perspectives on CIO leadership, digital transformation, ERP, Copilot, automation, and the future of work. It is intended as both a professional profile and a platform for ongoing reflection.
              </p>
            </div>
          </div>
        </section>

        <section id="focus" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Focus areas
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Themes that define my work and writing
                </h2>
              </div>
              <p className="max-w-2xl text-slate-600">
                A mix of strategy, execution, and continuous improvement across enterprise technology and leadership.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-lg font-bold text-white">
                    {area.title.charAt(0)}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{area.title}</h3>
                  <p className="leading-7 text-slate-600">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Latest writing
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Thoughts on AI, leadership and digital transformation
                </h2>
              </div>
              <a href="#contact" className="text-sm font-semibold text-blue-700 transition hover:text-blue-800">
                Let’s connect →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {post.category}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold leading-8 text-slate-900">{post.title}</h3>
                  <p className="mb-6 leading-7 text-slate-600">{post.excerpt}</p>
                  <a href="#" className="text-sm font-semibold text-blue-700 transition hover:text-blue-800">
                    Read article →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-emerald-500 p-[1px] shadow-xl shadow-blue-100">
              <div className="rounded-[2rem] bg-white px-8 py-10 md:px-12 md:py-12">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                      Perspective
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                      Technology only matters when it changes how we work and decide
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                      My focus is not technology for its own sake, but how platforms, AI and operating models can support better execution, stronger leadership and practical business value.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#contact"
                      className="inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <div className="text-lg font-semibold text-slate-900">Niels Henrik Egebjerg</div>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              CIO | Digital transformation | AI adoption | Enterprise platforms
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-600">
            <a href="https://www.linkedin.com/" className="transition hover:text-blue-700">LinkedIn</a>
            <a href="mailto:hello@egebjerg.it" className="transition hover:text-blue-700">hello@egebjerg.it</a>
            <a href="#top" className="transition hover:text-blue-700">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
