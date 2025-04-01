const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/instagram/**',
    createProxyMiddleware({
      target: process.env.REACT_APP_ROCKET_SEARCH_USERS_API_HOST,
    }),
  );
};
