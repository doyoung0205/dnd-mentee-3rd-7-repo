<template>
  <LayoutDefault>
    <router-view />
  </LayoutDefault>
</template>

<script lang="ts">
import LayoutDefault from "@/components/common/LayoutDefault.vue";
import Vue from "vue";
import { MetaInfo } from "vue-meta";
export default Vue.extend({
  components: {
    LayoutDefault
  },
  metaInfo(): MetaInfo {
    return {
      title: "그린이",
      titleTemplate: "%s | greene.netlify.app", // title 뒤에 붙일 공통된 이름 (주로 사이트이름)
      meta: [
        { property: "og:locale", content: "ko_KR" },
        { charset: "utf-8" },
        {
          name: "keywords",
          content: `그린이 greene 쓰레기 버리는 팁 쓰래기 환경 친환경 `
        },
        {
          name: "author",
          content: `그린이 greene 쓰레기 버리는 팁 쓰래기 환경 친환경 `
        },
        // OPEN GRAPH
        { property: "og:title", content: "그린이" },
        { property: "og:site_name", content: "greene" },
        // { property: "fb:app_id", content: "" },
        {
          property: "og:description",
          content: "그린이 greene 쓰레기 버리는 팁 쓰래기 환경 친환경 ",
          vmid: "og:description"
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "greene.netlify.app",
          vmid: "og:url"
        },
        {
          property: "og:image",
          content: "greene.netlify.app/public/img/main-carocel1.png",
          vmid: "og:image"
        },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "greene.netlify.app"
        },
        { name: "twitter:title", content: "그린이" },
        {
          name: "twitter:description",
          content: "그린이 greene 쓰레기 버리는 팁 쓰래기 환경 친환경 "
        },
        // Your twitter handle, if you have one.
        // { name: "twitter:creator", content: "@alligatorio" },
        {
          name: "twitter:image:src",
          content: "greene.netlify.app/public/img/main-carocel1.png"
        },
        // // Google / Schema.org markup:
        { itemprop: "name", content: "그린이" },
        {
          itemprop: "description",
          content: "그린이 greene 쓰레기 버리는 팁 쓰래기 환경 친환경 "
        },
        {
          itemprop: "image",
          content: "greene.netlify.app/public/img/main-carocel1.png"
        }
      ]
    };
  }
});
</script>

<style lang="scss"></style>
