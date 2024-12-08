module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc"],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'all' }, // Allow indexing
        ],
      },
    ];
  },
};
