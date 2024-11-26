/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**", // সমস্ত সাবপাথ অনুমোদন দিন
      },
    ],
  },
};

export default nextConfig;
