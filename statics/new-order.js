

Vue.component('new-order', {
    template: `
    <div class="new-added-order">
    <h6 class="text-center">List auto-created order</h6>
    <div v-if="orders.length == 0">
    <div class="card" >
  <div class="card-body">
    <p class="card-text text-center">No order is created.</p>
  </div>
</div>
    </div>
    <ul v-else class="list-group" id="new-order">
        <li v-for="order in orders" class="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <b v-if="order.side == 'buy'"> Bid :</b>
            <b v-else> Ask : </b>
            {{order.price}}</span>  <span><b>Size : </b>{{order.size}}</span>
          <span v-if="order.side == 'buy'" class="badge badge-pill badge-primary">BUY</span>
          <span v-else class="badge badge-pill badge-success" >SELL</span>
        </li>
        
      </ul>
</div>
    `,
    mounted() {
        socket.on('created order', (data) => {
            // console.log(data)
            this.orders.push(data)
        })
      
    },
    data(){
        return {
            orders: [
               /*  { 
                    side : 'ask',
                    price: 0.033333,
                    size: 0.3020033
                } ,
                { 
                    side : 'bid',
                    price: 0.033333,
                    size: 0.3020033
                }  */
            ]
        }
    },
})