import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    isError: false,
    isSuccess: false
  },
  getters: {
    isLoged(state) {
      return state.loggedIn;
    },
    isError(state) {
      return state.isError;
    },
    isSuccess(state) {
      return state.isSuccess;
    }
  },
  mutations: {
    isLoged(state, payload = true) {
      state.loggedIn = payload;
    },
    isError(state) {
      state.isError = true;
      setTimeout(() => {
        state.isError = false;
      }, 3000);
    },
    isSuccess(state) {
      state.isSuccess = true;
      setTimeout(() => {
        state.isSuccess = false;
      }, 3000);
    }
  }
});
