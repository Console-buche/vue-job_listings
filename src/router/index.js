import { createRouter, createWebHistory } from "vue-router";
import JobListings from "../views/JobListings.vue";

const routes = [
  {
    path: "/",
    name: "JobListings",
    component: JobListings
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
