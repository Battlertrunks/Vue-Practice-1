import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // props tells the vue router that the dynamic parameters should be passed into this component as props than just $route
      ] /*alias: '/'*/,
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    }, // our-domain.com/users => UsersList
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', //Can change the css name for active links
  scrollBehavior(to, from, savedPosition) {
    console.warn(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
});

// Helps unwanted users from entering a route they don't have access to.
router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  //   if (to.name === 'team-members') next();
  //   else next({ name: 'team-members', params: { teamId: 't2' } });
  next();
});

router.afterEach((to, from) => {
  // good for sending analytics data, dont use to control what the user sees on the screen
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
