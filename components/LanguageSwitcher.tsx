'use client'

import { useLanguage } from '../lib/i18n/context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800 p-1">
      <button
        onClick={() => setLanguage('da')}
        aria-label="Dansk"
        title="Dansk"
        className={`rounded-full px-2 py-1 text-xl leading-none transition ${
          language === 'da'
            ? 'bg-slate-600 opacity-100'
            : 'opacity-50 hover:opacity-80'
        }`}
      >
        🇩🇰
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
        className={`rounded-full px-2 py-1 text-xl leading-none transition ${
          language === 'en'
            ? 'bg-slate-600 opacity-100'
            : 'opacity-50 hover:opacity-80'
        }`}
      >
        🇬🇧
      </button>
    </div>
  )
}
