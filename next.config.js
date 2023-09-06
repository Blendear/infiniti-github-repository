/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/strona-glowna-infiniti",
        permanent: true,
        // hook2 - check what the global conventions say about giving a slug to the the homepage URL
      },
    ];
  },
};

module.exports = nextConfig;
