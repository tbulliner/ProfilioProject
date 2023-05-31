// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProjectsList from "../views/ProjectsList.vue";
import ProjectDemo from "../views/ProjectDemo.vue";

const routes = [
  {
    path: "/AboutTia",
    name: "aboutPage",
    component: AboutPage,
  },
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/projectList",
    name: "projectsPage",
    component: ProjectsList,
  },
  {
    path: "/projectDemo/:projectID",
    name: "projectDemo",
    component: ProjectDemo,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
