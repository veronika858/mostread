import { createStore } from "vuex";

export default createStore({
  state: {
    data24h : null,
    data24hLastChanged: null,
    data3d: null,
    data3dLastChanged: null,
    data7d: null,
    data7dLastChanged: null
  },
  mutations: {
    updateData24h (state) {},
    updateData24hLC (state) {
      this.state.data24hLastChanged = new Date();
    }
  },
  actions: {},
  modules: {},
});
