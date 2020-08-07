<template>
  <div id="app">
    <main>
      <slot />
    </main>
    <SignModal></SignModal>
  </div>
</template>

<script lang="ts">
import SignModal from "@/components/sign/SignModal.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    SignModal
  }
});
</script>

<style scoped></style>
