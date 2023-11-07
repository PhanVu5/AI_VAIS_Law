import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 3,
      infoInputChat: null,
      conversations: {
        list: {
          items: [],  // ConversationRecord[],
        },
        record: {}, //as ConversationRecord,
      },
      conversationMessages: {
        list: {
          filter: {
            conversationId: null,
          },
          items: [], // as ConversationMessageRecord[],
        },
      },
      chatbox: {
        message: '',
      },
      userSession: {
        data: {
          documentSampleInputFile: {
            url: '',
            key: '',
            bucket: '',
          },
          userId: '',
        },
      },
      document: {
        list: {
          items: [],
          page: 1,
          limit: 1,
        },
      },
      documentContent: {
        list: {
          items: [],
        },
      },
    };
  },
  mutations: {
    increment(state) {
    },
    getInfoInput: (state, value) => {
      state.count++;
      state.infoInputChat = value;
    },
    getConversationMessages: (state, value) => {
      state.conversationMessages.list = value;
    },
    pushConversationMessages: (state, value) => {
      state.conversationMessages.list.push(value);
      store.chatbox.message = '';
    },
    unshiftConversationMessages: (state, value) => {
      state.conversationMessages.list.unshift(value);
      store.chatbox.message = '';
    },
    unshiftConversationMessages: (state, value) => {
      state.conversationMessages.list.unshift(value);
      store.chatbox.message = '';
    },
    socketiConversationMessages: (state, { index, record }) => {
      if (index > -1) {
        state.conversationMessages.list.items[index] = {
          ...state.conversationMessages.list.items[index],
          ...record,
        };
      } else {
        state.conversationMessages.list.items.push(record);
      }
    },
  },
  actions: {
    store_getInfoInput({ commit }, value) {
      commit('getInfoInput', value)
    },
    store_getConversationMessages({ commit }, value) {
      commit('getConversationMessages', value)
    },
    store_pushConversationMessages({ commit }, value) {
      commit('pushConversationMessages', value)
    },
    store_unshiftConversationMessages({ commit }, value) {
      commit('unshiftConversationMessages', value)
    },
    store_soketiConversationMessages({ commit }, value) {
      commit('soketiConversationMessages', value)
    },
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});

