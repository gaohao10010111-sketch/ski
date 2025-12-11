/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isStandalone = process.env.STANDALONE === 'true';

const nextConfig = {
  // GitHub Pages需要/ski前缀，独立域名不需要
  ...(isGitHubPages && {
    basePath: '/ski',
    assetPrefix: '/ski/',
  }),

  // 独立域名配置（cnskipoints.com）
  ...(isStandalone && {
    basePath: '',
    assetPrefix: '',
  }),

  // 默认配置（如果都没设置，使用/ski）
  ...(!isGitHubPages && !isStandalone && {
    basePath: '/ski',
    assetPrefix: '/ski/',
  }),

  trailingSlash: true,

  // 静态导出配置
  ...((isGitHubPages || isStandalone) && {
    output: 'export',
    distDir: 'out',
  }),

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 性能优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 模块ID优化（更好的缓存）
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Webpack配置 - 忽略pdfjs-dist的可选依赖
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
}

module.exports = nextConfig