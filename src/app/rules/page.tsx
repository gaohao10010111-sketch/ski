'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calculator,
  FileText,
  Trophy,
  Users,
  Award,
  Star,
  Target,
  Clock,
  BookOpen,
  ExternalLink,
  Copy,
  Download,
  Menu
} from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

type IconKey =
  | 'calculator'
  | 'file'
  | 'trophy'
  | 'users'
  | 'award'
  | 'star'
  | 'target'
  | 'clock'
  | 'book'
  | 'external'
  | 'download'
  | 'menu'

const iconMap: Record<IconKey, typeof Calculator> = {
  calculator: Calculator,
  file: FileText,
  trophy: Trophy,
  users: Users,
  award: Award,
  star: Star,
  target: Target,
  clock: Clock,
  book: BookOpen,
  external: ExternalLink,
  download: Download,
  menu: Menu
}

const defaultContent = {
  header: {
    title: 'China Alpine Ski Rules Library',
    description:
      'Review the streamlined rules system covering points calculation, competition management, youth development and more.',
    highlights: [
      { icon: 'award' as IconKey, text: 'Official Standard' },
      { icon: 'target' as IconKey, text: 'Simplified Calculations' },
      { icon: 'users' as IconKey, text: 'Expanded Youth System' }
    ]
  },
  toc: {
    toggleTitle: 'Toggle table of contents',
    title: 'Page Outline',
    download: 'Download PDF version',
    items: {
      coreFormula: 'Core Formula',
      ruleModules: 'Rule Modules',
      coreFeatures: 'Key Highlights',
      quickLinks: 'Quick Links',
      upgradeInfo: 'Upgrade Notes',
      importantNotice: 'Important Notice'
    }
  },
  formula: {
    title: 'Core Formula',
    expression: 'Final Points = (Base Event Points + Penalty Points) × Event Coefficient',
    description:
      'Compared with the complex v2.0 system, quality factors, participation factors, and additional points are removed. The streamlined three-step method improves efficiency and transparency.',
    copyButton: 'Copy Formula',
    copySuccess: 'Copied to clipboard!',
    calculatorButton: 'Use Calculator'
  },
  ruleModules: {
    points: {
      title: 'China Alpine Ski Points Rules',
      description: 'Streamlined points calculation system based on a three-step formula.',
      features: [
        'Simplified three-step formula',
        'Three-tier competition structure (A/B/C)',
        'Expanded youth categories',
        'Improved transparency'
      ],
      linkLabel: 'View details'
    },
    competition: {
      title: 'Competition Regulations',
      description: 'Understand the latest competition rules and youth system guidance.',
      features: [
        'Event overview',
        'Age group system',
        'Participation guide',
        'Safety and technical standards'
      ],
      linkLabel: 'View details'
    },
    documents: {
      title: 'China Points Documentation',
      description: 'Access documents and tools for the streamlined points system.',
      features: [
        'Detailed rule explanations',
        'Formula component notes',
        'Online calculator',
        'Downloadable PDFs'
      ],
      linkLabel: 'View details'
    }
  },
  v4Features: {
    title: 'Key Highlights',
    items: {
      simplified: {
        title: 'Simplified Calculations',
        description: 'Removes complex quality, participation, and additional factors.'
      },
      tiers: {
        title: 'Three-tier System',
        description: 'Event classes A (1.0), B (0.6), and C (0.3) for clear management.'
      },
      youth: {
        title: 'Expanded Youth',
        description: 'Focused support for U15–U18 age brackets.'
      },
      efficiency: {
        title: 'Efficient & Transparent',
        description: 'Three-step method improves speed and clarity.'
      }
    }
  },
  quickLinks: {
    title: 'Quick Links',
    items: {
      calculator: { label: 'Points Calculator' },
      rankings: { label: 'Points Rankings' },
      data: { label: 'Event Data Management' },
      association: { label: 'China Ski Association', external: true }
    }
  },
  upgradeInfo: {
    title: 'Upgrade Notes',
    improvements: {
      title: 'Key Improvements',
      items: [
        'Streamlined formula without complex factors',
        'Three-tier event classification for clarity',
        'Expanded youth age brackets with full support',
        'Enhanced transparency and efficiency'
      ]
    },
    advantages: {
      title: 'Technical Advantages',
      items: [
        'Three-step calculation, easy to adopt',
        'Standardised management aligned with international practices',
        'Digital tools with comprehensive online support',
        'Open and transparent competition environment'
      ]
    }
  },
  importantNotice: {
    title: 'Important Notice',
    version: {
      title: 'Rule Version',
      items: [
        'Current version: latest release',
        'Effective season: 2024–2025',
        'Scope: domestic events in China',
        'Update cycle: adjusted according to practice'
      ]
    },
    usage: {
      title: 'Usage Guidance',
      items: [
        'Start with the points rules overview',
        'Use the online calculator for verification',
        'Follow youth development policies closely',
        'Stay informed on rule updates'
      ]
    },
    support:
      'This rule framework builds upon international experience and China’s realities to provide accurate, fair, and efficient support for the development of alpine skiing. For questions or suggestions, please contact us through the listed channels.'
  }
}

