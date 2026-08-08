'use client'

import Image from 'next/image'
import { useLanguage } from '../lib/i18n/context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800 p-1">
      <button
        onClick={() => setLanguage('da')}
        aria-label="Dansk"
        title="Dansk"
        className={`rounded-full p-1.5 transition ${
          language === 'da' ? 'bg-slate-600' : 'opacity-40 hover:opacity-70'
        }`}
      >
        <Image src="/flags/dk.svg" alt="Dansk" width={22} height={16} className="rounded-sm" />
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
        className={`rounded-full p-1.5 transition ${
          language === 'en' ? 'bg-slate-600' : 'opacity-40 hover:opacity-70'
        }`}
      >
        <Image src="/flags/gb.svg" alt="English" width={22} height={16} className="rounded-sm" />
      </button>
    </div>
  )
}
