<template>
  <div id="loadingModal" v-if="$store.state.loadingModal.show">
    <section class="IMGBLOCK">
      <div class="IMGBLOCK__RightCorner"></div>
    </section>

    <section class="IMGBLOCK">
      <div class="IMGBLOCK__UpperLeft"></div>
    </section>
    <section class="IMGBLOCK">
      <div class="IMGBLOCK__LowerLeft"></div>
    </section>

    <section class="IMGBLOCK">
      <div class="IMGBLOCK__Character"></div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.IMGBLOCK {
  z-index: -1;
  position: absolute;
  top: 0;
}
.IMGBLOCK__RightCorner {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  margin-right: 0;
  margin-left: 50vw;
  position: absolute;
  background-position: -21px -212px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/upperrightcornerPlanet.svg");
}
.IMGBLOCK__UpperLeft {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  margin-right: 0;
  position: absolute;
  background-position: -44px 60px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/upperleftPlanet.svg");
}

.IMGBLOCK__LowerLeft {
  z-index: -1;
  width: 82vw;
  z-index: -1;
  height: 50vh;
  margin-right: 0;
  position: absolute;
  background-position: -245px 117px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/lowerleftPlanet.svg");
  margin-top: 50vh;
}

.IMGBLOCK__Character {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  position: absolute;
  margin-left: 25vw;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(/img/group_404.c2f607ec.svg);
}
</style>
