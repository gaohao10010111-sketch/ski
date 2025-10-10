import Link from 'next/link';
import { ArrowLeft, Clock, Wrench } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
}

export default function ComingSoon({
  title,
  description = '此功能正在开发中，敬请期待',
  backLink = '/',
  backLabel = '返回首页'
}: ComingSoonProps) {
  const Icon = Wrench;
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* Icon */}
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

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8">
          {description}
        </p>

        {/* Progress Indicator */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">开发进度</span>
              <span className="text-sm font-medium text-blue-600">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">预计上线时间：2-4周</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={backLink}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {backLabel}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
          >
            了解更多
          </Link>
        </div>

        {/* Feature Preview */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">即将推出的功能：</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">实时数据更新</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">智能分析</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">个性化推荐</span>
            <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">移动端优化</span>
          </div>
        </div>
      </div>
    </div>
  );
}
