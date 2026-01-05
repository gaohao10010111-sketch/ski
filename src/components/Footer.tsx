'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mountain } from 'lucide-react'
import { commonPartners, brandPartners, resortPartners, Partner } from '@/data/partners'

// 主办/承办单位Logo组件 - 统一大尺寸白色圆角矩形框
function OrganizerLogo({ partner, label, showLabel = true }: { partner: Partner; label: string; showLabel?: boolean }) {
  const [basePath, setBasePath] = useState('/ski');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const detectedBasePath = window.location.pathname.startsWith('/ski') ? '/ski' : '';
    setBasePath(detectedBasePath);
  }, []);

  const hasLogo = partner.logo && !partner.logo.includes('placeholder');
  const logoSrc = hasLogo ? `${basePath}${partner.logo}` : '';

  const content = (
    <div className="flex flex-col items-center">
      {showLabel && <span className="text-xs text-gray-400 mb-2">{label}</span>}
      {!showLabel && <span className="text-xs text-gray-400 mb-2 invisible">{label}</span>}
      <div className="bg-white rounded-2xl px-6 py-5 w-[220px] h-[100px] flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
        {(hasLogo && !imgError) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt={partner.name}
            className="h-[70px] w-auto max-w-[190px] object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-lg text-gray-700 font-semibold whitespace-nowrap">
            {partner.name}
          </span>
        )}
      </div>
    </div>
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

// 合作伙伴Logo组件
function PartnerLogo({ partner }: { partner: Partner }) {
  const [basePath, setBasePath] = useState('/ski');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const detectedBasePath = window.location.pathname.startsWith('/ski') ? '/ski' : '';
    setBasePath(detectedBasePath);
  }, []);

  const hasLogo = partner.logo && !partner.logo.includes('placeholder');
  const logoSrc = hasLogo ? `${basePath}${partner.logo}` : '';

  const content = (hasLogo && !imgError) ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc}
      alt={partner.name}
      className="h-12 w-auto max-w-[140px] object-contain bg-white rounded px-2 py-1 hover:scale-105 transition-transform"
      onError={() => setImgError(true)}
    />
  ) : (
    <span className="text-xs text-gray-400 px-2 py-1 border border-gray-600 rounded whitespace-nowrap">
      {partner.name}
    </span>
  );

  // 只有有url的才添加超链接
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

  // 没有url的不添加超链接
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

  // 只获取合作品牌和雪场
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
              基于官方标准打造的综合性竞赛管理平台，涵盖高山滑雪、自由式滑雪、单板滑雪全项目，采用符合中国标准的多档积分计算算法，为中国滑雪竞赛提供权威、准确的数据管理和积分计算服务。
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

        {/* 主办/承办单位 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <div className="flex flex-wrap items-end justify-center gap-8 mb-8">
              <OrganizerLogo partner={commonPartners.csa} label="U系列赛事主办单位" />
              <OrganizerLogo partner={commonPartners.huati} label="U系列赛事承办单位" />
            </div>
          </div>
        </div>

        {/* 合作伙伴 */}
        {partners.length > 0 && (
          <div className="border-t border-gray-700 pt-6">
            <div className="text-center mb-6">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                U系列赛事合作伙伴
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {partners.map((partner) => (
                  <PartnerLogo key={partner.id} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025-2028 全国滑雪青少年U系列赛事积分排名指定官方发布平台
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
