Vue.component('run-box', {
  props:['data'],
  data() {
    return {
      count: 0
    }
  },
  template: '<canvas   id="canvas" width="10" height="10"></canvas>',
  mounted() {
    this.innerheight = window.innerHeight
    this.innerwidth = window.innerWidth
    console.log(this.innerheight, this.innerwidth,this.data)
  }
})