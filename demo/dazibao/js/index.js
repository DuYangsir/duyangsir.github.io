var app = new Vue({
  el: '#app',
  data: {
    // 使用说明
    explainDialog: false,
    runBox: false,
    begin: true,
    // 展示内容
    textarea: '',
    textColor: '#000000',
    bgColor: '#ffffff',
    innerheight: '',
    innerwidth: '',
    speed: 50
  },
  mounted() {
    this.innerheight = window.innerHeight
    this.innerwidth = window.innerWidth
  },
  methods: {
    textareaChange() {
      this.begin = this.textarea.length === 0
    }
  }
})