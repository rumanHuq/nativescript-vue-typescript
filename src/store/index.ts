import Vue from "vue";
import Vuex from "vuex";

// Stores
import {todos} from "../components/state-management/store";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    todos,
  },
  strict: debug,
});

Vue.prototype.$store = store;

export default store;
