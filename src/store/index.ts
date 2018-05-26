import Vue from "vue";
import Vuex, { Store } from "vuex";

// Stores
import main from "./mainStore";

// namespaced stores

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store: Store  = new Vuex.Store({
  modules: {
    main,
  },
  strict: debug,
});

Vue.prototype.$store = store;

export default store;
