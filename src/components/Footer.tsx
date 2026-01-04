'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mountain } from 'lucide-react'
import { commonPartners, brandPartners, resortPartners, Partner } from '@/data/partners'

// 合作伙伴Logo组件
function PartnerLogo({ partner }: { partner: Partner }) {
  const hasLogo = partner.logo && !partner.logo.includes('placeholder');

  const content = hasLogo ? (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={100}
      height={40}
      className="h-8 w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  ) : (
    <span className="text-xs text-gray-400 px-2 py-1 border border-gray-600 rounded whitespace-nowrap">
      {partner.name}
    </span>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
        title={partner.name}
      >
        {content}
      </a>
    );
  }

  return <span className="inline-flex items-center" title={partner.name}>{content}</span>;
}

export default function Footer() {
  // 获取所有唯一的合作伙伴
  const allPartners: Partner[] = [];
  const seenIds = new Set<string>();

  // 添加通用合作伙伴（主办/承办）
  Object.values(commonPartners).forEach((p) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      allPartners.push(p);
    }
  });

  // 添加品牌合作伙伴
  Object.values(brandPartners).forEach((p) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      allPartners.push(p);
    }
  });

  // 添加雪场合作伙伴
  Object.values(resortPartners).forEach((p) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      allPartners.push(p);
    }
  });

  // 按类型分组
  const organizers = allPartners.filter(p => p.type === 'organizer' || p.type === 'host');
  const partners = allPartners.filter(p => p.type === 'brand' || p.type === 'resort');

  return (
    <footer className="bg-ski-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">中国滑雪青少年积分排名官方平台</span>
            </div>
            <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
              基于官方标准打造的综合性竞赛管理平台，涵盖高山滑雪、自由式滑雪、单板滑雪全项目，采用符合中国标准的多档积分计算算法，
              为中国滑雪竞赛提供权威、准确的数据管理和积分计算服务。
            </p>
          </div>

          {/* 积分系统 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">积分系统</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/points/total-rankings" className="text-gray-300 hover:text-primary-400 transition-colors">
                  总积分排行榜
                </Link>
              </li>
              <li>
                <Link href="/points/rankings" className="text-gray-300 hover:text-primary-400 transition-colors">
                  积分排行榜
                </Link>
              </li>
              <li>
                <Link href="/results-announcement" className="text-gray-300 hover:text-primary-400 transition-colors">
                  成绩公告
                </Link>
              </li>
            </ul>
          </div>

          {/* 赛事管理 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">赛事管理</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/competitions" className="text-gray-300 hover:text-primary-400 transition-colors">
                  比赛成绩
                </Link>
              </li>
              <li>
                <Link href="/competitions/schedule" className="text-gray-300 hover:text-primary-400 transition-colors">
                  赛事日程
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 合作伙伴 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
              合作伙伴 Partners
            </h4>
            {/* 主办/承办 */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              {organizers.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
            {/* 品牌/雪场 */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024-2025 中国滑雪青少年积分排名官方平台. 基于官方标准开发.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                关于平台
              </Link>
              <Link href="/cooperation" className="text-gray-300 hover:text-primary-400 transition-colors">
                合作咨询
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
