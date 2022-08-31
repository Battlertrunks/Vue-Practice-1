<template>
  <li>
    <h2>{{ name }} {{ friendIsFav ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      requried: true,
    },
    phoneNumber: {
      type: String,
      requried: true,
    },
    emailAddress: {
      type: String,
      requried: true,
    },
    isFavorite: {
      type: Boolean,
      requried: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFav = !this.friendIsFav;
    },
  },
};
</script>
