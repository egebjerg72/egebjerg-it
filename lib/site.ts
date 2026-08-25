export const siteConfig = {
  name: 'egebjerg.it',
  title: 'Niels Henrik Egebjerg — IT Leader & Advisor',
  description:
    'Personal website of Niels Henrik Egebjerg, CIO, writer, and technology leader focused on digital transformation, enterprise platforms, automation, and AI adoption.',
  url: 'https://egebjerg.it',
  author: 'Niels Henrik Egebjerg',
  locale: 'en_GB',
  keywords: [
    'Niels Henrik Egebjerg',
    'CIO',
    'digital transformation',
    'AI adoption',
    'enterprise platforms',
    'technology leadership',
    'board advisory',
    'organizational change',
  ],
  linkedin: 'https://www.linkedin.com/in/egebjerg72/',
  ogImage: {
    url: '/about.jpg',
    width: 1024,
    height: 1024,
    alt: 'Niels Henrik Egebjerg',
  },
  blogImage: {
    url: '/images/blog-ai-leadership.jpg',
    width: 811,
    height: 762,
    alt: 'AI Leadership and Digital Transformation — Niels Henrik Egebjerg',
  },
} as const

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.url}/`).toString()
}
