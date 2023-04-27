/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ticketm**",
      },
      {
        protocol: "https",
        hostname: "avatars.**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.**",
      },
    ],
  },
};

module.exports = nextConfig;
