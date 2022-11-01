const app = Vue.createApp({
  data() {
    return {
      pClass1: '',
      showClass: true,
      pColor: ''
    }
  },
  computed:{
    pClass2() {
      return this.showClass ? 'visible' : 'hidden'
    }
  },
  methods: {
    changeClass() {
      this.showClass = !this.showClass
    }
  }
})

app.mount('#assignment')