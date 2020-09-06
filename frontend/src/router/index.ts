import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../views/MainPage.vue";
import store from "@/store";

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
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("@/views/MyPage.vue")
  },
  {
    path: "/WritePage",
    name: "WritePage",
    component: () => import("@/views/WritePage.vue")
  }
  // {
  //   path: "/wrtie",
  //   name: "WritePage",
  //   component: () => import("@/views/WritePage.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const signModalNameSpace = "signModal/";
const restrictPaths = ["/write"];

router.beforeEach((to, from, next) => {
  const isLogin = store.getters.isLogin;
  //Neet to add if not log in redirect
  if (restrictPaths.includes(to.path) && !isLogin) {
    store.commit(`${signModalNameSpace}showSignIn`);
    next("/");
  } else {
    next();
  }
});

export default router;
