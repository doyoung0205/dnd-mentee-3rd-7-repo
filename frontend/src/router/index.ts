import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/signup",
    name: "Singup",
    component: () => import("@/views/SignUpPage.vue")
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => import("@/views/IntroPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
