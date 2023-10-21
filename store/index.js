import axios from 'axios';

export const state = () => ({
    infoInputChat: null,
});

export const mutations = {
    getInfoInput: (state, value) => state.infoInputChat = value,
};

export const actions = {
    store_getInfoInput({commit}, value){
        commit('getInfoInput', value)
    }
};



