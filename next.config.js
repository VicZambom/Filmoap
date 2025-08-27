/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Filmoap', // Ou '/Filmoap' se estiver a usar o novo repositório
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;