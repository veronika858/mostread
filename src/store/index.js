import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    actualChoice: "24h",
    data24h: null,
    data24hLastChanged: null,
    data3d: null,
    data3dLastChanged: null,
    data7d: null,
    data7dLastChanged: null,
    displayData: false,
  },
  mutations: {
    setChoice(state, selection) {
      state.actualChoice = selection;
    },
    setData24h(state, data) {
      state.data24h = data;
    },
    setData24hLastChanged(state) {
      state.data24hLastChanged = new Date();
    },
    setData3d(state, data) {
      state.data3d = data;
    },
    setData3dLastChanged(state) {
      state.data3dLastChanged = new Date();
    },
    setData7d(state, data) {
      state.data7d = data;
    },
    setData7dLastChanged(state) {
      state.data7dLastChanged = new Date();
    },
  },
  actions: {
    fetchData(store) {
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
      let queryString =
        "https://public-api.aktuality.sk/articles/mostread/aktuality/?limit=8&days=";
      let currentTime = new Date();
      if (store.state.actualChoice === "24h") {
        if (
          store.state.data24hLastChanged != null &&
          currentTime - store.state.data24hLastChanged < oneDayInMilliseconds
        )
          return store.state.data24h;
        queryString += "1";
      } else if (store.state.actualChoice === "3d") {
        if (
          store.state.data3dLastChanged != null &&
          currentTime - store.state.data3dLastChanged < oneDayInMilliseconds
        )
          return store.state.data3d;
        queryString += "3";
      } else if (store.state.actualChoice === "7d") {
        if (
          store.state.data7dLastChanged != null &&
          currentTime - store.state.data7dLastChanged < oneDayInMilliseconds
        )
          return store.state.data7d;
        queryString += "7";
      } else { return null;
      }
      return axios
        .get(queryString)
        .then((response) => response.data)
        .then((data) => {
          store.commit("setData" + store.state.actualChoice, data.items);
          store.commit("setData" + store.state.actualChoice + "LastChanged");
          if (store.state.actualChoice === "24h") {
            return store.state.data24h;
          } else if (store.state.actualChoice === "3d") {
            return store.state.data3d;
          } else if (store.state.actualChoice === "7d") {
            return store.state.data7d;
          } else {
            return null;
          }
        });
    },
  },
  modules: {},
});
