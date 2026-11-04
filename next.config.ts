import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // A prova virtual saiu desta versão; links antigos vão para a coleção.
  async redirects() {
    return [{ source: "/prova-virtual", destination: "/colecao", permanent: false }];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Só o CSS global passa pelo Tailwind (reset). CSS Modules seguem o pipeline padrão do Next.
      "app/globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
