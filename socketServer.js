const socketIo = require("socket.io");
const server = require("./server");
const orders = require("./orders");
const client = require("./coinbase");

// console.log(server, 'se')

const io = socketIo(server);
let collectionInterval = null;

async function fetchRecentOrder(){
  // let orders = await client.rest.order.getOrders();
  // return orders.data
  try{
    const allOrders = await client.rest.order.getOrders({limit : 20})
    orders.setAllOrder(allOrders.data)

    // emit to client 
    const allOrder = orders.getOrders();
    io.emit("recent order", allOrder);
  }
  catch(err){
    console.log(err, 'cannot fetch recent Orders')
  }
  
}


io.sockets.on("connection", function (socket) {
  // client join socket
  console.log("oh, new man");

  fetchRecentOrder()
  // socket.emit

  // set turn on - off auto create
  socket.on("update auto", (data) => {
    orders.updateCreateOption(data);
  });

  // set interval
  socket.on("start collect", () => {
    collectionInterval = setInterval(() => {
      // console.log(order.getOrders())
      const allOrder = orders.getOrders();
      io.emit("fetch order", allOrder);
      orders.clearOrder();
      // console.log('sent collection to client')
    }, 20000);
  })


  socket.on("disconnect", function (data) {
    console.log('client out')
    orders.stopSpawn();
    clearInterval(collectionInterval)
  });
});
io.on("connection", () => {
  // console.log('tit')
});

/* setInterval(() => {
  // console.log(order.getOrders())
  // order.clearOrder();
  const allOrder = orders.getOrders();
  io.emit("fetch order", allOrder);
}, 5000); */


module.exports = io