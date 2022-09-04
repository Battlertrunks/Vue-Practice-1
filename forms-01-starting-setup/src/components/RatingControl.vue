<template>
  <ul>
    <li v-bind:class="{ active: activeOption === 'poor' }">
      <button type="button" v-on:click="activate('poor')">Poor</button>
    </li>
    <li v-bind:class="{ active: activeOption === 'average' }">
      <button type="button" v-on:click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" v-on:click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    activate(opt) {
      this.activeOption = opt;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: magenta;
}

.active button {
  color: magenta;
}

ul {
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
