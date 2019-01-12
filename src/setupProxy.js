//setupProxy.js
const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/wymusic/", {
      target: "http://www.weather.com.cn/",
      changeOrigin: true
    })
  );
};