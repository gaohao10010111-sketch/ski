'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Wrench } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

interface ComingSoonTranslations {
  title?: string;
  description?: string;
  backLabel?: string;
  learnMoreLabel?: string;
  progressLabel?: string;
  progressValue?: string;
  eta?: string;
  upcomingFeaturesTitle?: string;
  upcomingFeatures?: string[];
}

interface ComingSoonProps {
  title?: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
  learnMoreLink?: string;
  learnMoreLabel?: string;
  translationKey?: string;
  progressLabel?: string;
  progressValue?: string;
  eta?: string;
  upcomingFeaturesTitle?: string;
  upcomingFeatures?: string[];
}

const DEFAULT_ENGLISH: ComingSoonTranslations = {
  title: 'Coming Soon',
  description: 'This feature is currently under development. Please check back soon.',
  backLabel: 'Back to Home',
  learnMoreLabel: 'Learn More',
  progressLabel: 'Development Progress',
  progressValue: '30%',
  eta: 'Estimated launch: 2-4 weeks',
  upcomingFeaturesTitle: 'Upcoming Features',
  upcomingFeatures: [
    'Real-time data updates',
    'Intelligent analytics',
    'Personalised recommendations',
    'Mobile optimisation'
  ]
};

function getNestedTranslation(t: unknown, path: string | undefined): ComingSoonTranslations | undefined {
  if (!path) {
    return undefined;
  }

  const segments = path.split('.').filter(Boolean);
  let current: unknown = t;

  for (const segment of segments) {
    if (current && typeof current === 'object' && segment in current) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return undefined;
    }
  }

  return current as ComingSoonTranslations;
}

export default function ComingSoon({
  title,
  description,
  backLink = '/',
  backLabel,
  learnMoreLink = '/about',
  learnMoreLabel,
  translationKey,
  progressLabel,
  progressValue,
  eta,
  upcomingFeaturesTitle,
  upcomingFeatures
}: ComingSoonProps) {
  const { t } = useTranslation();
  const componentTranslations = t.comingSoon ?? {};
  const pageTranslations = useMemo(
    () => getNestedTranslation(t.pages, translationKey),
    [t.pages, translationKey]
  ) ?? {};

  const resolved: ComingSoonTranslations = {
    ...DEFAULT_ENGLISH,
    ...componentTranslations,
    ...pageTranslations,
    title,
    description,
    backLabel,
    learnMoreLabel,
    progressLabel,
    progressValue,
    eta,
    upcomingFeaturesTitle,
    upcomingFeatures
  };

  const Icon = Wrench;

  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <Icon className="w-12 h-12 text-blue-600" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {resolved.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {resolved.description}
        </p>

        <div className="mb-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">{resolved.progressLabel}</span>
              <span className="text-sm font-medium text-blue-600">{resolved.progressValue}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: resolved.progressValue || DEFAULT_ENGLISH.progressValue }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{resolved.eta}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={backLink}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {resolved.backLabel}
          </Link>
          <Link
            href={learnMoreLink}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
          >
            {resolved.learnMoreLabel}
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">{resolved.upcomingFeaturesTitle}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(resolved.upcomingFeatures ?? DEFAULT_ENGLISH.upcomingFeatures ?? []).map((feature, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
