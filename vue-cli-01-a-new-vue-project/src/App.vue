<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        <h3>Name: {{ friend.name }}</h3>
        <p>phone: {{ friend.phone }}</p>
        <p>email: {{ friend.email }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "mathew",
          name: "Mathew Lees",
          phone: "123 456 7890",
          email: "Matt@localhost.com",
        },
        {
          id: "ben",
          name: "Ben Schultz",
          phone: "123 456 7890",
          email: "Ben@localhost.com",
        },
      ],
    };
  },
};
</script>
