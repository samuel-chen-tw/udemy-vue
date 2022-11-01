const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: ''
    }
  },
  methods: {
    alertText(){
      alert('Hello Vue.js!')
    },
    input1(event){
      this.output1 = event.target.value
    },
    input2(event){
      this.output2 = this.output1
    }
  }
})

app.mount('#assignment')