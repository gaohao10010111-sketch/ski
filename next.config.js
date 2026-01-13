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

  // Webpack配置 - 忽略pdfjs-dist的可选依赖和原生模块
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    // 将better-sqlite3标记为外部依赖，避免在静态构建时打包原生模块
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    // 排除better-sqlite3原生模块
    config.externals = [...(config.externals || []), 'better-sqlite3'];

    return config;
  },
}

module.exports = nextConfig