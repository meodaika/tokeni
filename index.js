const server = require("./server");
const io = require('./socketServer')
const initSocket = require("./socketCoin");

initSocket();
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`running at port ${port}`);
});
