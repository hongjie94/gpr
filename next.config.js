/** @type {import('next').NextConfig} */
const nextConfig = {
  fastRefresh: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static.lolesports.com',
      },
    ],
  }
}

module.exports = nextConfig
