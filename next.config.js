module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/images/:path*',
      destination: 'https://files.maxwowo.com/file/maxwowo-f11/:path*',
    },
  ],
  images: {
    domains: ['images.unsplash.com'],
  },
}
