<template>
  <div class="contianer">
    <div class="formContainer">
      <section class="formContainer__header">
        <input
          id="formContainer__title"
          type="text"
          v-model="title"
          placeholder="제목"
        />
        <button class="formContainer__button" @click="write">
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
import TipTap from "@/components/TipTap.vue";
import Tags from "@/components/Tags.vue";

export default Vue.extend({
  components: {
    TipTap,
    Tags
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    write() {
      console.log((this.$refs.contentInput as any).getContent());
      console.log((this.$refs.tags as any).getTags());
    }
  }
});
</script>

<style lang="scss" scoped>
.formContainer {
  position: absolute;
  width: 62vw;
  height: 86vh;
  left: 19vw;
  top: 80px;
  padding: 35px;

  background: #f3f3f3;
  box-shadow: 10px 10px 15px rgba(55, 68, 74, 0.15), -10px -10px 15px #ffffff;
  border-radius: 14px;

  .formContainer__header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #c4c4c4;
  }

  #formContainer__title {
    background: #f3f3f3;
  }
  .formContainer__button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 375px) {
  .formContainer {
    left: 4vw;
    width: 92vw;
  }
}
</style>
