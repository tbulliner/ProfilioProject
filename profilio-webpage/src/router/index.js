// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/AboutTia",
    name: "aboutPage",
    component: AboutPage,
  },
  {
    path: "/welcome",
    name: "landingPage",
    component: LandingPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
