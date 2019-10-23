module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8989/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => {}
  }
};
