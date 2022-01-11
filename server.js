const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const orders = require("./orders");

const routes = require("./router");
const initSocket = require("./socketCoin");

const app = express();
// const server = require('http').createServer(app);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/statics"));

app.use(routes);

const port = process.env.PORT || 3000;
initSocket();
const server = http.createServer(app);
const io = socketIo(server);
io.sockets.on("connection", function (socket) {
    console.log('oh, new man')
    socket.on("update auto", (data) => {
      console.log(data)
      orders.updateCreateOption(data)
    })
  socket.on("disconnect", function (data) {});
});
io.on('connection', () => { 
    // console.log('tit')

 });

 setInterval(() => {
    // console.log(order.getOrders())
    // order.clearOrder();
    const allOrder = orders.getOrders()
    io.emit('fetch order', allOrder);
}, 5000)

server.listen(port, () => {
  console.log(`running at port ${port}`);
});
