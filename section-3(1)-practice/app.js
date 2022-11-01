const app = Vue.createApp({
  data() {
    return {
      taskList: [],
      inputTask: '',
      showList: true
    }
  },
  computed: {
    btnText() {
      return this.showList ? 'Hide' : 'Show'
    }
  },
  methods: {
    addTask(){
      this.taskList.push(this.inputTask)
    },
    changeType() {
      this.showList = !this.showList
    }
  }
})

app.mount('#assignment')