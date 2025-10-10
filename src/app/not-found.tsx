import Link from 'next/link';
import { Home, ArrowLeft, Search, Mountain } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 leading-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Mountain className="w-24 h-24 text-blue-200 animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          页面走丢了
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          抱歉，您访问的页面不存在或已被移动
        </p>

        {/* Suggestions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">您可以尝试：</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Home className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">返回首页</h3>
                <p className="text-sm text-gray-600">从首页重新开始浏览</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Search className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">搜索功能</h3>
                <p className="text-sm text-gray-600">使用搜索查找内容</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Mountain className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">浏览项目</h3>
                <p className="text-sm text-gray-600">查看四大滑雪项目</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowLeft className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">返回上一页</h3>
                <p className="text-sm text-gray-600">使用浏览器后退按钮</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </Link>
          <Link
            href="/alpine"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold"
          >
            <Mountain className="w-5 h-5 mr-2" />
            浏览项目
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">热门链接：</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/alpine" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors">
              高山滑雪
            </Link>
            <Link href="/snowboard-slopestyle" className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors">
              单板坡面障碍技巧
            </Link>
            <Link href="/snowboard-parallel" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm hover:bg-indigo-100 transition-colors">
              单板平行项目
            </Link>
            <Link href="/freestyle-slopestyle" className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm hover:bg-cyan-100 transition-colors">
              自由式坡面障碍技巧
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
