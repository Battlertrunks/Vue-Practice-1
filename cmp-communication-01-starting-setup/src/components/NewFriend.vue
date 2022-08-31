<template>
  <form @submit.prevent="submitData">
    <header><h3>Add Friends</h3></header>
    <div>
      <label for="name">Name: </label>
      <!-- <input type="text" name="name" id="name" ref="name" /> -->
      <input type="text" name="name" id="name" v-model="name" />
    </div>
    <div>
      <label for="phone-number">Phone Number</label>
      <!-- <input
        type="text"
        name="phone-number"
        id="phone-number"
        ref="phoneNumber"
      /> -->
      <input
        type="tel"
        name="phone-number"
        id="phone-number"
        v-model="phoneNumber"
      />
    </div>
    <div>
      <label for="email">Email</label>
      <!-- <input type="text" name="email" id="email" ref="email" /> -->
      <input type="email" name="email" id="email" v-model="email" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      //   this.id = this.$refs.name.value.split(" ")[0];
      //   this.name = this.$refs.name.value;
      //   this.phoneNumber = this.$refs.phoneNumber.value;
      //   this.email = this.$refs.email.value;
      //   this.isFavorite = this.$refs.isFav.value;

      //   this.$emit("add-contact", {
      //     id: this.$refs.name.value.split(" ")[0],
      //     name: this.$refs.name.value,
      //     phoneNumber: this.$refs.phoneNumber.value,
      //     email: this.$refs.email.value,
      //     isFavorite: false,
      //   });

      this.$emit("add-contact", this.name, this.phoneNumber, this.email);
    },
  },
};
</script>
