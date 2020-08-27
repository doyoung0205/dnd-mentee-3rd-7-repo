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

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation]);

// Global use
Vue.use(getAwesomeSwiper(SwiperClass));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
