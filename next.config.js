module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/images/:path*',
      destination: 'https://files.maxwowo.com/file/maxwowo-f11/:path*',
    },
  ],
  // TODO: remove this once using actual images from Backblaze B2 bucket
  images: {
    domains: ['images.unsplash.com'],
  },
}
