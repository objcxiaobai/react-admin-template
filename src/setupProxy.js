const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v2',
    proxy.createProxyMiddleware({
      target: 'https://newsapi.org',
      changeOrigin: true,
      pathRewrite: {
        '^/v2': '',
      },
    })
  );
};
