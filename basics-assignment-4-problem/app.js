const app = Vue.createApp({
  data() {
    return {
      input: "",
      paraVisibility: true,
      colorInput: "",
    };
  },
  computed: {
    // Extra layer of security of unwanted values.
    userStyle() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.paraVisibility,
        hidden: !this.paraVisibility,
      };
    },
  },
  methods: {
    visible() {
      this.paraVisibility = !this.paraVisibility;
    },
  },
});

app.mount("#assignment");
