const app = Vue.createApp({
  data() {
    return {
      name: 'Samuel',
      age: 29,
      picUrl: 'https://upload.wikimedia.org/wikipedia/zh/d/d0/JaketheDog.png'
    }
  },
  methods: {
    plusAge() {
      return this.age + 5
    },
    randomNumber() {
      return Math.random()
    }
  }
});
app.mount('#assignment');