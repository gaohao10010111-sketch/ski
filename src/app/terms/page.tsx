'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Users, Ban } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = '2024年12月1日';

  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: '服务说明',
      content: [
        '本平台提供中国滑雪赛事积分计算、排名查询、赛事信息发布等服务',
        '平台积分数据来源于官方认证的赛事成绩',
        '服务内容可能会根据实际需要进行调整和更新',
        '部分高级功能可能需要完成实名认证后方可使用'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '账户责任',
      content: [
        '用户应提供真实、准确的个人信息进行注册',
        '用户应妥善保管账户密码，对账户下的所有行为负责',
        '发现账户异常应立即通知平台并修改密码',
        '禁止将账户转让、出借或出租给他人使用'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: '使用规范',
      content: [
        '遵守中华人民共和国相关法律法规',
        '不得利用平台从事任何违法或不当活动',
        '尊重其他用户的合法权益，不得骚扰或诽谤他人',
        '不得使用技术手段干扰平台正常运行'
      ]
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: '禁止行为',
      content: [
        '伪造、篡改比赛成绩或积分数据',
        '冒用他人身份进行注册或参赛',
        '传播虚假信息或恶意攻击平台声誉',
        '未经授权爬取、复制或传播平台数据'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '知识产权',
      content: [
        '平台上的所有内容（包括但不限于文字、图片、标识、软件）均受知识产权法保护',
        '用户不得未经授权复制、修改、传播平台内容',
        '用户上传的内容应确保拥有合法权利',
        '如发现侵权行为，请及时联系我们处理'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: '免责声明',
      content: [
        '平台不保证服务不会中断，对因不可抗力导致的服务中断不承担责任',
        '用户因违反本条款造成的损失由用户自行承担',
        '平台有权对违规用户采取警告、限制功能、封禁账户等措施',
        '对于用户间的纠纷，平台可协助但不承担解决责任'
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
              <Scale className="w-8 h-8 text-ski-blue" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">服务条款</h1>
              <p className="text-gray-500">Terms of Service</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            欢迎使用中国滑雪青少年积分排名官方平台（以下简称&ldquo;本平台&rdquo;）。在使用本平台服务前，请仔细阅读以下条款。使用本平台即表示您同意遵守这些条款。
          </p>

          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-700">
              <strong>最后更新：</strong>{lastUpdated}｜<strong>生效日期：</strong>注册或使用服务即刻生效
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

        {/* Agreement Section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">条款变更</h2>
          <p className="text-gray-600">
            本平台保留随时修改服务条款的权利。修改后的条款将在平台公布后立即生效。
            如您在条款修改后继续使用本平台服务，即视为您已接受修改后的条款。
            如您不同意修改后的条款，请停止使用本平台服务。
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">联系我们</h2>
          <p className="text-gray-600 mb-4">
            如果您对本服务条款有任何疑问，请通过以下方式联系我们：
          </p>
          <div className="space-y-2 text-gray-600">
            <p>邮箱：service@ski-points.com</p>
            <p>电话：400-123-4567</p>
            <p>地址：北京市朝阳区冬季运动中心</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 中国滑雪青少年积分排名官方平台 版权所有</p>
        </div>
      </div>
    </div>
  );
}
