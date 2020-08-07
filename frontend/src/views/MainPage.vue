<template>
  <div>
    HELLO 7조
    <button @click="showSignUp">회원가입 보기</button>
    <button @click="showSignIn">로그인 보기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const signModalNameSpace = "signModal/";
export default Vue.extend({
  methods: {
    showSignIn() {
      this.$store.commit(`${signModalNameSpace}showSignIn`);
    },
    showSignUp() {
      this.$store.commit(`${signModalNameSpace}showSignUp`);
    }
  }
});
</script>

<style></style>
