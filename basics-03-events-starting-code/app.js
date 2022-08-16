const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      fullName: "",
    };
  },
  watch: {
    name() {
      this.fullName = this.name + " " + "Szcz";
    },
  },
  computed: {
    // fullName() {
    //   console.log("Hello");
    //   if (this.name) return this.name + " " + "Szczes";
    // },
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
