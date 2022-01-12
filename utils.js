exports.sortByType = (orders) => {
    const sortedOrder = orders.reduce((r, a) => {
        r[a.side] = [...r[a.side] || [], a];
        return r;
       }, {});
    return sortPrice(sortedOrder);
}

const LIMIT_ASK = 150;

const LIMIT_BID = 5

const sortPrice = (objOrders) => {

    const cutOrder = {}
    for(key in objOrders){
        objOrders[key] =  objOrders[key].sort((a, b) => a.side == 'sell' ? a.price - b.price : b.price - a.price)

        cutOrder[key] = []
        const limit = key == 'sell' ? LIMIT_ASK : LIMIT_BID
        objOrders[key].reduce((total, order) => {
            const newTotal = total + (order.price * order.size)
            // console.log(newTotal)
            if(newTotal <=  limit)
                cutOrder[key].push(order)
            return newTotal
        }, 0)
    }
    // console.log(cutOrder.sell.map(order => order.price))
    return cutOrder
}