
  let socket = io();

  function changeAutoCreate(options){
      console.log('update', options)
    socket.emit('update auto', options)
  }

  Vue.component('price-list', {
    props: ['type', 'orders'],
    data: function () {
      return {
        /* prices : [
            { value : 0.4,  size : 0.003},
            { value : 0.543,  size : 0.323},
            { value : 0.9,  size : 0.0553},
            { value : 0.44,  size : 0.773},
        ] */
      }
    },
    mounted() {
        
    },
    template: `
    
        <div class="col-md-4">
            <div class="card-hover-shadow-2x mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa fa-tasks"></i>&nbsp;{{ type }} Lists</div>
                </div>
                <div>
                    <div class="list-group-item list-tr">
                        <div class="todo-indicator bg-focus"></div>
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                
                                <div class="widget-content-left">
                                    <div class="widget-heading">Size</div>
                                   
                                </div>
                                <div class="widget-content-right"> 
                                    <span>{{ type }}</span>                                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scroll-area-sm">
                    <div class="ps-show-limits">
                        <div style="position: static;" class="ps ps--active-y">
                            <div class="ps-content">
                                <ul class=" list-group list-group-flush">                                   
                                    <li v-for="(order, index) in orders" :index="index" class="list-group-item">
                                        <div class="todo-indicator bg-focus"></div>
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">{{ order.size }}</div>
                                                   
                                                </div>
                                                <div class="widget-content-right"> 
                                                    <span>{{ order.price }}</span>                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                   
                                    
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-block text-right card-footer"><button class="mr-2 btn btn-link btn-sm">Cancel</button><button class="btn btn-primary">Add Task</button></div>
            </div>
        </div>
    `
  })



Vue.component('order-panels', {
    template: `<div class="row d-flex justify-content-center container">
    <price-list type="Bid" :orders="bid"></price-list>
    <price-list type="Ask" :orders="ask"></price-list></div>`,
    mounted() {
        socket.on('fetch order', (data) => {
            // console.log(data)
            if(data.buy)
                this.bid = data.buy
            if(data.sell)
                this.ask = data.sell
        })
    },
    data(){
        return {
            bid: [],
            ask: []
        }
    },
    /* computed : {
        bid : () => {
            return this.orders.bid
        }
    } */
})

new Vue({
    el: '#app',
    data: () => ({ message: 'Row' })
  });
