import { createStore } from 'vuex';

import counterModule from './counter/index.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
