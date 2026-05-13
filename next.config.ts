const nextConfig: import('next').NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;
