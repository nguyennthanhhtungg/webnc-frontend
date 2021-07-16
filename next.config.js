const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({
  future: {
    webpack5: true
  },
  images: {
    domains: ['picsum.photos']
  },
  async redirects() {
    return [
      {
        source: '/l',
        destination: '/l/dashboard',
        permanent: true
      },
      {
        source: '/category/:anything*',
        destination: '/:anything*',
        permanent: true
      }
    ]
  }
})
