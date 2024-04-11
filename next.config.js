module.exports = {
  pageExtensions: ['page.tsx'],
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_CDN_DOMAIN,
        pathname: '**',
      },
    ],
  }
}