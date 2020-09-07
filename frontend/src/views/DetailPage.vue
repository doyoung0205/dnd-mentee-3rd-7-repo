<template>
  <div class="contianer">
    <div class="formContainer">
      <section class="formContainer__header"></section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueJwtDecode from "vue-jwt-decode";
import TipTap from "@/components/TipTap.vue";
import Tags from "@/components/Tags.vue";
import { TipData, HashTag } from "@/api/tip/type";
import { WriteTip } from "@/api/tip";
import { getAuthFromCookie } from "@/utils/cookies";

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.formContainer {
  position: absolute;
  width: 62vw;
  height: 86vh;
  left: 19vw;
  top: 80px;
  padding: 35px;

  background: #f3f3f3;
  box-shadow: 10px 10px 15px rgba(55, 68, 74, 0.15), -10px -10px 15px #ffffff;
  border-radius: 14px;

  .formContainer__header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #c4c4c4;
  }

  #formContainer__title {
    background: #f3f3f3;
  }
  .formContainer__button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 375px) {
  .formContainer {
    left: 4vw;
    width: 92vw;
  }
}
</style>
