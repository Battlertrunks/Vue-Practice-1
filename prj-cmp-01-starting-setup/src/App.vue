<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.description }}</p>
      <a :href="resource.link">{{ resource.link }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'offical-guide',
          title: 'Offical Guide',
          description: 'The offical Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
