module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/images/:path*',
      destination: 'https://b2.maxwowo.com/file/maxwowo-f11/:path*',
    },
  ],
  // images: {
  //   domains: ['b2.maxwowo.com'],
  // },
}
