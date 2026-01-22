/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["randomuser.me"],
  },
  experimental:{
    serverActions:{
      bodySizeLimit: "5mb",
    },
  },
}; 

export default nextConfig;
