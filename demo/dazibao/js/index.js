var app = new Vue({
  el: '#app',
  data: {
    // 使用说明
    explainDialog: false,
    runBox: false,
    begin: true,
    minspeed: 1,
    // 展示内容
    textarea: '',
    textColor: '#000000',
    bgColor: '#ffffff',
    innerheight: '',
    innerwidth: '',
    speed: 50,
    clicktimes: 0
  },
  mounted() {
    this.innerheight = window.innerHeight
    this.innerwidth = window.innerWidth
  },
  methods: {
    textareaChange() {
      this.begin = this.textarea.length < 3
    },
    suggest() {
      this.$message({
        message: '暂未开通~',
        type: 'success',
        center: true
      });
    },
    textColorChange() {
      console.log(this.textColor)
    },
    closerunbox() {
      console.log("123eee")
      this.clicktimes++
        if (this.clicktimes > 1) {
          this.clicktimes = 0
          this.runBox = false
        }
    }
  }
})