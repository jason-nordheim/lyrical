const { createProxyMiddleware } = require("http-proxy-middleware");
// const origin = `${window.location.protocol}//${window.location.host}`;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("**/api.musixmatch.com/**", {
      changeOrigin: true,
      toProxy: true,
      target: "https://api.musixmatch.com/ws/1.1/",
      logLevel: "debug",
      autoRewrite: true,
      prependPath: false,
      forward: true,
      followRedirects: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log("proxyReq", { proxyReq, req, res });
      },
      onError: (error, req, res) => {
        console.log("error", { error, req, res });
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log("proxyRes", { proxyRes, req, res });
      },
    })
  );
};
