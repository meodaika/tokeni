
  let socket = io();
  socket.emit('start collect', {})


  function changeAutoCreate(options){
      console.log('update', options)
    socket.emit('update auto', options)
  }

  



new Vue({
    el: '#app',
    data: () => ({ message: 'Row' })
  });
