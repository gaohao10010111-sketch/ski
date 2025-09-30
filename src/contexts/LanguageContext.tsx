'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { zh } from '@/locales/zh';
import { en } from '@/locales/en';
import { ja } from '@/locales/ja';
import { ko } from '@/locales/ko';

type Language = 'zh' | 'en' | 'ja' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof zh;
}

const translations = {
  zh,
  en,
  ja,
  ko
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ski-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    } else {
      const browserLanguage = navigator.language;
      if (browserLanguage.startsWith('en')) {
        setLanguageState('en');
      } else if (browserLanguage.startsWith('ja')) {
        setLanguageState('ja');
      } else if (browserLanguage.startsWith('ko')) {
        setLanguageState('ko');
      } else {
        setLanguageState('zh');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ski-language', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}