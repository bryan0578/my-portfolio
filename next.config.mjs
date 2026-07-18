import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.4.65'],
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/work-with-me", destination: "/consulting", permanent: true },
      { source: "/consulting/services", destination: "/services", permanent: true },
      { source: "/consulting/work", destination: "/projects", permanent: true },
      { source: "/consulting/process", destination: "/consulting#process", permanent: true },
    ]
  },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
