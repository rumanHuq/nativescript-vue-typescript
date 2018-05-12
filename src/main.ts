import Vue from "vue";

import router from "./router/index";

import store from "./store/index";

import "./styles.scss";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({
  router,
  store,
}).$start();
