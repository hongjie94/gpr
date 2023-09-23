/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static.lolesports.com',
      },
    ],
  },
}

module.exports = nextConfig
