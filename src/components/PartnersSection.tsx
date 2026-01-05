'use client';

import { useState, useEffect } from 'react';
import { Partner, SportPartners, partnerTypeLabels } from '@/data/partners';

// 获取basePath - 使用环境检测
function getBasePath(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/ski') ? '/ski' : '';
  }
  // 服务端渲染时默认返回/ski（因为主要部署在GitHub Pages）
  return '/ski';
}

interface PartnerLogoProps {
  partner: Partner;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 单个合作伙伴Logo展示
 */
function PartnerLogo({ partner, size = 'md' }: PartnerLogoProps) {
  const sizeClasses = {
    sm: 'h-12 w-auto max-w-[140px] max-h-12',
    md: 'h-16 w-auto max-w-[180px] max-h-16',
    lg: 'h-20 w-auto max-w-[220px] max-h-20',
  };

  const placeholderSizeClasses = {
    sm: 'h-10 px-3 text-sm',
    md: 'h-14 px-4 text-base',
    lg: 'h-18 px-6 text-lg',
  };

  const [basePath, setBasePath] = useState('/ski');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // 客户端检测basePath
    const detectedBasePath = window.location.pathname.startsWith('/ski') ? '/ski' : '';
    setBasePath(detectedBasePath);
  }, []);

  // 检查logo文件是否存在（简单判断：以.png/.jpg/.svg结尾且非placeholder）
  const hasLogo = partner.logo && !partner.logo.includes('placeholder');

  // 构建完整的logo路径
  const logoSrc = hasLogo ? `${basePath}${partner.logo}` : '';

  const content = (hasLogo && !imgError) ? (
    // 使用原生img标签避免Next.js Image的basePath问题
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc}
      alt={partner.name}
      className={`${sizeClasses[size]} object-contain hover:scale-105 transition-transform duration-300`}
      onError={() => setImgError(true)}
    />
  ) : (
    <span className={`${placeholderSizeClasses[size]} bg-gray-100 rounded flex items-center justify-center text-gray-600 font-medium whitespace-nowrap`}>
      {partner.name}
    </span>
  );

  return (
    <div
      className="inline-flex items-center justify-center"
      title={partner.nameEn ? `${partner.name} (${partner.nameEn})` : partner.name}
    >
      {content}
    </div>
  );
}

interface PartnerRowProps {
  label: string;
  partners: Partner[];
  size?: 'sm' | 'md' | 'lg';
  isMain?: boolean;
}

/**
 * 合作伙伴行（一类合作伙伴）
 */
function PartnerRow({ label, partners, size = 'md', isMain = false }: PartnerRowProps) {
  if (partners.length === 0) return null;

  return (
    <div className={`flex flex-col items-center gap-3 ${isMain ? 'pb-4 border-b border-gray-200' : ''}`}>
      <span className={`text-xs font-medium uppercase tracking-wider ${isMain ? 'text-gray-600' : 'text-gray-400'}`}>
        {label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
            <PartnerLogo partner={partner} size={size} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface PartnersSectionProps {
  partners: SportPartners;
  variant?: 'full' | 'compact' | 'inline';
  showLabels?: boolean;
  className?: string;
}

/**
 * 合作伙伴展示区块
 *
 * 三种展示模式：
 * - full: 完整展示，适合页面底部
 * - compact: 紧凑展示，适合页面中间
 * - inline: 内联展示，适合卡片内
 */
export default function PartnersSection({
  partners,
  variant = 'full',
  showLabels = true,
  className = '',
}: PartnersSectionProps) {
  const { organizers, hosts, brands, resorts } = partners;

  if (variant === 'inline') {
    // 内联模式：仅显示logo，不显示标签
    const allPartners = [...organizers, ...hosts, ...brands, ...resorts];
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        {allPartners.map((partner) => (
          <PartnerLogo key={partner.id} partner={partner} size="sm" />
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    // 紧凑模式：两行展示
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {showLabels && <span className="text-gray-500 text-sm">主办/承办：</span>}
          {[...organizers, ...hosts].map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} size="md" />
          ))}
        </div>
        {(brands.length > 0 || resorts.length > 0) && (
          <div className="flex flex-wrap items-center justify-center gap-6">
            {showLabels && <span className="text-gray-500 text-sm">合作伙伴：</span>}
            {[...brands, ...resorts].map((partner) => (
              <PartnerLogo key={partner.id} partner={partner} size="md" />
            ))}
          </div>
        )}
      </div>
    );
  }

  // 完整模式 - 紧凑布局
  return (
    <div className={`bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          赛事合作伙伴
        </h3>
      </div>

      {/* 主办/承办单位 - 单行紧凑展示 */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
        {organizers.length > 0 && (
          <>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {partnerTypeLabels.organizer}:
            </span>
            {organizers.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg px-3 py-2 shadow-sm">
                <PartnerLogo partner={partner} size="md" />
              </div>
            ))}
          </>
        )}
        {hosts.length > 0 && (
          <>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
              {partnerTypeLabels.host}:
            </span>
            {hosts.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg px-3 py-2 shadow-sm">
                <PartnerLogo partner={partner} size="md" />
              </div>
            ))}
          </>
        )}
      </div>

      {/* 合作品牌和雪场 - 单行紧凑展示 */}
      {(brands.length > 0 || resorts.length > 0) && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-gray-200">
          {brands.length > 0 && (
            <>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {partnerTypeLabels.brand}:
              </span>
              {brands.map((partner) => (
                <div key={partner.id} className="bg-white rounded px-2 py-1 shadow-sm">
                  <PartnerLogo partner={partner} size="sm" />
                </div>
              ))}
            </>
          )}
          {resorts.length > 0 && (
            <>
              <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                {partnerTypeLabels.resort}:
              </span>
              {resorts.map((partner) => (
                <div key={partner.id} className="bg-white rounded px-2 py-1 shadow-sm">
                  <PartnerLogo partner={partner} size="sm" />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Footer专用合作伙伴展示（所有合作伙伴）
 */
interface FooterPartnersProps {
  className?: string;
}

export function FooterPartners({ className = '' }: FooterPartnersProps) {
  // 获取所有唯一的合作伙伴
  const allPartners: Partner[] = [];
  const seenIds = new Set<string>();

  // 按类型分组
  const byType: Record<Partner['type'], Partner[]> = {
    organizer: [],
    host: [],
    brand: [],
    resort: [],
  };

  // 从partners配置中导入
  const { commonPartners, brandPartners, resortPartners } = require('@/data/partners');

  // 添加通用合作伙伴
  Object.values(commonPartners).forEach((p: Partner) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      byType[p.type].push(p);
    }
  });

  // 添加品牌合作伙伴
  Object.values(brandPartners).forEach((p: Partner) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      byType[p.type].push(p);
    }
  });

  // 添加雪场合作伙伴
  Object.values(resortPartners).forEach((p: Partner) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      byType[p.type].push(p);
    }
  });

  return (
    <div className={`border-t border-gray-700 pt-8 ${className}`}>
      <h4 className="text-center text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
        合作伙伴 Partners
      </h4>
      <div className="space-y-4">
        {/* 主办/承办 */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[...byType.organizer, ...byType.host].map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} size="md" />
          ))}
        </div>
        {/* 品牌/雪场 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[...byType.brand, ...byType.resort].map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
}
