module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `http://13.125.156.78:8090/:path*`,
        },
      ]
    },
  }