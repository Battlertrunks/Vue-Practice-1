import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: ':teamId', component: TeamMembers, props: true }, // props tells the vue router that the dynamic parameters should be passed into this component as props than just $route
      ] /*alias: '/'*/,
    }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList }, // our-domain.com/users => UsersList
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', //Can change the css name for active links
});

const app = createApp(App);

app.use(router);

app.mount('#app');
