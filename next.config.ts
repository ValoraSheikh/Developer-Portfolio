import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'img.icons8.com', 'images.unsplash.com', 'avatar.vercel.sh'],
  },
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],

};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default nextConfig;

