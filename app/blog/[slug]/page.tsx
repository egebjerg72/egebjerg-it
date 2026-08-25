import { blogPosts } from '../../../data/blogPosts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogPostView from './BlogPostView'
import { absoluteUrl, siteConfig } from '../../../lib/site'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const canonicalPath = `/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
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
  if (!post) notFound()

  return <BlogPostView post={post} />
}