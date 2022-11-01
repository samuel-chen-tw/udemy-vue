<template>
  <section>
    <h2>{{ name }}</h2>
    <h3>{{ age }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    age: Number
  }
}
</script>

