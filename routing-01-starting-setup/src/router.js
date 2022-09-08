import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
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
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    //   if (to.name === 'team-members') next();
    //   else next({ name: 'team-members', params: { teamId: 't2' } });
    next();
  }
});

router.afterEach((to, from) => {
  // good for sending analytics data, dont use to control what the user sees on the screen
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
