'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import en from './en'
import da from './da'
import type { Translations } from './en'

type Language = 'en' | 'da'

const STORAGE_KEY = 'preferred-language'

const translations: Record<Language, Translations> = { en, da }

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: en,
})

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === 'en' || stored === 'da') return stored
  return navigator.language.toLowerCase().startsWith('da') ? 'da' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    setLanguageState(detectLanguage())
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
