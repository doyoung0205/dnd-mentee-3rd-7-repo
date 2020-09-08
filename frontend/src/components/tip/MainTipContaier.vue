<template>
  <div id="tipList">
    <!-- HEAD LINE -->
    <TipSubjectVue></TipSubjectVue>
    <!-- 검색어 + 추천 키워드 영역 -->
    <TipSearchOptionVue
      :tipSearchOptions="tipSearchOptions"
      :recommendHashTags="recommendHashTags"
    ></TipSearchOptionVue>
    <!-- 팁 리스트 영역 -->
    <TipList :tipList="tipList" @nextPage="nextPage"></TipList>
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
import { TipArray, TipSearchOption } from "@/store/tip/types";
import { TipListResp } from "@/api/tip/type";
// const TIP_NAMESPACENAME = "tip/";
export default Vue.extend({
  components: {
    TipList,
    TipSubjectVue,
    TipSearchOptionVue
  },
  data() {
    return {
      tipSearchOptions: this.$store.state.tip
        .tipSearchOption as TipSearchOption,
      tipList: (this.$store.state.tip.results as TipArray) || [],
      recommendHashTags: this.$store.state.tip.recommendHashTags
    };
  },
  methods: {
    nextPage() {
      //
    }
  },
  computed: {},
  async created() {
    // 만약 store 에서 팁 리스트가 초기화 되어있지 않다면?
    if (this.$store.getters["tip/isEmptyTipList"]) {
      // TIP 내용 조회
      const { results } = (await this.$store.dispatch(
        "tip/FETCH_TIP_LIST",
        {}
      )) as TipListResp;
      this.tipList = results;
    }
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
