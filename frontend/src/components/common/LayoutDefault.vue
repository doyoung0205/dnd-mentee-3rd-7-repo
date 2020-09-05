<template>
  <div id="app">
    <!-- HEADER -->
    <AppHeader></AppHeader>
    <main>
      <slot />
    </main>
    <AppFooter></AppFooter>
    <SignModal></SignModal>
    <LoadingModal></LoadingModal>
  </div>
</template>

<script lang="ts">
import SignModal from "@/components/sign/SignModal.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import LoadingModal from "@/components/common/LoadingModal.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    SignModal,
    AppHeader,
    AppFooter,
    LoadingModal
  }
});
</script>

<style scoped></style>
