import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Niels Henrik Egebjerg — IT Leader & Advisor',
  description: 'CIO focused on digital transformation, enterprise platforms, automation, and AI adoption.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}