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
import Vue from "vue";
import TipList from "@/components/tip/TipList.vue";
import TipSubjectVue from "@/components/tip/TipSubject.vue";
import TipSearchOptionVue from "@/components/tip/TipSearchOption.vue";
import { moveToTipList, searchTipsByQuery } from "@/use/useSearch";

export default Vue.extend({
  components: {
    TipList,
    TipSubjectVue,
    TipSearchOptionVue
  },
  data() {
    return {
      isTipLoading: false
    };
  },
  methods: {
    // 검색어 엔터 & 검색 아이콘 클릭시 검색하는 함수
    async searchTipsByQuery(query: string) {
      searchTipsByQuery(this.$store, query);
      // input 초기화
    },
    async nextPage() {
      // 다음페이지가 있는지 확인
      if (this.isTipLoading) {
        return false;
      }

      if (this.$store.getters["tip/hasNextTipList"]) {
        this.isTipLoading = true;
        await this.$store.dispatch("tip/NEXT_TIP_LIST");
        this.isTipLoading = false;
      }
      // 다음 페이지에 대한 데이터 조회 및 저장
    }
  },
  computed: {},
  async created() {
    // 만약 store 에서 팁 리스트가 초기화 되어있지 않다면?
    if (this.$store.getters["tip/isEmptyTipList"]) {
      // TIP 내용 조회
      await this.$store.dispatch("tip/FETCH_TIPS", {});
    }
  },
  async mounted() {
    // 스크롤 움직이여야 하는지 채크
    if (this.$store.getters["tip/isMoveScroll"]) {
      // TIP 내용 조회
      await moveToTipList();

      this.$store.commit("tip/setMoveScroll", false);
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
    margin-top: 0;
    padding-top: 24px;
  }
}
</style>
