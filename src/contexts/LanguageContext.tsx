'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
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
type TranslationSchema = typeof zh;
type TranslationOverrides = Partial<TranslationSchema>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const supportedLanguages: Language[] = ['zh', 'en', 'ja', 'ko', 'de', 'fr', 'it', 'ru', 'no', 'sv', 'fi', 'es'];

const htmlLangMap: Record<Language, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ru: 'ru',
  no: 'no',
  sv: 'sv',
  fi: 'fi',
  es: 'es'
};

const additionalTranslations: Record<Exclude<Language, 'zh' | 'en'>, TranslationOverrides> = {
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

function deepClone<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as unknown as T;
  }

  if (value !== null && typeof value === 'object') {
    const cloned: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      cloned[key] = deepClone(val);
    }
    return cloned as T;
  }

  return value;
}

function mergeDeep<T>(base: T, override?: Partial<T>): T {
  const result = deepClone(base);

  if (!override) {
    return result;
  }

  for (const [key, overrideValue] of Object.entries(override as Record<string, unknown>)) {
    if (overrideValue === undefined) {
      continue;
    }

    const currentValue = (result as Record<string, unknown>)[key];

    if (Array.isArray(overrideValue) || typeof overrideValue !== 'object' || overrideValue === null) {
      (result as Record<string, unknown>)[key] = overrideValue;
    } else {
      const baseValue = (currentValue as Record<string, unknown>) ?? {};
      (result as Record<string, unknown>)[key] = mergeDeep(
        baseValue,
        overrideValue as Record<string, unknown>
      );
    }
  }

  return result;
}

function buildTranslation(language: Language): TranslationSchema {
  if (language === 'zh') {
    return mergeDeep(zh);
  }

  const englishMerged = mergeDeep(zh, en);

  if (language === 'en') {
    return englishMerged;
  }

  const override = additionalTranslations[language as Exclude<Language, 'zh' | 'en'>];
  if (!override) {
    return englishMerged;
  }

  return mergeDeep(englishMerged, override);
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ski-language') as Language | null;
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      return;
    }

    const browserLanguage = navigator.language.toLowerCase();
    const languageMap: Record<string, Language> = {
      zh: 'zh', 'zh-cn': 'zh', 'zh-hans': 'zh', 'zh-sg': 'zh',
      en: 'en', 'en-us': 'en', 'en-gb': 'en', 'en-ca': 'en', 'en-au': 'en',
      ja: 'ja', 'ja-jp': 'ja',
      ko: 'ko', 'ko-kr': 'ko',
      de: 'de', 'de-de': 'de', 'de-at': 'de', 'de-ch': 'de',
      fr: 'fr', 'fr-fr': 'fr', 'fr-ca': 'fr', 'fr-ch': 'fr', 'fr-be': 'fr',
      it: 'it', 'it-it': 'it', 'it-ch': 'it',
      ru: 'ru', 'ru-ru': 'ru', 'ru-by': 'ru', 'ru-kz': 'ru',
      no: 'no', nb: 'no', nn: 'no', 'no-no': 'no',
      sv: 'sv', 'sv-se': 'sv', 'sv-fi': 'sv',
      fi: 'fi', 'fi-fi': 'fi',
      es: 'es', 'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es', 'es-cl': 'es'
    };

    let detectedLanguage = languageMap[browserLanguage];

    if (!detectedLanguage) {
      const langPrefix = browserLanguage.split('-')[0];
      detectedLanguage = languageMap[langPrefix];
    }

    setLanguageState(detectedLanguage || 'zh');
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangMap[language] || 'en';
    document.documentElement.dir = 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ski-language', lang);
  };

  const translation = useMemo(() => buildTranslation(language), [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translation
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
