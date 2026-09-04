import { blogPosts, hasEnglishVersion } from '../../../data/blogPosts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogPostView from './BlogPostView'
import { absoluteUrl, siteConfig } from '../../../lib/site'

export function generateStaticParams() {
  return blogPosts.filter(hasEnglishVersion).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post || !hasEnglishVersion(post)) return {}

  const canonicalPath = `/blog/${post.slug}`
  const danishPath = `/da/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
      languages: {
        da: danishPath,
        en: canonicalPath,
      },
    },
    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.author],
      images: [siteConfig.blogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [siteConfig.blogImage.url],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post || !hasEnglishVersion(post)) notFound()

  return (
    <BlogPostView
      post={post}
      displayLanguage="en"
      languageLinks={{ en: `/blog/${post.slug}`, da: `/da/blog/${post.slug}` }}
    />
  )
}