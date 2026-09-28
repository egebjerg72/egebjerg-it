import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostView from './blog/[slug]/BlogPostView'
import { blogPosts } from '../data/blogPosts'

const campaignSlug = 'jeg-stiller-op-til-energi-fyn-valget'

export const metadata: Metadata = {
  title: 'Jeg stiller op til Energi Fyn-valget',
  description:
    'Kort kandidatpræsentation for Niels Henrik Egebjerg til repræsentantskabet i Energi Fyn.',
}

export default function Page() {
  const campaignPost = blogPosts.find((post) => post.slug === campaignSlug)

  if (!campaignPost) {
    notFound()
  }

  return (
    <BlogPostView
      post={campaignPost}
      displayLanguage="da"
      languageLinks={{ da: '/', en: '/' }}
      backHref="/home#blog"
    />
  )
}
