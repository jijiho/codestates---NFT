// Make sure to install 'crypto-browserify' by running 'npm install crypto-browserify'
module.exports = {
  resolve: {
    fallback: {
      fs: false,
      net: false,
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
    },
  },
};