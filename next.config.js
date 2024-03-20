module.exports = {
  pageExtensions: ['page.tsx'],
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.CDN_DOMAIN,
        pathname: '**',
      },
    ],
  }
}