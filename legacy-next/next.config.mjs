/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  maximumFileSizeToCacheInBytes: 4.5 * 1024 * 1024, // 4.5 MB
});

// Função para compor múltiplos plugins
function composePlugins(...plugins) {
  return (config) => plugins.reduceRight((acc, plugin) => plugin(acc), config);
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "streetviewpixels-pa.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["i.ytimg.com", "biomobtinastorage.blob.core.windows.net", "img.youtube.com"],
  },
};

// Exportando os plugins combinados
export default composePlugins(withNextIntl, withSerwist)(nextConfig);
