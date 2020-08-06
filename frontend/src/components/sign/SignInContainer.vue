<template>
  <SignLayout>
    <template #header> this is header </template>
    <template #content> this is content </template>
  </SignLayout>
</template>

<script lang="ts">
import SignLayout from "@/components/sign/SignLayout.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SignInContainer",
  components: {
    SignLayout
  },
  created() {
    alert("asdf");
  }
});
</script>

<style></style>
