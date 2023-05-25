// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/AboutTia",
    name: "aboutPage",
    component: AboutPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
