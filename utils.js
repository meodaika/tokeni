exports.sortByType = (orders) => {
    const sortedOrder = orders.reduce((r, a) => {
        r[a.side] = [...r[a.side] || [], a];
        return r;
       }, {});
    return sortedOrder;
}