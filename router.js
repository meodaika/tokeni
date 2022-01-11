const express = require("express");
const client = require("./coinbase");
const router = express.Router();
const { sortByType } = require('./utils')

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/orders", (req, res) => {});

router.get("/orders", async (req, res) => {
  try {
    let orders = await client.rest.order.getOrders();
    const sortedOrder = (orders.data)
    // const sortedOrder = sortByType(orders.data)
    res.json({ result: sortedOrder});
  } catch (err) {}
});

module.exports = router;
