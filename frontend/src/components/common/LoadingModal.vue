<template>
  <div id="loadingModal" v-if="$store.state.loadingModal.show">
    <SignLayout>
      <template #header> </template>
      <template #content>
        <section class="IMGBLOCK">
          <div class="IMGBLOCK__RightCorner"></div>
        </section>

        <section class="IMGBLOCK">
          <div class="IMGBLOCK__UpperLeft"></div>
        </section>
        <section class="IMGBLOCK">
          <div class="IMGBLOCK__LowerLeft IMGBLOCK__LowerLeft-loading"></div>
        </section>

        <section class="IMGBLOCK">
          <div
            class="IMGBLOCK__Character IMGBLOCK__Character-loading"
          ></div></section
      ></template>
    </SignLayout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SignLayout from "@/components/sign/SignLayout.vue";
export default Vue.extend({
  name: "LoadingModal",
  components: {
    SignLayout
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/background.scss";
@keyframes MoveUpDown {
  100% {
    transform: translateY(90px);
  }
  0% {
    transform: translateY(250px);
  }
}

#loadingModal {
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
}

.IMGBLOCK__LowerLeft-loading {
  width: 100vw;
  background-position: -89px 47px;
}

.IMGBLOCK__Character-loading {
  animation: MoveUpDown 0.8s linear infinite;
  background-size: 50% 50%;
}
</style>
