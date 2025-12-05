/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // 始终使用/ski作为basePath（服务器和GitHub Pages都需要）
  basePath: '/ski',
  assetPrefix: '/ski/',
  trailingSlash: true,

  // GitHub Pages专用配置
  ...(isGitHubPages && {
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

  // 压缩优化
  swcMinify: true,

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