<template>
  <div class="sign__container">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="sign__contents">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style></style>
