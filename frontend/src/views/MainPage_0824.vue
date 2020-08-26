<template>
  <header>
    <div class="navigations">
      <!-- 로그인 상태일 떄 -->
      <template v-if="isUserLogin">
        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
      </template>
      <!-- 로그인 상태이지 않을 떄 -->
      <template v-else>
        <button @click="showSignIn">로그인</button>
        <button @click="showSignUp">회원가입</button>
      </template>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
import { deleteCookie } from "@/utils/cookies";

const signModalNameSpace = "signModal/";
export default Vue.extend({
  methods: {
    showSignIn() {
      this.$store.commit(`${signModalNameSpace}showSignIn`);
    },
    showSignUp() {
      this.$store.commit(`${signModalNameSpace}showSignUp`);
    },
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("greene_auth");
      deleteCookie("greene_user");
    }
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  }
});
</script>

<style></style>
