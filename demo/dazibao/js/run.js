Vue.component('run-box', {
  props: ['runtext', 'runspeed', 'textcolors', 'bgcolors', 'fontsizes'],
  data() {
    return {
      count: 0,
      fontsize: 0,
      runing: null,
      runspeeds: 0,
      runtexts: [],
      runtextlong: 0
    }
  },
  template: '<canvas ref="canvas" width="10" height="10"></canvas>',
  mounted() {
    // 初始化
    // this.runtexts += this.runtexts
    this.innerheight = window.innerHeight
    this.innerwidth = window.innerWidth
    this.runspeeds = parseInt(2000 / this.runspeed)


    // 字数加成双倍
    let textArr = this.runtext.split("")
    this.runtexts = this.runtext.split("")

    for (let i = 0; i < textArr.length; i++) {
      this.runtexts.push(textArr[i])
    }







    console.log(this.innerheight, this.innerwidth, this.runtext)

    window.requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame

    this.$nextTick(() => {
      // 初始化
      this.$refs.canvas.height = this.innerheight
      this.$refs.canvas.width = this.innerwidth
      let ctx = this.$refs.canvas.getContext("2d")

      this.fontsize = parseInt(this.innerwidth / this.fontsizes)
      this.runtextlong = this.runtexts.length * this.fontsize

      ctx.font = this.fontsize + "px arial"

      console.log(parseInt(this.innerheight / this.runtextlong))
      // 如果两倍长度不能占满一屏就加n倍
      for (let n = 0; n < parseInt(this.innerheight / this.runtextlong) * 2; n++) {
        for (let i = 0; i < textArr.length; i++) {
          this.runtexts.push(textArr[i])
        }
      }
      console.log(this.runtexts)

      // 开始绘制：
      this.runA(ctx)



    })
  },
  methods: {
    // 默认普通模式
    runA(ctx) {
      let runing = 0
      ctx.rotate(Math.PI / 2)
      window.setIntervaltime = setInterval(() => {
        ctx.fillStyle = this.bgcolors
        // 清除
        ctx.fillRect(0, -this.innerwidth, this.innerheight, this.innerwidth)
        ctx.fillStyle = this.textcolors
        for (let n = 0; n < this.runtexts.length; n++) {
          ctx.fillText(this.runtexts[n], runing + n * this.fontsize, -50)
        }

        if (Math.abs(runing) > this.runtextlong / 2) {
          // 第一部分全部消失了
          runing = -10
          // clearInterval(window.setIntervaltime)

        } else {
          runing -= 10
        }
      }, this.runspeeds)
    },
    // 通用函数
    // 是否是小写字母（需要往上提高距离）

  },
  destroyed() {
    clearInterval(window.setIntervaltime)
  }
})