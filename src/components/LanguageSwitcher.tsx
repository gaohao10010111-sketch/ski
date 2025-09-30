'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const languageNames = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ru: 'Русский',
  no: 'Norsk',
  sv: 'Svenska',
  fi: 'Suomi',
  es: 'Español'
};

const languageFlags = {
  zh: '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷',
  de: '🇩🇪',
  fr: '🇫🇷',
  it: '🇮🇹',
  ru: '🇷🇺',
  no: '🇳🇴',
  sv: '🇸🇪',
  fi: '🇫🇮',
  es: '🇪🇸'
};

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: 'zh' | 'en' | 'ja' | 'ko' | 'de' | 'fr' | 'it' | 'ru' | 'no' | 'sv' | 'fi' | 'es') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
        aria-label={t.languageSelector.title}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languageFlags[language]} {languageNames[language]}</span>
        <span className="sm:hidden">{languageFlags[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100 sticky top-0 bg-white">
            {t.languageSelector.title}
          </div>
          {Object.entries(languageNames).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as 'zh' | 'en' | 'ja' | 'ko' | 'de' | 'fr' | 'it' | 'ru' | 'no' | 'sv' | 'fi' | 'es')}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 ${
                language === lang ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{languageFlags[lang as keyof typeof languageFlags]}</span>
              <span>{name}</span>
              {language === lang && (
                <span className="ml-auto text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}