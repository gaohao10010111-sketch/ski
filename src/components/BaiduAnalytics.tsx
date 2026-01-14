'use client'

/**
 * 百度统计组件
 * 在线统计服务，支持静态站点
 *
 * 使用方法：
 * 1. 访问 https://tongji.baidu.com 注册账号
 * 2. 添加网站 cnskipoints.com
 * 3. 获取统计代码中的 ID（类似 abc123def456）
 * 4. 将 ID 填入下方 BAIDU_ANALYTICS_ID
 */

import Script from 'next/script'

// 百度统计ID
const BAIDU_ANALYTICS_ID = 'f64e6593ee21f29dd922dbb4a5b61f4f'

export default function BaiduAnalytics() {
  // 如果没有配置ID，不渲染
  if (!BAIDU_ANALYTICS_ID) {
    return null
  }

  return (
    <>
      <Script
        id="baidu-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?${BAIDU_ANALYTICS_ID}";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        }}
      />
    </>
  )
}
