<template>
  <div id="signModal" v-if="$store.state.signModal.show">
    <SignLayout>
      <template #header>
        <div id="signModal__header__wrap">
          <div class="signModal__header__container">
            <div class="signModal__header__logo">
              <router-link to="/" class="logo">
                <span>logo</span>
              </router-link>
            </div>
            <div class="signModal__header__close" @click.prevent="close">
              <span>close</span>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <SignInContainer
          v-if="isSignInView"
          @showSignUp="showSignUp"
        ></SignInContainer>
        <SignUpContainer v-if="isSignUpView"></SignUpContainer> </template
    ></SignLayout>
    <Toast></Toast>
  </div>
</template>

<script lang="ts">
import Toast from "@/components/common/Toast.vue";
import SignInContainer from "@/components/sign/SignInContainer.vue";
import SignLayout from "@/components/sign/SignLayout.vue";
import SignUpContainer from "@/components/sign/SignUpContainer.vue";
import Vue from "vue";

const signModalNameSpace = "signModal/";

export default Vue.extend({
  name: "SignModal",
  components: {
    SignLayout,
    SignInContainer,
    SignUpContainer,
    Toast
  },
  methods: {
    close() {
      this.$store.commit(`${signModalNameSpace}close`);
    },
    showSignUp() {
      this.$store.commit(`${signModalNameSpace}showSignUp`);
    }
  },
  computed: {
    isSignInView() {
      return this.$store.getters[`${signModalNameSpace}isSignInView`];
    },
    isSignUpView() {
      return this.$store.getters[`${signModalNameSpace}isSignUpView`];
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/sign.scss";
#signModal {
  width: 100%;
  z-index: 9999;
  position: absolute;
  background-color: #ffffff;
  top: 0;
  left: 0;
}

#signModal__header__wrap {
  width: 100%;
  position: fixed;
  top: 17px;
  z-index: 3333;
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
