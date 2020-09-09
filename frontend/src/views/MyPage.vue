<template>
  <div id="myPage__contents">
    <!-- 프로필 영역 -->
    <UserProfileContainer></UserProfileContainer>
    <!-- 팁 리스트 영역 -->
    <UserMyTipContainer></UserMyTipContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserProfileContainer from "@/components/user/UserProfileContainer.vue";
import UserMyTipContainer from "@/components/user/UserMyTipContainer.vue";

export default Vue.extend({
  components: {
    UserProfileContainer,
    UserMyTipContainer
  },
  methods: {},
  computed: {},
  created() {
    //
  }
});
</script>

<style lang="scss">
#myPage__contents {
  @extend .container;
}
</style>
