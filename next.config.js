module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/images/:path*',
      destination: 'https://files.maxwowo.com/file/mwo-photos/:path*',
    },
  ],
}
