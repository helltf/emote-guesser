/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.frankerfacez.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.betterttv.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.7tv.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
