<template>
  <div id="app">
    <!-- HEADER -->
    <AppHeader></AppHeader>
    <main>
      <slot />
    </main>
    <SignModal></SignModal>
  </div>
</template>

<script lang="ts">
import SignModal from "@/components/sign/SignModal.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    AppHeader,
    SignModal
  }
});
</script>

<style scoped></style>
