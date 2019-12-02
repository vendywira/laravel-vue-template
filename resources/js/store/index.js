import Vue from "vue";
import Vuex from "vuex";
import main from '@store/module/main'

Vue.use(Vuex);

export default new Vuex.Store({
  state: main.state,
  getters: main.getters,
  mutations: main.mutations,
  actions: main.actions
});