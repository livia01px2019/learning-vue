import * as types from "../types.js";

const state = {
    counter: 0,
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    },
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: context => {
        context.commit('increment');
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => { commit('increment', payload.by) }, payload.duration);
    },
    asyncDecrement: context => {
        setTimeout(() => { context.commit('decrement') }, 1000);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}