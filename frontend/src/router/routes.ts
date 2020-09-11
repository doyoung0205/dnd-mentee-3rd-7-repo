// import { footerNaviActiveIcon } from "@/api/type";
module.exports = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/views/MainPage.vue"),
    meta: {
      // footerNaviActiveIcon: footerNaviActiveIcon.MAIN
      footerNaviActiveIcon: "main"
    }
  },
  {
    path: "/signup",
    name: "Singup",
    component: () => import("@/views/SignUpPage.vue")
  },
  {
    path: "/tip/:id",
    name: "TipPage",
    props: true,
    component: () => import("@/views/TipPage.vue"),
    meta: {
      // footerNaviActiveIcon: footerNaviActiveIcon.TIP,
      footerNaviActiveIcon: "tip"
    }
  },
  {
    path: "/tip/write",
    name: "WritePage",
    component: () => import("@/views/WritePage.vue"),
    meta: {
      // footerNaviActiveIcon: footerNaviActiveIcon.TIP,
      footerNaviActiveIcon: "tip"
    }
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => import("@/views/IntroPage.vue"),
    meta: {
      // footerNaviActiveIcon: footerNaviActiveIcon.INTRO,
      footerNaviActiveIcon: "intro"
    }
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("@/views/MyPage.vue"),
    meta: {
      // footerNaviActiveIcon: footerNaviActiveIcon.MYPAGE,
      footerNaviActiveIcon: "mypage"
    }
  }
];
