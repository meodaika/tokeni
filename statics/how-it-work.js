
  Vue.component('how-it-work', {
    template: `
    <div>
    
    <p style="font-size: 13px;" class="text-right">
    <span data-toggle="tooltip" data-placement="bottom" title="Click to show Guide" @click="toggleTip" >
        How it work ? <i class="fa fa-question-circle"></i>
</span></p>
<div v-show="showTip"  style="font-size: 13px;">
    <p>Firstly, system will get 20 recent orders. 
    After that, list will show orders each latest 30 seconds. 
    To make sure we 'have' new orders in this webpage, use Auto Create button, 
    it will auto generate order random at basecoin account </p>
    <p><b>Technique</b> : Webpage use ExpressJS to serve backend, with VueJS at front-end. </p>
    <p>Use API at exchange Coinbase. </p>
    <p>Part 1 : Load 20 recent sorted orders with side Ask and Bid</p>
    <p>Part 2 : Front-end connect with backend via socket protocol. Through pressing 'Start auto create' button, front-end will ask backend for making api to REST system of Coinbase and collect data. After each 30s, backend send back list created order </p>
</div>
</div>
    
    `,
    methods: {
       toggleTip(){
           this.showTip = !this.showTip
       }
    },
    data(){
        return {
            showTip: false
        }
    }
})