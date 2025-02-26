import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production'; //when and how is this being set? Is it set automatically or am I responsible to do so?

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', //the kind of build process next.js will perform
  distDir: 'dist', //the name of the file in the baseDir where the build artifacts are going to be outputed
  basePath: isProd ? '/cicd' : '', //necessary for the css/font/js files to be loaded/linked properly
  // it's important to ensure that your application is aware of this base path so that it can generate correct URLs for its assets (JavaScript, CSS, images, etc.) and route navigation
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
