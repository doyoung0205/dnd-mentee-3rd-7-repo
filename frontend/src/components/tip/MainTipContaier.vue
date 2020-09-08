<template>
  <div id="tips">
    <!-- HEAD LINE -->
    <TipSubjectVue></TipSubjectVue>
    <!-- 검색어 + 추천 키워드 영역 -->
    <TipSearchOptionVue
      :tipSearchOptions="this.$store.state.tip.tipSearchOption"
      :recommendHashTags="this.$store.state.tip.recommendHashTags"
      @searchTipsByQuery="searchTipsByQuery"
    ></TipSearchOptionVue>
    <!-- 팁 리스트 영역 -->
    <TipList
      :tips="this.$store.state.tip.results"
      @nextPage="nextPage"
    ></TipList>
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
import { searchTipsByQuery } from "@/use/useSearch";
// import { Tips, TipSearchOption } from "@/store/tip/types";
// import { TipFetchResp } from "@/api/tip/type";
// const TIP_NAMESPACENAME = "tip/";
export default Vue.extend({
  components: {
    TipList,
    TipSubjectVue,
    TipSearchOptionVue
  },
  methods: {
    // 검색어 엔터 & 검색 아이콘 클릭시 검색하는 함수
    async searchTipsByQuery(query: string) {
      searchTipsByQuery(this.$store, query);
      // input 초기화
    },
    nextPage() {
      //
    }
  },
  computed: {},
  async created() {
    // 만약 store 에서 팁 리스트가 초기화 되어있지 않다면?
    if (this.$store.getters["tip/isEmptyTipList"]) {
      // TIP 내용 조회
      await this.$store.dispatch("tip/FETCH_TIPS", {});
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
div#tips {
  @extend .container;
  margin-top: 44px;
  @include mobileVersion {
    margin-top: 24px;
  }
}
</style>
