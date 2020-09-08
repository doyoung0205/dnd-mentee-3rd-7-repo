<template>
  <div class="main">
    <!-- 메인 캐러셀 -->
    <MainCarocel></MainCarocel>
    <!-- 실시간 인기 팁 -->
    <MainTipContainer></MainTipContainer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MainCarocel from "@/components/main/MainCarocel.vue";
import MainTipContainer from "@/components/tip/MainTipContaier.vue";
export default Vue.extend({
  components: {
    MainCarocel,
    MainTipContainer
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
