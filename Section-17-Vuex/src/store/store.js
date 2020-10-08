import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    // mutations must be synchronous. (no reaching to server, no waiting)
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // for async tasks
    actions,
    modules: {
        counter,
    }
})