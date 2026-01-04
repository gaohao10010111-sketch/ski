'use client'

import { Target, Users, Trophy, BarChart3 } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

interface StatItem {
  key: string
  value: string
  label: string
}

interface FeatureItem {
  icon: typeof BarChart3
  title: string
  description: string
}

export default function AboutPage() {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    {
      key: 'pointsSystems',
      value: t.aboutPage?.stats?.pointsSystems?.value || '4',
      label: t.aboutPage?.stats?.pointsSystems?.label || 'Points Systems'
    },
    {
      key: 'registeredAthletes',
      value: t.aboutPage?.stats?.registeredAthletes?.value || '1,000+',
      label: t.aboutPage?.stats?.registeredAthletes?.label || 'Registered Athletes'
    },
    {
      key: 'annualEvents',
      value: t.aboutPage?.stats?.annualEvents?.value || '50+',
      label: t.aboutPage?.stats?.annualEvents?.label || 'Annual Events'
    },
    {
      key: 'onlineService',
      value: t.aboutPage?.stats?.onlineService?.value || '24/7',
      label: t.aboutPage?.stats?.onlineService?.label || 'Online Service'
    }
  ]

  const coreFeatures: FeatureItem[] = [
    {
      icon: BarChart3,
      title: t.aboutPage?.pointsCalculation?.title || 'Points Calculation System',
      description: t.aboutPage?.pointsCalculation?.description || 'Accurate scoring based on official double-points rules'
    },
    {
      icon: Trophy,
      title: t.aboutPage?.eventManagement?.title || 'Event Management',
      description: t.aboutPage?.eventManagement?.description || 'Digitised workflow from registration to results publishing'
    },
    {
      icon: Users,
      title: t.aboutPage?.athleteManagement?.title || 'Athlete Management',
      description: t.aboutPage?.athleteManagement?.description || 'Athlete registration, eligibility review, and records'
    },
    {
      icon: Target,
      title: t.aboutPage?.dataAnalysis?.title || 'Data Analysis',
      description: t.aboutPage?.dataAnalysis?.description || 'Professional statistics and insights for decision making'
    }
  ]

  const dualPointsFeatures = t.aboutPage?.dualPointsEngine?.features || [
    'Alpine skiing: time-based points calculation',
    'Freestyle/Snowboard: 360/240/120 ranking tiers',
    'Dynamic penalty score management',
    'Multi-discipline points tracking'
  ]

  const rulesSupport = t.aboutPage?.rulesSupport?.features || [
    'Alpine skiing points calculation rules',
    'National youth U-series programme',
    'FIS-compatible international rules',
    'Venue standards management'
  ]

  const userExperience = t.aboutPage?.userExperience?.features || [
    'Responsive design across devices',
    'Real-time data updates',
    'Intuitive data visualisation',
    'Streamlined operating experience'
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-ski-blue to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.aboutPage?.pageTitle || 'About Us'}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t.aboutPage?.heroDescription || 'The China Ski Points System is a professional platform committed to the standardisation and professionalisation of winter sports.'}
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.aboutPage?.platformTitle || 'Platform Overview'}</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg font-medium text-gray-800">{t.aboutPage?.platformIntro || 'China Ski Youth Points Ranking Official Platform is a comprehensive competition management platform built on official standards.'}</p>
                <p>{t.aboutPage?.platformDescription1 || 'Built on official scoring rules and the national youth U-series programme, the platform delivers comprehensive ski event management.'}</p>
                <p>{t.aboutPage?.platformDescription2 || 'Supporting alpine, freestyle, and snowboard disciplines, it covers downhill, slalom, giant slalom, super-G, combined, big air, slopestyle, halfpipe, and more.'}</p>
                <p>{t.aboutPage?.platformDescription3 || 'We focus on accurate, efficient digital services that elevate the organisation and competitiveness of Chinese skiing.'}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-ski-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.aboutPage?.coreFeaturesTitle || 'Core Capabilities'}</h2>
            <p className="text-xl text-gray-600">{t.aboutPage?.coreFeaturesSubtitle || 'Professional, comprehensive, and easy-to-use ski competition management'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-ski-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.aboutPage?.technicalFeaturesTitle || 'Technical Highlights'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{t.aboutPage?.dualPointsEngine?.title || 'Dual Points Engine'}</h3>
              <ul className="space-y-2 text-gray-600">
                {dualPointsFeatures.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{t.aboutPage?.rulesSupport?.title || 'Rules Framework'}</h3>
              <ul className="space-y-2 text-gray-600">
                {rulesSupport.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{t.aboutPage?.userExperience?.title || 'User Experience'}</h3>
              <ul className="space-y-2 text-gray-600">
                {userExperience.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ski-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.aboutPage?.contactTitle || 'Contact Us'}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.aboutPage?.contactDescription || 'We welcome your questions and suggestions.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">{t.aboutPage?.technicalSupport?.title || 'Technical Support'}</h3>
              <p className="text-blue-100 whitespace-pre-line">
                {(t.aboutPage?.technicalSupport?.email || 'Email: support@ski-points.com') + '\n' + (t.aboutPage?.technicalSupport?.phone || 'Phone: 400-123-4567')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">{t.aboutPage?.businessCooperation?.title || 'Business Cooperation'}</h3>
              <p className="text-blue-100 whitespace-pre-line">
                {(t.aboutPage?.businessCooperation?.email || 'Email: business@ski-points.com') + '\n' + (t.aboutPage?.businessCooperation?.wechat || 'WeChat: ski-points-service')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
