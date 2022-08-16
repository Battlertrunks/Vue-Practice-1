const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      displayList: true,
    };
  },
  computed: {
    toggleBtnText() {
      return this.displayList ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.displayList = !this.displayList;
    },
  },
});

app.mount("#assignment");
