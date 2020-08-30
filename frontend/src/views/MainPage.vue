<template>
  <div class="main">
    <!-- 메인 캐러셀 -->
    <MainCarocel></MainCarocel>
    <!-- 실시간 인기 팁 -->
    <TipList></TipList>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MainCarocel from "../components/main/MainCarocel.vue";
import TipList from "../components/tip/TipList.vue";
export default Vue.extend({
  components: {
    MainCarocel,
    TipList
  },
  methods: {},
  computed: {}
});
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>
