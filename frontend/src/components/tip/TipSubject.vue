<template>
  <div class="tipList__header">
    <div class="tipList__h__caption">
      <h3>실시간 인기 팁</h3>
      <img
        class="tipList__arrow"
        src="../../assets/images/tipListArrow.svg"
        alt="인기팁 방향"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss">
.tipList__h__caption {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 24px;
    line-height: 28px;
    color: #333333;
  }
  img {
    margin-top: 7px;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
}
</style>
