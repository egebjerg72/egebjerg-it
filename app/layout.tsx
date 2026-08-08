import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../lib/i18n/context'

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
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  )
}