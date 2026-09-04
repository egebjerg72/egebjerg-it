import type { MetadataRoute } from 'next'
import { blogPosts, hasEnglishVersion } from '../data/blogPosts'
import { absoluteUrl } from '../lib/site'

export const dynamic = 'force-static'

const latestBlogDate =
  blogPosts.length > 0
    ? blogPosts.reduce((latest, post) => (post.date > latest ? post.date : latest), blogPosts[0].date)
    : new Date().toISOString().slice(0, 10)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      lastModified: latestBlogDate,
      changeFrequency: 'weekly',
      priority: 1,
      images: [absoluteUrl('/about.jpg')],
    },
    ...blogPosts.flatMap((post) => {
      const danishEntry = {
        url: absoluteUrl(`/da/blog/${post.slug}`),
        lastModified: post.date,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        images: [absoluteUrl('/images/blog-ai-leadership.jpg')],
      }

      if (!hasEnglishVersion(post)) {
        return [danishEntry]
      }

      return [
        {
          url: absoluteUrl(`/blog/${post.slug}`),
          lastModified: post.date,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          images: [absoluteUrl('/images/blog-ai-leadership.jpg')],
        },
        danishEntry,
      ]
    }),
  ]
}
