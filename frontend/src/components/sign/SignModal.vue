<template>
  <div class="signModal">
    <SignLayout>
      <template #header>
        <div id="signModal__header__wrap">
          <div class="signModal__header__container">
            <div class="signModal__header__logo"><span>logo</span></div>
            <div class="signModal__header__close"><span>close</span></div>
          </div>
        </div>
      </template>
      <template #content> <SignInContainer></SignInContainer></template
    ></SignLayout>
    <Doast></Doast>
  </div>
</template>

<script lang="ts">
import Doast from "@/components/common/Doast.vue";
import SignInContainer from "@/components/sign/SignInContainer.vue";
import SignLayout from "@/components/sign/SignLayout.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SignModal",
  components: {
    SignLayout,
    SignInContainer,
    Doast
  }
});
</script>

<style lang="scss">
#signModal__header__wrap {
  width: 100%;
  position: fixed;
  top: 17px;
  .signModal__header__container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    .signModal__header__logo {
      @extend .backgroundImage--center;
      width: 58.1px;
      height: 20.1px;
      background-image: url("../../assets/images/406.svg");
      span {
        @extend .txt-hidden;
      }
    }
    .signModal__header__close {
      @extend .backgroundImage--center;
      width: 20px;
      height: 20px;
      position: absolute;
      background-image: url("../../assets/images/372.svg");
      right: 16px;
      top: 50%;
      transform: translate(0, -50%);

      span {
        @extend .txt-hidden;
      }
    }
  }
}
</style>
