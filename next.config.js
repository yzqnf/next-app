/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gitee.com',
        port: '80',
        pathname: '/yzqnf/qdkfgf/raw/master/img/'
      },
    ],
  },
}

module.exports = nextConfig
