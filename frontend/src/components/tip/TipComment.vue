<template>
  <div id="commentContainer">
    <div class="comment__content">
      <div class="comment__username"><p>그린이</p></div>
      <div class="comment__main">댓굴댓굴</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
