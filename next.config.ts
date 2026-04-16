import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * Permite carregar imagens de domínios externos via next/image.
   * Para imagens em tags <img> simples, não é necessário — mas
   * se migrar para o componente <Image> do Next.js no futuro, adicione aqui.
   *
   * Aprendizado: remotePatterns substitui o antigo `domains` no Next.js 13+.
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
