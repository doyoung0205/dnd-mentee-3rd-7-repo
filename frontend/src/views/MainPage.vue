<template>
  <div class="main">
    <!-- 메인 캐러셀 -->
    <MainCarocel></MainCarocel>
    <!-- 실시간 인기 팁 -->
    <div id="tipList">
      <TipSubjectVue></TipSubjectVue>
      <TipSearchOptionVue></TipSearchOptionVue>
      <TipList></TipList>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MainCarocel from "../components/main/MainCarocel.vue";
import TipList from "../components/tip/TipList.vue";
import TipSubjectVue from "../components/tip/TipSubject.vue";
import TipSearchOptionVue from "../components/tip/TipSearchOption.vue";

export default Vue.extend({
  components: {
    MainCarocel,
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
}
div#tipList {
  margin: 0 auto;
  max-width: 62.1875vw;
  width: 100%;
  margin-top: 44px;
}
</style>
