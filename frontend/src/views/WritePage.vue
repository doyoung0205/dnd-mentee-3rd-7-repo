<template>
  <div class="contianer">
    <div class="TipContainer">
      <section class="TipContainer__header">
        <input
          id="TipContainer__title"
          type="text"
          v-model="tipData.title"
          placeholder="제목"
        />
        <button class="TipContainer__button" @click="write">
          <span class="button__text">
            발행
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="14" r="10" fill="#5FAC9A" fill-opacity="0.7" />
            <path
              d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
              stroke="#37444A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4L12 14.01L9 11.01"
              stroke="#37444A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </section>
      <TipTap ref="contentInput"></TipTap>

      <div>
        <Tags ref="tags" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueJwtDecode from "vue-jwt-decode";
import TipTap from "@/components/TipTap.vue";
import Tags from "@/components/Tags.vue";
import { TipData, HashTag } from "@/api/tip/type";
import { WriteTip } from "@/api/tip";
import { getAuthFromCookie } from "@/utils/cookies";

export default Vue.extend({
  components: {
    TipTap,
    Tags
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
      this.tipData.content = (this.$refs.contentInput as any).getContent();
      this.tipData.user = VueJwtDecode.decode(getAuthFromCookie()).user_id;
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
#TipContainer__title {
  background: #f3f3f3;
}
.TipContainer__button {
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
}
</style>
