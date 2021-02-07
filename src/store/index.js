import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    isLoged(state) {
      return !!state.isLoggedIn;
    }
  },
  actions: {},
  modules: {}
});
