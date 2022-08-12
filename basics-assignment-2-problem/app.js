const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      userInput2: "",
    };
  },
  methods: {
    displayAlert() {
      alert("You displayed an alert!");
    },
    displayUserInput1(event) {
      this.userInput1 = event.target.value;
    },
    displayUserInput2(event) {
      this.userInput2 = event.target.value;
    },
  },
});

app.mount("#assignment");
