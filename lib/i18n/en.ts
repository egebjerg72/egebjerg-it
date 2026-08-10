export type Translations = {
  nav: {
    tagline: string; about: string; board: string; blog: string; gallery: string; contact: string
  }
  hero: {
    badge: string; name: string; p1: string; p2: string; p3: string
    ctaBoard: string; ctaAbout: string
    profileCardTitle: string; profileCardSub: string; profileBadge: string
    profileLines: readonly string[]
  }
  about: {
    label: string; heading: string; experienceHeading: string
    p1: string; p2: string; eqHeading: string; eqP1: string; eqP2: string; closing: string
  }
  board: {
    label: string; heading: string
    items: readonly { icon: string; title: string; text: string }[]
  }
  blog: {
    label: string; heading: string; connect: string
    authenticityNote: string; authenticityBold: string
    readPost: string; emptyHeading: string; emptyBody: string
    followLinkedIn: string; minRead: string
  }
  gallery: {
    label: string; heading: string
    altNorthCape: string; altReinebringen: string
    altPulpitRock: string; altTrollsTongue: string; altCoffee: string
  }
  perspective: { label: string; heading: string; body: string; cta: string }
  footer: { role: string; backToTop: string }
  blogPost: {
    label: string; allPosts: string; backToAll: string
    followLinkedIn: string; copyright: string
  }
}

const en: Translations = {
  // ── Header / Nav ────────────────────────────────────────────
  nav: {
    tagline: 'CIO · Digital Transformation · AI',
    about: 'About',
    board: 'Board',
    blog: 'Blog',
    gallery: 'Gallery',
    contact: 'Contact',
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    badge: 'From coding to leading transformation',
    name: 'Niels Henrik Egebjerg',
    p1: 'CIO close to technology, grounded in delivery, and focused on outcomes that matter to the business.',
    p2: 'I have led transformation from strategy through execution, including organisational change, governance, and adoption across the enterprise, implementing modern cloud technology and processes ensuring a strong data foundation.',
    p3: 'Now I am focused on embedding AI into real business processes in ways that are governed, measurable, and changes how the organisation works and decides.',
    ctaBoard: 'What I bring to the board',
    ctaAbout: 'About me',
    profileCardTitle: 'Executive Profile',
    profileCardSub: 'Positioning highlights',
    profileBadge: 'Execution-first',
    profileLines: [
      'Enterprise leadership with human depth',
      'Applies AI in real operations',
      'Builds sustainable platforms and processes',
    ],
  },

  // ── About ───────────────────────────────────────────────────
  about: {
    label: 'About',
    heading: 'Hands-on leadership, grounded in 25 years of doing the work',
    experienceHeading: 'Experience',
    p1: 'Technology is only as good as the people and processes around it. That is the lesson 25 years in IT teaches you — especially when you have been close to both sides: building the systems and working alongside the teams that depend on them.',
    p2: 'I hold a Master\u2019s degree in IT, and my academic foundation shapes the way I structure problems, assess risk, and think in systems. I have worked across ERP and CRM, e-commerce, systems administration, security, and compliance — in internationally active businesses, always close to the decisions. I have rarely had the luxury of big teams or big budgets — which means I solve problems with clarity, structure, and resourcefulness. Today, at C-level, that is still exactly how I work.',
    eqHeading: 'Emotional intelligence',
    eqP1: 'On the leadership side, I work deliberately with emotional intelligence — and that starts with self-awareness. Knowing your own triggers, blind spots, and default reactions is the foundation. Then focusing on the people around you — their motivations, concerns and ways of working.',
    eqP2: 'You need to read the room, build genuine trust, and understand what each person needs to move forward.',
    closing: 'Transformation programmes do not fail because of technology — they fail because of people. And you cannot bring people with you if you do not know yourself, and if you do not know them.',
  },

  // ── Board ───────────────────────────────────────────────────
  board: {
    label: 'Board / Advisory Board',
    heading: 'What I bring to the board table',
    items: [
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
    ],
  },

  // ── Blog ────────────────────────────────────────────────────
  blog: {
    label: 'Latest writing',
    heading: 'CIO thoughts',
    connect: "Let's connect →",
    authenticityNote: 'All posts are written from my own experience —',
    authenticityBold: 'no ghostwriters, no AI generation.',
    readPost: 'Read post →',
    emptyHeading: 'First posts are on their way',
    emptyBody: 'I am working on the first articles right now. Check back soon — or connect on LinkedIn to be notified when they go live.',
    followLinkedIn: 'Follow on LinkedIn →',
    minRead: 'min read',
  },

  // ── Gallery ─────────────────────────────────────────────────
  gallery: {
    label: 'Outside the office',
    heading: 'The trails that reset the thinking',
    altNorthCape: 'Reinebringen, Lofoten',
    altReinebringen: 'North Cape, Norway',
    altPulpitRock: 'Pulpit Rock',
    altTrollsTongue: 'The Trolls Tongue',
    altCoffee: 'Peaceful morning coffee',
  },

  // ── Perspective banner ──────────────────────────────────────
  perspective: {
    label: 'Perspective',
    heading: 'Technology only matters when it changes how we work and decide',
    body: 'My focus is not technology for its own sake, but how platforms, AI and operating models can support better execution, stronger leadership and practical business value.',
    cta: 'Get in touch',
  },

  // ── Footer / Contact ────────────────────────────────────────
  footer: {
    role: 'CIO · egebjerg.it',
    backToTop: 'Back to top',
  },

  // ── Blog post detail ────────────────────────────────────────
  blogPost: {
    label: 'Blog',
    allPosts: '← All posts',
    backToAll: '← Back to all posts',
    followLinkedIn: 'Follow on LinkedIn →',
    copyright: '© 2026 Niels Henrik Egebjerg',
  },
} as const

export default en
