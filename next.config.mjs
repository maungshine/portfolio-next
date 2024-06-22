/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.maungshine.site",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
