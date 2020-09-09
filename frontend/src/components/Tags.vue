<template>
  <div class="tagContainer">
    <div class="tag-input__header">키워드 생성</div>
    <div class="tag-input">
      <div v-for="(tag, index) in tags" :key="tag" class="tag-input__tag">
        <span @click="removeTag(index)">x</span>
        {{ tag }}
      </div>
      <input
        type="text"
        placeholder="Enter a Tag"
        v-model="tag"
        class="tag-input__text"
        @keydown.enter="addTag"
        @keydown.188="addTag"
        @keydown.delete="removeLastTag"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      tag: "",
      tags: [] as string[]
    };
  },
  methods: {
    addTag(): void {
      if (this.tag.length > 0 && !this.tags.includes(this.tag)) {
        this.tags.push(this.tag);
      }
      this.tag = "";
    },
    removeTag(index: number): void {
      this.tags.splice(index, 1);
    },
    removeLastTag(): void {
      if (this.tag.length === 0) {
        this.removeTag(this.tags.length - 1);
      }
    },
    getTags() {
      return this.tags;
    }
  }
});
</script>
<style lang="scss" scoped>
.tagContainer {
  display: flex;
  flex-direction: row;

  .tag-input__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
    font-weight: 400;
    font-size: 15px;
    width: 120px;
  }
  .tag-input {
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    font-size: 0.9em;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .tag-input__tag {
    height: 30px;
    float: left;
    margin-right: 10px;
    background: linear-gradient(
        0deg,
        rgba(55, 68, 74, 0.09),
        rgba(55, 68, 74, 0.09)
      ),
      #f3f3f3;
    border-radius: 34.5px;
    margin-top: 10px;
    line-height: 30px;
    padding: 0 5px;
  }

  .tag-input__tag > span {
    cursor: pointer;
    opacity: 0.75;
  }

  .tag-input__text {
    border: none;
    outline: none;
    font-size: 0.9em;
    line-height: 50px;
    background: none;
  }
}

@media screen and (max-width: 375px) {
  .tagContainer {
    flex-direction: column;
    top: 55vh;
    .tag-input__header {
      justify-content: end;
    }
  }
}
</style>
