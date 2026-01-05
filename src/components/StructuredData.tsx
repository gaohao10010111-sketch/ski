import Script from 'next/script'

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'sportsOrganization'
}

export default function StructuredData({ type = 'sportsOrganization' }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : 'SportsOrganization',
    name: '中国滑雪青少年积分排名官方平台',
    alternateName: 'China Youth Skiing Points Ranking Platform',
    description: '全国滑雪青少年U系列赛事积分排名指定发布平台，提供积分查询、成绩公布、赛程安排等服务',
    url: 'https://cnskipoints.com/',
    logo: 'https://cnskipoints.com/images/logo.png',
    image: 'https://cnskipoints.com/images/ski-bg.jpg',
    sameAs: [
      'https://github.com/gaohao10010111-sketch/ski',
      'https://gaohao10010111-sketch.github.io/ski/'
    ],
    ...(type === 'sportsOrganization' && {
      sport: 'Alpine Skiing',
      foundingDate: '2024',
      foundingLocation: {
        '@type': 'Country',
        name: 'China'
      },
      memberOf: {
        '@type': 'SportsOrganization',
        name: '中国滑雪协会',
        url: 'https://www.csa.org.cn'
      },
      offers: {
        '@type': 'Service',
        name: '中国滑雪青少年积分排名服务',
        description: '简化积分计算、运动员管理、赛事组织、成绩统计',
        serviceType: 'Sports Management Software',
        provider: {
          '@type': 'Organization',
          name: '中国滑雪青少年积分排名官方平台'
        }
      }
    }),
    ...(type === 'website' && {
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://cnskipoints.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English']
    },
    keywords: [
      '中国高山滑雪积分规则',
      '高山滑雪',
      'Alpine Skiing',
      '中国积分',
      '滑雪竞赛',
      '积分计算',
      '滑雪管理',
      '中国滑雪',
      '中国滑雪协会',
      '赛事管理',
      '运动员积分',
      '青少年滑雪体系',
      '简化公式'
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}