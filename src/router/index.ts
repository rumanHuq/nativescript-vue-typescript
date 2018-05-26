import Vue from "vue";
import VueRouter from "vue-router";

import About from "../components/About/About.vue";
import Hardware from "../components/Hardware/Hardware.vue";
import Home from "../components/Home/Home.vue";
import Scrapebook from "../components/Scrapebook/Scrapebook.vue";

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
    {
      component: About,
      meta: {
        title: "About",
      },
      path: "/about",
    },
    {
      component: Hardware,
      meta: {
        title: "Hardware",
      },
      path: "/hardware",
    },
    {
      component: Scrapebook,
      meta: {
        title: "Scrapebook",
      },
      path: "/scrapebook",
    },
    { path: "*", redirect: "/scrapebook" },
  ],
});

router.replace("/hardware");

export default router;
