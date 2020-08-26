<template>
  <LayoutDefault>
    <router-view />
  </LayoutDefault>
</template>

<script lang="ts">
import LayoutDefault from "@/components/common/LayoutDefault.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    LayoutDefault
  }
});
</script>

<style lang="scss"></style>
