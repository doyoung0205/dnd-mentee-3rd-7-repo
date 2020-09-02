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
import Vue from "vue";
import TipList from "@/components/tip/TipList.vue";
import TipSubjectVue from "@/components/tip/TipSubject.vue";
import TipSearchOptionVue from "@/components/tip/TipSearchOption.vue";

export default Vue.extend({
  components: {
    TipList,
    TipSubjectVue,
    TipSearchOptionVue
  },
  methods: {},
  computed: {}
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
