const nextConfig: import('next').NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
