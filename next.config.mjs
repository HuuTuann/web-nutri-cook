import Dotenv from "dotenv-webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/users",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
};

export default nextConfig;
