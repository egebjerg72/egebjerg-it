import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostView from '../../../blog/[slug]/BlogPostView'
import { blogPosts, hasEnglishVersion } from '../../../../data/blogPosts'
import { absoluteUrl, siteConfig } from '../../../../lib/site'

const DANISH_LOCALE = 'da_DK'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((entry) => entry.slug === slug)
  if (!post) return {}

  const canonicalPath = `/da/blog/${post.slug}`
  const alternates = hasEnglishVersion(post)
    ? {
        da: canonicalPath,
        en: `/blog/${post.slug}`,
      }
    : {
        da: canonicalPath,
      }

  return {
    title: post.titleDa,
    description: post.excerptDa,
    alternates: {
      canonical: canonicalPath,
      languages: alternates,
    },
    openGraph: {
      type: 'article',
      locale: DANISH_LOCALE,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      title: post.titleDa,
      description: post.excerptDa,
      publishedTime: post.date,
      authors: [siteConfig.author],
      images: [siteConfig.blogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titleDa,
      description: post.excerptDa,
      images: [siteConfig.blogImage.url],
    },
  }
}

export default async function DanishBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((entry) => entry.slug === slug)
  if (!post) notFound()

  return (
    <BlogPostView
      post={post}
      displayLanguage="da"
      languageLinks={
        hasEnglishVersion(post)
          ? { da: `/da/blog/${post.slug}`, en: `/blog/${post.slug}` }
          : { da: `/da/blog/${post.slug}` }
      }
    />
  )
}
