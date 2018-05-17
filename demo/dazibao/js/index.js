var app = new Vue({
  el: '#app',
  data: {
    // 使用说明
    explainDialog: false,
    moresetDialog: false,
    runBox: false,
    begin: true,
    minspeed: 1,
    maxspeed: 200,
    // 展示内容
    textarea: '',
    textColor: '#000000',
    bgColor: '#ffffff',
    innerheight: '',
    innerwidth: '',
    speed: 50,
    clicktimes: 0,
    fontsizes: 1
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
    textColorChange(x) {
      this.textColor = x
      let textbox = document.getElementsByClassName('textarea-box')[0].getElementsByTagName('textarea')[0]
      textbox.style.color = this.textColor
    },
    bgColorChange(x) {
      this.bgColor = x
      let textbox = document.getElementsByClassName('textarea-box')[0].getElementsByTagName('textarea')[0]
      textbox.style.backgroundColor = this.bgColor
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