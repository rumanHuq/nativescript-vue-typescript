import Vue from "vue";
import Vuex from "vuex";

// Stores
import mainState from "./mainStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    mainState,
  },
  strict: debug,
});

Vue.prototype.$store = store;

export default store;
