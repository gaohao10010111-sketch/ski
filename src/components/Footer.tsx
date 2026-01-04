'use client'

import Link from 'next/link'
import { Mountain } from 'lucide-react'

export default function Footer() {
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

        <div className="border-t border-gray-700 mt-12 pt-8">
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