import Vue from "vue";

import router from "./router/index";

import store from "./store/index";

import "./styles.scss";

// Vue.config.silent = false;

Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);

const app = new Vue({
  router,
  store,
}).$start();
