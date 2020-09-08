<template>
  <div id="commentContainer">
    <div class="comment__content">
      <div class="comment__username">
        <p>{{ comment.username }}</p>
      </div>
      <div class="comment__main">{{ comment.content }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Tip } from "@/store/tip/types";
export default Vue.extend({
  props: {
    comment: {
      type: Object as () => Tip,
      required: true,
      default: {}
    }
  }
});
</script>

<style lang="scss">
#commentContainer {
  background-color: white;
  width: 100%;
  height: 95px;
  margin-top: 1em;

  .comment__username {
    padding: 1em;
  }
  .comment__main {
    padding: 1em;
    padding-top: 0;
    font-weight: 400;
  }
}
</style>
