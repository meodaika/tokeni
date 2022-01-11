const client = require("./coinbase");
const orders = require("./orders");

// const order = new Order();

const channel = {
  name: "user",
  product_ids: ["ETH-BTC"],
};

const fetchAllOrder = async() => {
  let orders = await client.rest.order.getOrders();
  return orders.data
}

const initSocket = () => {
  client.ws.connect();

  client.ws.on("WebSocketEvent.ON_OPEN", async() => {
    console.log("connnected to Coinbase");
    client.ws.subscribe(channel);
    const allOrders = await fetchAllOrder()
    orders.setAllOrder(allOrders)
  });

  client.ws.on("WebSocketEvent.ON_MESSAGE_FULL_RECEIVED", (data) => {
    // console.log(data, "data");
    if (data.order_id) {
      const { order_id, size, price, side } = data;
      orders.addOrder({
        order_id,
        size,
        price,
        side,
      });
    }
  });
};

/* setInterval(() => {
    // console.log(order.getOrders())
    // order.clearOrder();
}, 5000) */

module.exports = initSocket;
