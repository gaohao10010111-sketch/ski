/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    trailingSlash: true,
    basePath: '/ski',
    assetPrefix: '/ski/',
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
}

module.exports = nextConfig