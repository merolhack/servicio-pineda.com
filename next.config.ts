const nextConfig: import('next').NextConfig = {
  transpilePackages: ["@next/third-parties"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;
