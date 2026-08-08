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
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition ${
          language === 'da'
            ? 'bg-slate-600 text-white'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span className="text-base leading-none">🇩🇰</span>
        <span className="hidden sm:inline">DA</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition ${
          language === 'en'
            ? 'bg-slate-600 text-white'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span className="text-base leading-none">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  )
}
