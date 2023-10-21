import { createStore } from "vuex";

 export const store = createStore({
  state() {
    return {
      count: 0,
      infoInputChat: null,
    };
  },
  mutations: {
    increment(state) {
    },
    getInfoInput: (state, value) => {
      state.count++;
      state.infoInputChat = value;
    }
  },
  actions: {
    store_getInfoInput({commit}, value){
        commit('getInfoInput', value)
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});

