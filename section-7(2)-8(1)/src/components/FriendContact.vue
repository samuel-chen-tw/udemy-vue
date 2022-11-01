<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: [ 'name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      Type: String,
      required: true
    },
    name: {
      Type: String,
      required: true
    },
    phoneNumber: {
      Type: String,
      required: true
    },
    emailAddress: {
      Type: String,
      required: true
    },
    isFavorite: {
      Type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '1' || value === '0'
      // }
    },
  },
  emit: ['toggle-favorite', 'delete'],
  // emit: {
  //   'toggle-favorite': function (id) {
  //     if(id) {
  //       return true
  //     } else {
  //       console.warn('Id is missing!')
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend() {
      this.$emit('delete', this.id)
    }
  }
}
</script>
