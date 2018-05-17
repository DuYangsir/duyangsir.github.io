Vue.component('run-box', {
  props: ['runtext', 'runspeed', 'textcolors', 'bgcolors', 'fontsizes', 'debugnum', 'runmodel'],
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





    let textArr = this.runtext.split("")
    this.runtexts = this.runtext.split("")





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

      ctx.font = this.fontsize + "px arial"

      // 滚动模式：

      if (this.runmodel === 'A' || this.runmodel === 'B') {

        this.runtextlong = this.runtexts.length * this.fontsize
        // 字数加成双倍


        for (let i = 0; i < textArr.length; i++) {
          this.runtexts.push(textArr[i])
        }

        console.log(this.innerheight, this.innerwidth, this.runtexts, this.runmodel === 'B' ? 1 : parseInt(this.innerheight / this.runtextlong) * (this.runmodel === 'B' ? 40 : 4))

        // 如果两倍长度不能占满一屏就加n倍

        for (let n = 0; n < (this.runmodel === 'B' ? 1 : parseInt(this.innerheight / this.runtextlong)) * (this.runmodel === 'B' ? 40 : 4); n++) {

          for (let p = 0; p < textArr.length; p++) {
            this.runtexts.push(textArr[p])
          }
          console.log(this.runtexts)

        }
        this.runtextlong = this.runtexts.length * this.fontsize
        
        // 开始绘制：
        this.runAB(ctx)
      }







    })
  },
  methods: {
    // 默认普通模式
    runAB(ctx) {
      let runing = 0
      let y = 0
      let w = this.innerwidth
      let h = this.innerheight
      if (this.runmodel === 'A') {
        ctx.rotate(Math.PI / 2)
        y = -this.innerwidth
        w = this.innerheight
        h = this.innerwidth
      }
      window.setIntervaltime = setInterval(() => {
        ctx.fillStyle = this.bgcolors
        // 清除
        ctx.fillRect(0, y, w, h)
        ctx.fillStyle = this.textcolors
        if (this.runmodel === 'A') {
          for (let n = 0; n < this.runtexts.length; n++) {
            ctx.fillText(this.runtexts[n], runing + n * this.fontsize, -50 + this.debugnum)
          }
        } else if (this.runmodel === 'B') {
          for (let n = 0; n < this.runtexts.length; n++) {
            ctx.fillText(this.runtexts[n], -this.debugnum, runing + (n + 1) * this.fontsize)
          }
          // ctx.fillText("你", -this.debugnum, runing + 1 * this.fontsize)

        }


        console.log(runing, this.runtextlong / 2, this.runtextlong)

        if (Math.abs(runing) > (this.runmodel === 'B' ? this.runtextlong * 4 / 5 : this.runtextlong / 2)) {
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