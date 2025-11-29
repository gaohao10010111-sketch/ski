'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Clock } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = '2024年12月1日';

  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: '信息收集',
      content: [
        '个人身份信息：姓名、身份证号（用于运动员注册验证）',
        '联系信息：电子邮箱、手机号码',
        '运动数据：比赛成绩、积分记录、训练数据',
        '设备信息：浏览器类型、IP地址、设备标识符'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '信息使用',
      content: [
        '提供和改进平台服务',
        '计算和更新运动员积分排名',
        '发送赛事通知和平台公告',
        '进行数据分析以优化用户体验'
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: '信息保护',
      content: [
        '采用行业标准的加密技术保护数据传输',
        '严格的数据访问控制和权限管理',
        '定期进行安全审计和漏洞检测',
        '数据存储在符合国家标准的安全服务器'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '信息共享',
      content: [
        '不会出售、出租或交易您的个人信息',
        '仅在法律要求或您明确同意的情况下共享信息',
        '与中国滑雪协会等官方机构共享必要的运动员数据',
        '使用第三方服务时确保其遵守同等隐私标准'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '您的权利',
      content: [
        '查看和更正您的个人信息',
        '请求删除您的账户和相关数据',
        '选择退出营销通讯',
        '获取您数据的副本'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '数据保留',
      content: [
        '账户信息：在账户有效期内保留',
        '比赛成绩：永久保留用于历史记录',
        '日志数据：保留90天后自动删除',
        '账户注销后：30天内删除个人身份信息'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-ski-blue transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-ski-blue/10 rounded-xl">
              <Shield className="w-8 h-8 text-ski-blue" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">隐私政策</h1>
              <p className="text-gray-500">Privacy Policy</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            中国滑雪积分系统（以下简称&ldquo;本平台&rdquo;）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
          </p>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              <strong>最后更新：</strong>{lastUpdated}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-ski-blue/10 rounded-lg text-ski-blue">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-ski-blue rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">联系我们</h2>
          <p className="text-gray-600 mb-4">
            如果您对本隐私政策有任何疑问或建议，或希望行使您的数据权利，请通过以下方式联系我们：
          </p>
          <div className="space-y-2 text-gray-600">
            <p>📧 邮箱：privacy@ski-points.com</p>
            <p>📞 电话：400-123-4567</p>
            <p>📍 地址：北京市朝阳区冬季运动中心</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 中国滑雪积分系统 版权所有</p>
        </div>
      </div>
    </div>
  );
}
