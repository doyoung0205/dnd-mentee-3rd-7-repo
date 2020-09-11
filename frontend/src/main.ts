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
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

Vue.config.productionTip = false;

// Global use
Vue.use(getAwesomeSwiper(SwiperClass));
Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta"
});

/** ============================ 플러그인 ============================ */
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation]);
// gsap
gsap.registerPlugin(ScrollToPlugin);
// prerenderEvent
const prerenderEventName = "prerender-event";

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function() {
    this.$nextTick(function() {
      document.dispatchEvent(new Event(prerenderEventName));
    });
  }
}).$mount("#app");
