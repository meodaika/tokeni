const { sortByType } = require('./utils')
const client = require("./coinbase");

const initArr = [
    {
    id: "227a088c-e51e-4234-9261-b31db93cf962",
    price: "0.00300000",
    size: "0.02000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-11T04:26:19.705615Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "2db25fdf-9825-4d04-b8bc-ac45a1f58f2b",
    price: "0.00300000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-11T04:17:59.522322Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "b62b6174-b9a2-41af-9866-34204cca39bf",
    price: "0.00200000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:25:16.726859Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "5c94c5b6-574b-4e60-b2c3-51f7b149a79b",
    price: "0.00800000",
    size: "0.00900000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:20:35.116836Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "b1612183-0cdb-4f0b-8d2a-08d147187a43",
    price: "0.00800000",
    size: "0.00900000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:13:39.508377Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "2f726da0-b00f-4473-a257-f8d760c97523",
    price: "0.00900000",
    size: "0.00200000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:13:10.248348Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "74d7ba70-d561-4a4b-aaae-74cb39ed80fd",
    price: "0.00300000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:09:45.900359Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "73534e53-87ee-4aa4-9ceb-868df2a57034",
    price: "0.00200000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:08:55.135903Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "61aa7734-22b0-49e9-a1eb-6e515a62944f",
    price: "0.00100000",
    size: "0.00900000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:08:10.558796Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "ab06f34b-5f0e-493f-85d6-12ab91a68b06",
    price: "0.00700000",
    size: "0.00800000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:04:14.262903Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "1f19d55a-6018-45cd-962f-7a4c0ff62840",
    price: "0.00600000",
    size: "0.00400000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:03:55.702265Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "6166ed8b-2bec-4453-a6d1-4fdab0016dff",
    price: "0.00100000",
    size: "0.00200000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:01:41.661893Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "6bb97471-6273-4d24-b3c6-06abf5eeb740",
    price: "0.00100000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T16:00:25.209654Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "4161b138-b9ee-4746-a374-b56dd9feebc1",
    price: "0.00100000",
    size: "0.00300000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:58:03.259042Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "56464655-d88d-4cea-84cb-c6c88b4a6e66",
    price: "0.00500000",
    size: "0.00800000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:56:31.308134Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "77610029-1ddc-4c10-949d-413e7230501b",
    price: "0.00700000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:56:14.239478Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "f4872aca-6d16-40ef-b191-f6bd82ed0d6b",
    price: "0.00700000",
    size: "0.00500000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:53:32.130615Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "094918c7-026b-4e4e-a0eb-ace5f450b19a",
    price: "0.00300000",
    size: "0.00100000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:52:26.030962Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "487694c1-4bf1-44b1-af90-932083d1e441",
    price: "0.00010000",
    size: "0.00400000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:35:46.100249Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "0b00521c-5434-48c2-b012-eaa666a2c69a",
    price: "0.03000000",
    size: "0.01000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T15:34:43.097269Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "5749ddd5-a90e-4468-9c33-0161ceb83537",
    price: "0.01500000",
    size: "0.15000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T14:58:11.870797Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "7fe0b3d3-df4b-4096-88cb-12e6210872e9",
    price: "0.05500000",
    size: "0.35000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T14:56:52.886192Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "4f94144e-d5bf-4adc-b479-ca316dc68f1e",
    price: "0.05500000",
    size: "0.35000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T14:56:15.101297Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "b7330792-5237-4bae-a77b-465a88963317",
    price: "0.20000000",
    size: "0.80000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "sell",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T14:07:20.595596Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    {
    id: "670fa618-152f-49d4-b8ae-fa9121b64af0",
    price: "0.01500000",
    size: "0.40000000",
    product_id: "ETH-BTC",
    profile_id: "f5b25790-e4b9-4b8e-905d-730880c74a1f",
    side: "buy",
    type: "limit",
    time_in_force: "GTC",
    post_only: false,
    created_at: "2022-01-10T11:03:55.491271Z",
    fill_fees: "0.0000000000000000",
    filled_size: "0.00000000",
    executed_value: "0.0000000000000000",
    status: "open",
    settled: false,
    },
    ]

    const createOrder = async(side, price, size ) => {
        const orderData = {
            type: 'limit',
            side: side,
            product_id: 'ETH-BTC',
            price: price,
            size,
            time_in_force : "GTC",
            cancel_after: 'min',
            post_only: false
          }
        //   console.log('creatting order') ;

          try{
            let newOrder  = await client.rest.order.placeOrder(orderData)
            // console.log(newOrder)
            return newOrder
          }
          catch(error){
              console.log(error.response.data)
            return error
            // res.json({ error : true})
          }
    }


class Order{
    constructor(){
        this.orders = []
        // this.orders = initArr
        this.spawnable = false;
        this.rate = 500 // 40 order / 60s. Default : 1500
        this.minBuy = 0.001
        this.maxBuy = 0.002
        this.minSell = 0.001
        this.maxSell = 0.002
        this.interval = null
    }
    addOrder(order){
        this.orders.push(order)
        // console.log('order length', this.orders.length)
    }

    clearOrder(){
        this.orders = []
    }

    sortOrder(){

    }
    getOrders(){
        return sortByType(this.orders)
    }

    setAllOrder(allOrder){
        this.orders = allOrder
    }

    updateCreateOption(data){
        if(typeof data.spawnable !== 'undefined'){
            if(data.spawnable === true)
                this.startSpawn();
            else 
                this.stopSpawn();
        }
    }

    startSpawn(){
        // this.spawnable = true;

        this.interval = setInterval(() => {
            const side = Math.floor(Math.random() * 101) > 50 ? 'buy' : 'sell'
            const price = Math.random() / 10
            const size = Math.random() * 10
            // console.log(size,'zi')
            const decimalPrice = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            const decimalSize = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            createOrder(side,+price.toFixed(decimalPrice), +size.toFixed(decimalSize));
        }, this.rate)
    }

    stopSpawn(){
        console.log('stop')

        clearInterval(this.interval)
    }
}
const orders = new Order()
module.exports = orders

