const http = require("http");
const { createApp } = require("./rest");
// const logger = require("pino")();

createApp().then((app) => {
  http.createServer(app).listen(3000);
});
