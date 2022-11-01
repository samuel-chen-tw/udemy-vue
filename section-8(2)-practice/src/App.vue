<template>
  <section>
    <header><h1>Practice</h1></header>
    <user-data
      @set-user="setUser"
    ></user-data>
    <active-user
      :name="user.name"
      :age="user.age"
    ></active-user>
  </section>
</template>

<script>
import ActiveUser from "@/components/ActiveUser";
export default {
  components: {ActiveUser},
  data() {
    return {
      user: {
        name: 'Samuel',
        age: 29
      }
    }
  },
  methods: {
    setUser(name, age) {
      this.user.name = name
      this.user.age = age

      this.user = {
        name: name,
        age: +age
      }
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>