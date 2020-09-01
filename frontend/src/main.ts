import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import VueMeta from "vue-meta";

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation]);

// Global use
Vue.use(getAwesomeSwiper(SwiperClass));

Vue.use(VueMeta, {
  // 컴포넌트 옵션 이름 변경 (예: 'head')asd
  keyName: "metaInfo",
  // 태그를 관찰하기 위해 추가하는 속성 이름 vue-meta
  attribute: "data-vue-meta"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
