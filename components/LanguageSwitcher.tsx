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
      activeLanguage === lang ? 'bg-slate-600' : 'opacity-40 hover:opacity-70'
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
    <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800 p-1">
      {renderOption('da', 'Dansk', '/flags/dk.svg')}
      {renderOption('en', 'English', '/flags/gb.svg')}
    </div>
  )
}
