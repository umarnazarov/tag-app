import { createRouter, createWebHistory } from "vue-router";

export enum AppRouteName {
  HOME_ROUTE = "home",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

export default router;
