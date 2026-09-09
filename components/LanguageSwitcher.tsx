'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../lib/i18n/context'

type Language = 'en' | 'da'

interface LanguageSwitcherProps {
  currentLanguage?: Language
  hrefs?: Partial<Record<Language, string>>
}

export default function LanguageSwitcher({ currentLanguage, hrefs }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const activeLanguage = currentLanguage ?? language

  const renderOption = (lang: Language, label: string, flagSrc: string) => {
    if (hrefs && !hrefs[lang]) {
      return null
    }

    const className = `rounded-full p-1.5 transition ${
      activeLanguage === lang ? 'bg-emerald-100 shadow-sm shadow-emerald-100' : 'opacity-55 hover:bg-emerald-50 hover:opacity-100'
    }`

    if (hrefs?.[lang]) {
      return (
        <Link
          key={lang}
          href={hrefs[lang]!}
          onClick={() => setLanguage(lang)}
          aria-label={label}
          title={label}
          className={className}
        >
          <Image src={flagSrc} alt={label} width={22} height={16} className="rounded-sm" />
        </Link>
      )
    }

    return (
      <button
        key={lang}
        onClick={() => setLanguage(lang)}
        aria-label={label}
        title={label}
        className={className}
      >
        <Image src={flagSrc} alt={label} width={22} height={16} className="rounded-sm" />
      </button>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-white/90 p-1 shadow-sm shadow-emerald-100/80">
      {renderOption('da', 'Dansk', '/flags/dk.svg')}
      {renderOption('en', 'English', '/flags/gb.svg')}
    </div>
  )
}
