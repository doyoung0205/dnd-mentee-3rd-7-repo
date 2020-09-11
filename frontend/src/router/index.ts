import Vue from "vue";
import VueRouter from "vue-router";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const routes = require("./routes");
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const signModalNameSpace = "signModal/";
const restrictPaths = ["/tip/write", "/mypage"];

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
