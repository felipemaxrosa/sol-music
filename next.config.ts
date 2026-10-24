import type { NextConfig } from "next";

const STUDIO_URL = "https://lojasolmusic.sanity.studio";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // /studio no nosso domínio -> Studio hospedado do Sanity.
    // (Embutir o Studio no app quebra no Turbopack/Next 16 + sanity 6.)
    return [
      { source: "/studio", destination: STUDIO_URL, permanent: false, basePath: false },
      { source: "/studio/:path*", destination: STUDIO_URL, permanent: false, basePath: false },
    ];
  },
};

export default nextConfig;
