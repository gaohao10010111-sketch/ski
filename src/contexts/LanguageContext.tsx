'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { zh } from '@/locales/zh';
import { en } from '@/locales/en';
import { ja } from '@/locales/ja';
import { ko } from '@/locales/ko';
import { de } from '@/locales/de';
import { fr } from '@/locales/fr';
import { it } from '@/locales/it';
import { ru } from '@/locales/ru';
import { no } from '@/locales/no';
import { sv } from '@/locales/sv';
import { fi } from '@/locales/fi';
import { es } from '@/locales/es';

type Language = 'zh' | 'en' | 'ja' | 'ko' | 'de' | 'fr' | 'it' | 'ru' | 'no' | 'sv' | 'fi' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof zh;
}

const translations = {
  zh,
  en,
  ja,
  ko,
  de,
  fr,
  it,
  ru,
  no,
  sv,
  fi,
  es
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
      // 智能语言检测 - 支持完整语言代码和区域变体
      const browserLanguage = navigator.language.toLowerCase();
      const languageMap: { [key: string]: Language } = {
        'zh': 'zh', 'zh-cn': 'zh', 'zh-hans': 'zh', 'zh-sg': 'zh',
        'en': 'en', 'en-us': 'en', 'en-gb': 'en', 'en-ca': 'en', 'en-au': 'en',
        'ja': 'ja', 'ja-jp': 'ja',
        'ko': 'ko', 'ko-kr': 'ko',
        'de': 'de', 'de-de': 'de', 'de-at': 'de', 'de-ch': 'de',
        'fr': 'fr', 'fr-fr': 'fr', 'fr-ca': 'fr', 'fr-ch': 'fr', 'fr-be': 'fr',
        'it': 'it', 'it-it': 'it', 'it-ch': 'it',
        'ru': 'ru', 'ru-ru': 'ru', 'ru-by': 'ru', 'ru-kz': 'ru',
        'no': 'no', 'nb': 'no', 'nn': 'no', 'no-no': 'no',
        'sv': 'sv', 'sv-se': 'sv', 'sv-fi': 'sv',
        'fi': 'fi', 'fi-fi': 'fi',
        'es': 'es', 'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es', 'es-cl': 'es'
      };

      // 首先尝试完整匹配
      let detectedLanguage = languageMap[browserLanguage];
      
      // 如果没有完整匹配，尝试语言前缀匹配
      if (!detectedLanguage) {
        const langPrefix = browserLanguage.split('-')[0];
        detectedLanguage = languageMap[langPrefix];
      }
      
      // 默认使用中文
      setLanguageState(detectedLanguage || 'zh');
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