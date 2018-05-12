import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      component: Home,
      meta: {
        title: "Home",
      },
      path: "/home",
    },
    { path: "*", redirect: "/home" },
  ],
});

router.replace("/home");

export default router;
