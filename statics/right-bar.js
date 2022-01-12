
  Vue.component('right-bar', {
    template: `
    <div>
    
    <h6 class="text-center">Auto make orders  <img v-show="spawnable" src="sound.gif" style="background: transparent; height : 30px" /></h6>
      <p class="text-center">
      <span v-if="!spawnable" class="btn btn-primary" @click="startCreate">Start Auto Create</span>
      <span v-else class="btn btn-danger" @click="stopCreate">Stop Auto Create</span>
      </p>

      <new-order></new-order>
</div>
    
    `,
    methods: {
        startCreate(){
            this.spawnable = true;
            changeAutoCreate({spawnable : true})
        },
        stopCreate(){
            this.spawnable = false
            changeAutoCreate({spawnable : false})
        }
    },
    data(){
        return {
            spawnable: false
        }
    }
})