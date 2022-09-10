import counterMutations from './mutations.js';
import counterGetters from './getters.js';
import counterActions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  getters: counterGetters,
  actions: counterActions,
};