const ruleModulesConfig = [
  {
    id: 'points',
    icon: 'calculator' as IconKey,
    href: '/rules/points',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'competition',
    icon: 'trophy' as IconKey,
    href: '/rules/competition',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'documents',
    icon: 'file' as IconKey,
    href: '/rules/fis',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
]

const v4FeaturesConfig = [
  { id: 'simplified', icon: 'target' as IconKey, color: 'text-blue-600' },
  { id: 'tiers', icon: 'star' as IconKey, color: 'text-green-600' },
  { id: 'youth', icon: 'users' as IconKey, color: 'text-purple-600' },
  { id: 'efficiency', icon: 'clock' as IconKey, color: 'text-orange-600' }
]

const quickLinksConfig = [
  { id: 'calculator', href: '/points/calculator', icon: 'calculator' as IconKey, external: false },
  { id: 'rankings', href: '/points/rankings', icon: 'award' as IconKey, external: false },
  { id: 'data', href: '/data', icon: 'file' as IconKey, external: false },
  { id: 'association', href: 'https://www.csa.org.cn', icon: 'external' as IconKey, external: true }
]

const tocConfig = [
  { id: 'core-formula', icon: 'calculator' as IconKey, key: 'coreFormula' },
  { id: 'rule-modules', icon: 'book' as IconKey, key: 'ruleModules' },
  { id: 'core-features', icon: 'star' as IconKey, key: 'coreFeatures' },
  { id: 'quick-links', icon: 'external' as IconKey, key: 'quickLinks' },
  { id: 'upgrade-info', icon: 'trophy' as IconKey, key: 'upgradeInfo' },
  { id: 'important-notice', icon: 'award' as IconKey, key: 'importantNotice' }
]

export default function RulesMainPage() {
  const { t } = useTranslation()
  const translations = t.rulesPage ?? {}

  const [copiedFormula, setCopiedFormula] = useState(false)
  const [showToc, setShowToc] = useState(false)

  const header = {
    title: translations.header?.title ?? defaultContent.header.title,
    description: translations.header?.description ?? defaultContent.header.description,
    highlights: (translations.header?.highlights ?? defaultContent.header.highlights).map((item) => ({
      icon: iconMap[(item.icon as IconKey) || 'award'],
      text: item.text ?? ''
    }))
  }

  const toc = {
    toggleTitle: translations.toc?.toggleTitle ?? defaultContent.toc.toggleTitle,
    title: translations.toc?.title ?? defaultContent.toc.title,
    download: translations.toc?.download ?? defaultContent.toc.download,
    items: translations.toc?.items ?? defaultContent.toc.items
  }

  const formulaContent = {
    title: translations.formula?.title ?? defaultContent.formula.title,
    expression: translations.formula?.expression ?? defaultContent.formula.expression,
    description: translations.formula?.description ?? defaultContent.formula.description,
    copyButton: translations.formula?.copyButton ?? defaultContent.formula.copyButton,
    copySuccess: translations.formula?.copySuccess ?? defaultContent.formula.copySuccess,
    calculatorButton: translations.formula?.calculatorButton ?? defaultContent.formula.calculatorButton
  }

  const ruleModules = ruleModulesConfig.map((moduleConfig) => {
    const translatedModules = translations.ruleModules as Record<string, Record<string, unknown>> | undefined
    const defaultModules = defaultContent.ruleModules as Record<string, Record<string, unknown>>
    const content = translatedModules?.[moduleConfig.id] ?? defaultModules[moduleConfig.id]

    const IconComponent = iconMap[moduleConfig.icon] ?? Calculator

    return {
      ...moduleConfig,
      IconComponent,
      title: content?.title ?? '',
      description: content?.description ?? '',
      features: (content?.features ?? []) as string[],
      linkLabel: content?.linkLabel ?? defaultContent.ruleModules.points.linkLabel
    }
  })

  const v4Features = v4FeaturesConfig.map((featureConfig) => {
    const translatedItems = translations.v4Features?.items as Record<string, Record<string, unknown>> | undefined
    const defaultItems = defaultContent.v4Features.items as Record<string, Record<string, unknown>>
    const content = translatedItems?.[featureConfig.id] ?? defaultItems[featureConfig.id]

    const IconComponent = iconMap[featureConfig.icon] ?? Target

    return {
      ...featureConfig,
      IconComponent,
      title: content?.title ?? '',
      description: content?.description ?? ''
    }
  })

  const v4Title = translations.v4Features?.title ?? defaultContent.v4Features.title

  const quickLinks = quickLinksConfig.map((linkConfig) => {
    const translatedLinks = translations.quickLinks?.items as Record<string, Record<string, unknown>> | undefined
    const defaultLinks = defaultContent.quickLinks.items as Record<string, Record<string, unknown>>
    const content = translatedLinks?.[linkConfig.id] ?? defaultLinks[linkConfig.id]

    const IconComponent = iconMap[linkConfig.icon] ?? Calculator

    return {
      ...linkConfig,
      IconComponent,
      label: content?.label ?? '',
      external: content?.external ?? linkConfig.external
    }
  })

  const quickLinksTitle = translations.quickLinks?.title ?? defaultContent.quickLinks.title

  const upgradeInfo = {
    title: translations.upgradeInfo?.title ?? defaultContent.upgradeInfo.title,
    improvements: {
      title:
        translations.upgradeInfo?.improvements?.title ??
        defaultContent.upgradeInfo.improvements.title,
      items:
        translations.upgradeInfo?.improvements?.items ??
        defaultContent.upgradeInfo.improvements.items
    },
    advantages: {
      title:
        translations.upgradeInfo?.advantages?.title ??
        defaultContent.upgradeInfo.advantages.title,
      items:
        translations.upgradeInfo?.advantages?.items ??
        defaultContent.upgradeInfo.advantages.items
    }
  }

  const importantNotice = {
    title: translations.importantNotice?.title ?? defaultContent.importantNotice.title,
    version: {
      title:
        translations.importantNotice?.version?.title ??
        defaultContent.importantNotice.version.title,
      items:
        translations.importantNotice?.version?.items ??
        defaultContent.importantNotice.version.items
    },
    usage: {
      title:
        translations.importantNotice?.usage?.title ??
        defaultContent.importantNotice.usage.title,
      items:
        translations.importantNotice?.usage?.items ??
        defaultContent.importantNotice.usage.items
    },
    support:
      translations.importantNotice?.support ?? defaultContent.importantNotice.support
  }

  const tocItems = tocConfig.map((item) => ({
    ...item,
    IconComponent: iconMap[item.icon] ?? Calculator,
    label: toc.items?.[item.key as keyof typeof toc.items] ?? ''
  }))

  const copyFormula = async () => {
    try {
      await navigator.clipboard.writeText(formulaContent.expression)
      setCopiedFormula(true)
      setTimeout(() => setCopiedFormula(false), 2000)
    } catch {
      // 复制失败时静默处理
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setShowToc(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Table of contents toggle */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={() => setShowToc(!showToc)}
          className="bg-ski-blue text-white p-2 rounded-lg shadow-lg hover:bg-ski-blue/90 transition-colors mb-2"
          title={toc.toggleTitle}
        >
          <Menu className="h-5 w-5" />
        </button>

        {showToc && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 max-h-96 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4">{toc.title}</h3>
            <nav className="space-y-2">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center w-full text-left text-sm text-gray-600 hover:text-ski-blue hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <item.IconComponent className="h-4 w-4 mr-2 flex-shrink-0" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => window.open('/docs/skiing-rules-v4.pdf', '_blank')}
                className="flex items-center w-full text-left text-sm text-green-600 hover:text-green-700 hover:bg-green-50 p-2 rounded transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                {toc.download}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <div className="text-center mb-12" id="header">
        <h1 className="text-4xl font-bold text-ski-navy mb-4">{header.title}</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {header.description}
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4 text-sm text-gray-500">
          {header.highlights.map((item, index) => (
            <span key={index} className="flex items-center">
              <item.icon className="h-4 w-4 mr-1" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Formula */}
      <div id="core-formula" className="bg-gradient-to-r from-ski-blue to-primary-700 text-white rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{formulaContent.title}</h2>
          <div className="relative">
            <div className="text-2xl font-mono font-bold mb-6 bg-white/20 rounded-lg py-4 px-6 relative">
              {formulaContent.expression}
              <button
                onClick={copyFormula}
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 p-2 rounded transition-colors"
                title={formulaContent.copyButton}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            {copiedFormula && (
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded text-sm">
                {formulaContent.copySuccess}
              </div>
            )}
          </div>
          <p className="text-lg opacity-90">{formulaContent.description}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={copyFormula}
              className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <Copy className="h-4 w-4 mr-2" />
              {formulaContent.copyButton}
            </button>
            <button
              onClick={() => window.open('/points/calculator', '_blank')}
              className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <Calculator className="h-4 w-4 mr-2" />
              {formulaContent.calculatorButton}
            </button>
          </div>
        </div>
      </div>

      {/* Rule modules */}
      <div id="rule-modules" className="mb-12">
        <h2 className="text-3xl font-bold text-ski-navy mb-8 text-center">
          {translations.headings?.ruleModules ?? 'Rule Modules'}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ruleModules.map((module) => (
            <Link key={module.id} href={module.href}>
              <div className={`bg-white rounded-lg shadow-lg border-2 ${module.borderColor} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${module.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <module.IconComponent className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-ski-navy">{String(module.title)}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{String(module.description)}</p>
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full ${module.color.replace('text-', 'bg-')} mr-2 flex-shrink-0`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className={`inline-flex items-center text-sm font-medium ${module.color}`}>
                    {String(module.linkLabel)}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Key highlights */}
      <div id="core-features" className="mb-12">
        <h2 className="text-3xl font-bold text-ski-navy mb-8 text-center">{v4Title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {v4Features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <feature.IconComponent className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
              <h3 className="text-lg font-semibold text-ski-navy mb-3">{String(feature.title)}</h3>
              <p className="text-sm text-gray-600">{String(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div id="quick-links" className="mb-12">
        <h2 className="text-3xl font-bold text-ski-navy mb-8 text-center">{quickLinksTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <link.IconComponent className="h-8 w-8 text-ski-blue mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-900">{String(link.label)}</span>
              </a>
            ) : (
              <Link key={index} href={link.href}>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <link.IconComponent className="h-8 w-8 text-ski-blue mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{String(link.label)}</span>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Upgrade info */}
      <div id="upgrade-info" className="bg-gradient-to-r from-ski-navy to-gray-800 text-white rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">{upgradeInfo.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{upgradeInfo.improvements.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {upgradeInfo.improvements.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{upgradeInfo.advantages.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {upgradeInfo.advantages.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Important notice */}
      <div id="important-notice" className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">{importantNotice.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-700">
          <div>
            <h4 className="font-semibold mb-2">{importantNotice.version.title}</h4>
            <ul className="space-y-1">
              {importantNotice.version.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{importantNotice.usage.title}</h4>
            <ul className="space-y-1">
              {importantNotice.usage.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <p className="text-blue-800 text-sm">{importantNotice.support}</p>
        </div>
      </div>
    </div>
  )
}
