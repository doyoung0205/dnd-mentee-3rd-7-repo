<template>
  <div id="tipList">
    <!-- HEAD LINE -->
    <TipSubjectVue></TipSubjectVue>
    <!-- 검색어 + 추천 키워드 영역 -->
    <TipSearchOptionVue></TipSearchOptionVue>
    <!-- 팁 리스트 영역 -->
    <TipList></TipList>
  </div>
</template>
<script lang="ts">
/**
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5NDY4OTMzLCJqdGkiOiIzYTJiNzM3OThmMzc0OGJmYTAyYjE4NTZkYjA5OWY5MCIsInVzZXJfaWQiOjF9.9uNiHIJcHIUL_2cLXxC0A4MJz4RToVk58Ic-Ocx0mTg
 */
import Vue from "vue";
import TipList from "@/components/tip/TipList.vue";
import TipSubjectVue from "@/components/tip/TipSubject.vue";
import TipSearchOptionVue from "@/components/tip/TipSearchOption.vue";
// import { fetchTipList } from "@/api/tip";
// const TIP_NAMESPACENAME = "tip/";
export default Vue.extend({
  components: {
    TipList,
    TipSubjectVue,
    TipSearchOptionVue
  },
  methods: {},
  computed: {},
  async mounted() {
    // TIP 내용 조회

    const tipSearchOptions = await this.$store.getters[
      "tip/getTipSearchOptions"
    ];

    console.log("tipSearchOptions", tipSearchOptions);

    return tipSearchOptions;
    // fetchTipList();
    // TIPSearchOption 내용 조회
    // 다른 페이지에서 왔는지 조회
  }
});
</script>

<style lang="scss">
body {
  background: #f5f5f5;
  @include mobileVersion {
    background: #f3f3f3;
  }
}
div#tipList {
  @extend .container;
  margin-top: 44px;
  @include mobileVersion {
    margin-top: 24px;
  }
}
</style>
