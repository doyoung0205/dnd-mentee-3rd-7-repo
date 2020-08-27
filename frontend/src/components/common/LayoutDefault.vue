<template>
  <div id="app">
    <main>
      <slot />
    </main>
    <SignModal></SignModal>
    <LoadingModal></LoadingModal>
  </div>
</template>

<script lang="ts">
import SignModal from "@/components/sign/SignModal.vue";
import LoadingModal from "@/components/common/LoadingModal.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    SignModal,
    LoadingModal
  }
});
</script>

<style scoped></style>
