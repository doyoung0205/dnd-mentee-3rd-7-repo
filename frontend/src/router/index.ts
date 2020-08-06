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
    path: "/signIn",
    name: "SignIn",
    component: () => import("@/views/SignInPage.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
