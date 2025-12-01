/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        ski: {
          blue: '#1e3a8a',
          navy: '#0f172a',
          ice: '#f0f9ff',
          snow: '#fafafa',
        }
      },
      fontFamily: {
        // 系统字体栈 - 全部可商用，零加载
        sans: [
          'system-ui',           // 通用系统字体
          '-apple-system',       // macOS/iOS (San Francisco)
          'BlinkMacSystemFont',  // Chrome on macOS
          '"Segoe UI"',          // Windows
          '"PingFang SC"',       // macOS/iOS 中文 (苹方)
          '"Microsoft YaHei"',   // Windows 中文 (微软雅黑)
          '"Hiragino Sans GB"',  // macOS 中文备选
          '"Noto Sans SC"',      // Linux/Android 中文
          'sans-serif',          // 最终回退
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}