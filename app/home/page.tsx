import type { Metadata } from 'next'
import HomePage from '../HomePage'

export const metadata: Metadata = {
  title: 'Niels Henrik Egebjerg — IT Leader & Advisor',
  description:
    'Digital transformation, leadership, board contributions and blog posts by Niels Henrik Egebjerg.',
}

export default function Page() {
  return <HomePage />
}
