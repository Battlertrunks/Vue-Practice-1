<template>
  <form @submit.prevent="submitUser">
    <div>
      <label for="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="enteredUsername"
      />
    </div>
    <div>
      <label for="age">Age: </label>
      <input type="number" name="age" id="age" v-model="enteredAge" />
    </div>
    <button>Submit User Data</button>
  </form>
</template>

<script>
export default {
  emits: ["user-info"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUser() {
      this.$emit("user-info", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>
