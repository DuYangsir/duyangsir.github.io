var app = new Vue({
  el: '#app',
  data: {
    // 初始化
    explainDialog: false,
    moresetDialog: false,
    runBox: false,
    begin: true,
    minspeed: 1,
    maxspeed: 200,
    minfsize: 1,
    maxfsize: 10,
    runmodel: 'A',
    // 展示内容
    textarea: '',
    textColor: '#000000',
    bgColor: '#ffffff',
    innerheight: '',
    innerwidth: '',
    speed: 50,
    clicktimes: 0,
    fontsizes: 1,
    debugnum: 0,
    debugnums: 0,
    debugshow: false
  },
  watch: {
    fontsizes() {
      this.debugnum = -(this.fontsizes - 1) * 20
    }
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
      this.clicktimes++
        if (this.clicktimes > 1) {
          this.clicktimes = 0
          this.runBox = false
        }
    },
    debugclick(event, x) {
      if (x) {
        this.debugnum -= 8
      } else {
        this.debugnum += 8
      }
      event.stopPropagation()
    },
    debugclicks(event, x) {
      if (x) {
        this.debugnums -= 10
      } else {
        this.debugnums += 10
      }
      event.stopPropagation()
    },
    runing() {
      this.runBox = true
      this.debugshow = true
      setTimeout(() => {
        this.debugshow = false
      }, 3000)
    }
  }
})