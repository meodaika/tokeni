Vue.component('order-panels', {
    template: `
    <div >
    <div><p class="text-center">Refresh list in {{ timer }}s</p></div>
    <div class="row d-flex justify-content-center container">
    
    <price-list type="Bid" :orders="bid"></price-list>
    <price-list type="Ask" :orders="ask"></price-list></div></div>`,
    mounted() {
        socket.on('fetch order', (data) => {
            this.putOrder(data)
            
        })

        socket.on('recent order', (data) => {
            // console.log(data, 'f')
            this.putOrder(data)
            
        })
    },
    data(){
        return {
            bid: [],
            ask: [],
            timer : 30
        }
    },
    methods:{
        putOrder(data){
            this.bid = data.buy || []
            this.ask = data.sell || []
            
        },
        setTimer(){
            if(this.timer > 0) {
                setTimeout(() => {
                    this.timer -= 1
                    this.setTimer()
                }, 1000)
            }
        }
    }
    /* computed : {
        bid : () => {
            return this.orders.bid
        }
    } */
})