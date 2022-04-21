/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.istockphoto.com'],
  },
  swcMinify: true,
  experimental: {
    emotion: true,
  },
};

module.exports = nextConfig;
