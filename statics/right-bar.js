
  Vue.component('right-bar', {
    template: `
    <div>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span class="badge badge-primary badge-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span class="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
      <p>
      <span v-if="!spawnable" class="btn btn-primary" @click="startCreate">Start Auto Create</span>
      <span v-else class="btn btn-danger" @click="stopCreate">Stop Auto Create</span>
      </p>
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