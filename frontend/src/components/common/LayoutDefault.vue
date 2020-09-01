<template>
  <div id="app">
    <!-- HEADER -->
    <AppHeader></AppHeader>
    <main>
      <slot />
    </main>
    <AppFooter></AppFooter>
    <SignModal></SignModal>
  </div>
</template>

<script lang="ts">
import SignModal from "@/components/sign/SignModal.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter,
    SignModal
  }
});
</script>

<style scoped></style>
