const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //   name(value) {
    //     if (!value) this.fullName = "";
    //     else this.fullName = value + " " + "Szcz";
    //   },
  },
  computed: {
    fullName() {
      console.log("Hello");
      if (this.name) return this.name + " " + this.lastName;
    },
  },
  methods: {
    resetInput() {
      this.name = "";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted.");
    },
    // setName(event, lastname) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
