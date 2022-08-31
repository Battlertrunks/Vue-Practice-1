<template>
  <div>
    <active-user :username="user.username" :age="user.age"></active-user>
    <user-data @user-info="updateInfo"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "Battlertrunks",
        age: 24,
      },
    };
  },
  methods: {
    updateInfo(username, age) {
      this.user = {
        username,
        age: +age, //converts to an number if a string
      };
    },
  },
};
</script>
