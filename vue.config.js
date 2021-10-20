const path = require('path');

module.exports = {
  devServer: {
    // port: 8080,
    proxy: {
      '/k/node': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/k/node': '/'
        }
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/global.less")]
    }
  }
};