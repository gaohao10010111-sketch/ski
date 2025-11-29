'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { zh, type PartialTranslationKeys } from '@/locales/zh';
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

const additionalTranslations: Record<Exclude<Language, 'zh' | 'en'>, PartialTranslationKeys> = {
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

function mergeDeep<T>(base: T, override?: PartialTranslationKeys | T): T {
  if (override === undefined) {
    return deepClone(base);
  }

  const baseIsObject = typeof base === 'object' && base !== null;
  const overrideIsObject = typeof override === 'object' && override !== null && !Array.isArray(override);

  if (!baseIsObject) {
    if (overrideIsObject) {
      return mergeDeep({} as unknown as T, override);
    }
    return override as T;
  }

  const result = deepClone(base) as Record<string, unknown>;

  for (const [key, overrideValue] of Object.entries(override as Record<string, unknown>)) {
    if (overrideValue === undefined) {
      continue;
    }

    if (Array.isArray(overrideValue) || typeof overrideValue !== 'object' || overrideValue === null) {
      result[key] = overrideValue;
      continue;
    }

    const currentValue = result[key];
    if (typeof currentValue !== 'object' || currentValue === null) {
      result[key] = mergeDeep({}, overrideValue as Record<string, unknown>);
    } else {
      result[key] = mergeDeep(
        currentValue as Record<string, unknown>,
        overrideValue as Record<string, unknown>
      );
    }
  }

  return result as unknown as T;
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
    try {
      const savedLanguage = localStorage.getItem('ski-language') as Language | null;
      if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        setLanguageState(savedLanguage);
        return;
      }
    } catch {
      // localStorage not available (e.g., private browsing mode)
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
    try {
      localStorage.setItem('ski-language', lang);
    } catch {
      // localStorage not available (e.g., private browsing mode)
    }
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
