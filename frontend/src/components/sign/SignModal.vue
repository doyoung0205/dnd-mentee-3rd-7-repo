<template>
  <div class="SignModal">
    <SignInContainer></SignInContainer>
  </div>
</template>

<script lang="ts">
import SignInContainer from "@/components/sign/SignInContainer.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SignModal",
  components: {
    SignInContainer
  }
});
</script>

<style></style>
