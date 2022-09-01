<template>
  <div>
    <the-header></the-header>
    <!-- OR <TheHeader /> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('managed-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <managed-goals v-if="selectedComponent === 'manage-goals'"></managed-goals> -->
    <!-- Keeps data (like input) saved in the DOM when switching components -->
    <keep-alive>
      <component v-bind:is="selectedComponent"></component>
    </keep-alive>

    <!-- <active-goals></active-goals>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
       <template #default="slotProps"> -->
    <!-- <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps["another-prop"] }}</p>
    </template> 
    </course-goals>  -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManagedGoals from "./components/ManagedGoals.vue";

export default {
  components: {
    TheHeader,
    // UserInfo,
    // BadgeList,
    // CourseGoals,
    ActiveGoals,
    ManagedGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
