<template>
  <div class="signModal">
    <SignLayout>
      <template #header>
        <header class="ImageContainer"></header>
      </template>
      <template #content> <SignInContainer></SignInContainer></template
    ></SignLayout>
  </div>
</template>

<script lang="ts">
import SignInContainer from "@/components/sign/SignInContainer.vue";
import SignLayout from "@/components/sign/SignLayout.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SignModal",
  components: {
    SignLayout,
    SignInContainer
  }
});
</script>

<style lang="scss">
// @import "@/assets/styles/common.scss";
</style>
