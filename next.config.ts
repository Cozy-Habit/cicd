import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', //the kind of build process next.js will perform
  distDir: 'dist', //the name of the file in the baseDir where the build artifacts are going to be outputed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
