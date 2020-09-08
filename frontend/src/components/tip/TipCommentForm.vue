<template>
  <div id="commentContainer">
    <div class="comment__content">
      <div class="comment__username"></div>
      <div class="comment__main">
        <textarea v-model="data.content" class="comment__textarea"></textarea>
        <button @click="postComment">댓글달기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { WriteTipComments } from "@/api/comment";
export default Vue.extend({
  props: {
    post: { type: Number, required: true }
  },
  data() {
    return {
      data: { content: "", user: 102, post: 0 }
    };
  },
  methods: {
    async postComment() {
      this.data.post = this.post;
      await WriteTipComments(this.data);
    }
  }
});
</script>

<style lang="scss">
#commentContainer {
  background-color: white;
  width: 100%;
  min-height: 95px;
  margin-top: 1em;

  .comment__username {
    padding: 1em;
  }
  .comment__main {
    padding: 1em;
    padding-top: 0;
    font-weight: 400;

    .comment__textarea {
      width: 100%;
    }
  }
}
</style>
