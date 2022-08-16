const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      console.log("runs");
      setTimeout(() => {
        that.count = 0;
      }, 5000);
    },
    // Trying watch on changing the count at first.
    //     count(value) {
    //       if (value < 37) this.countArea = "Not there yet.";
    //       else if (value > 37) this.countArea = "Too much!";
    //       else this.countArea = "Made it!";
    //     },
  },
  computed: {
    result() {
      if (this.count < 37) return "Not there yet!";
      else if (this.count === 37) return this.count;
      else return "Too much!";
    },
  },
  methods: {
    add(value) {
      this.count += value;
    },
  },
});

app.mount("#assignment");
