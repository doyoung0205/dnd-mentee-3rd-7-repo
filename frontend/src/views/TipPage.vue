<template>
  <div class="contianer">
    <div class="TipContainer">
      <section class="TipContainer__header TipContainer__header-noBorder">
        제목제목제목
      </section>
      <section id="TipContainer__content"></section>
      <section id="TipComment__section">
        <header id="TipComment__number">댓글 2</header>
        <TipComment />
        <TipComment />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TipTap from "@/components/TipTap.vue";
import Tags from "@/components/Tags.vue";
import TipComment from "@/components/tip/TipComment.vue";
import { TipData, HashTag } from "@/api/tip/type";
import { WriteTip } from "@/api/tip";
import { getAuthFromCookie } from "@/utils/cookies";

export default Vue.extend({
  components: {
    TipComment
    // Tags
  },
  data() {
    return {
      tipData: {
        title: "",
        content: "",
        user: 0,
        thumbnail: "",
        hashtags: [] as HashTag[]
      } as TipData
    };
  },
  methods: {
    async write() {
      const tags = (this.$refs.tags as any).getTags();
      tags.forEach((tag: string, idx: number) => {
        const tip = { id: idx, name: tag };
        this.tipData.hashtags.push(tip);
      });

      console.log(await WriteTip(this.tipData));
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tip";
@import "../assets/styles/tiptap/sass/main.scss";

#TipComment__section {
  margin: 0 auto;
  overflow-y: scroll;
}

#TipContainer__content {
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#TipComment__number {
  margin-bottom: 1em;
}
</style>
