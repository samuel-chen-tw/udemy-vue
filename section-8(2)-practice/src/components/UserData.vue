<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Name</label>
        <input type="text" placeholder="Your name" v-model="enteredName" />
      </div>
      <div>
        <label>age</label>
        <input type="text" placeholder="Your age" v-model="enteredAge" />
      </div>
      <div>
        <button>Set User Data</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  emits: ['set-user'],
  methods: {
    submitData() {
      this.$emit('set-user', this.enteredName, this.enteredAge)
    }
  }
}
</script>

<style scoped>

</style>