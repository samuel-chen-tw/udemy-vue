const app = Vue.createApp({
  data() {
    return {
      sum: 0
    }
  },
  watch: {
    result() {
      const that = this
      setTimeout(function (){
        that.sum = 0
      }, 5000)
    }
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return 'Not there yet'
      } else if (this.sum > 37) {
        return 'Too much!'
      } else {
        return this.sum
      }
    }
  },
  methods: {
    addNum(num){
      this.sum += num
    }
  }
})

app.mount('#assignment')