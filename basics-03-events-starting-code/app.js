const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted.");
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    add(num) {
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
