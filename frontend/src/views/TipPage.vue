<template>
  <div class="contianer">
    <div class="TipContainer">
      <section
        class="TipContainer__header TipContainer__header-center TipContainer__header-noBorder"
      >
        <div class="TipContainer__title">
          <span>{{ data.title }}</span>
        </div>
        <div>
          <span>{{ data.username }}</span
          ><span>{{ data.date_created }}</span>
        </div>
        <div class="tag-input">
          <div v-for="tag in data.hashtags" :key="tag" class="tag-input__tag">
            #{{ tag.name }}
          </div>
        </div>
      </section>
      <section id="TipContainer__content">
        {{ data.content }}
      </section>
      <section id="TipComment__section">
        <header id="TipComment__header">
          <span class="TipComment__number"
            >댓글 {{ data.number_of_comments }}</span
          >
          <div>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.71338 22.0393C6.75042 22.0483 5.7961 21.857 4.91097 21.4776C4.02584 21.0983 3.22922 20.539 2.57167 19.8355C1.76155 19.1651 1.11056 18.323 0.665818 17.3702C0.221076 16.4173 -0.00630303 15.3775 0.000132909 14.326C0.00542953 13.3809 0.192477 12.4457 0.551079 11.5713C0.825975 10.7573 1.26315 10.0076 1.83616 9.3675L5.50959 5.69407C5.94219 5.26349 6.45918 4.92704 7.02807 4.70589C7.59695 4.48474 8.20544 4.38365 8.81527 4.40899C10.1255 4.42454 11.3777 4.952 12.3041 5.87864C12.8004 6.34781 13.1888 6.91914 13.4425 7.55315C13.6963 8.18716 13.8093 8.86871 13.7738 9.55069C13.7991 10.1605 13.698 10.769 13.4769 11.3379C13.2557 11.9068 12.9193 12.4238 12.4887 12.8564L10.4681 14.6938C10.2167 14.9239 9.89016 15.0547 9.54941 15.0615C9.15349 15.0525 8.76949 14.9243 8.44752 14.6938C8.24393 14.3587 8.11825 13.9821 8.07976 13.5919C8.11825 13.2017 8.24393 12.8251 8.44752 12.49L10.4681 10.4694C10.6585 10.3607 10.8124 10.198 10.9105 10.0019C11.0085 9.80579 11.0463 9.58505 11.0191 9.3675C11.0181 9.05614 10.9523 8.74839 10.8259 8.46384C10.6995 8.17928 10.5153 7.92415 10.2849 7.71466C9.9068 7.45804 9.45648 7.32917 8.99984 7.34691C8.54665 7.35762 8.10376 7.48423 7.71338 7.71466L3.85676 11.3881C3.25411 12.2489 2.93315 13.2753 2.93805 14.326C2.98832 15.6288 3.51067 16.8688 4.4077 17.8149C4.90183 18.3501 5.53899 18.7325 6.24373 18.9168C6.82401 19.1587 7.46313 19.2224 8.07976 19.1C8.63071 18.9168 9.18165 18.9168 9.54941 18.7322C9.95643 18.5531 10.3293 18.3047 10.6513 17.9981L17.9968 10.6526C18.4243 10.2564 18.7607 9.77219 18.9828 9.23333C19.2049 8.69446 19.3074 8.11381 19.2833 7.53147C19.2636 6.86733 19.1066 6.21445 18.8221 5.61399C18.5377 5.01352 18.1319 4.47849 17.6304 4.04261C16.9557 3.56611 16.2127 3.1946 15.4266 2.94072H13.7738C13.3157 3.0452 12.8803 3.23187 12.4887 3.49166C12.1417 3.6412 11.7635 3.70407 11.3868 3.67485C11.1841 3.63964 10.9936 3.55375 10.8329 3.42516C10.6723 3.29656 10.5468 3.12944 10.4681 2.93934C10.2849 2.75615 10.2849 2.38839 10.2849 1.83745C10.4714 1.48929 10.7202 1.17835 11.0191 0.92012C12.1402 0.293096 13.4082 -0.0240061 14.6925 0.00141688C16.4626 -0.0316834 18.1758 0.627015 19.4678 1.83745C20.2458 2.53498 20.8746 3.38263 21.3165 4.32944C21.7584 5.27624 22.0043 6.30264 22.0394 7.34691C22.0832 8.32565 21.9264 9.30301 21.5787 10.2189C21.231 11.1349 20.6996 11.9701 20.0174 12.6732L12.6719 20.0187C12.0258 20.6743 11.253 21.1916 10.4005 21.539C9.54801 21.8864 8.63375 22.0566 7.71338 22.0393Z"
                fill="#5FAC9A"
              />
            </svg>

            <svg
              @click="like"
              class="svg-hover"
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2386 2.33616C20.6877 1.77833 20.0315 1.33543 19.3081 1.03314C18.5847 0.730853 17.8085 0.575195 17.0245 0.575195C16.2405 0.575195 15.4643 0.730853 14.7409 1.03314C14.0175 1.33543 13.3614 1.77833 12.8105 2.33616L11.984 3.16258L11.1576 2.33616C10.0393 1.21706 8.52214 0.588069 6.94002 0.587552C5.35789 0.587036 3.84036 1.21504 2.72126 2.3334C1.60217 3.45177 0.973173 4.96889 0.972657 6.55102C0.97214 8.13314 1.60014 9.65067 2.71851 10.7698L11.9758 20.027L21.2331 10.7698C21.7909 10.2189 22.2338 9.5627 22.5361 8.83931C22.8384 8.11593 22.994 7.33972 22.994 6.55572C22.994 5.77171 22.8384 4.99551 22.5361 4.27212C22.2338 3.54874 21.7909 2.89257 21.2331 2.34167"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="18.1793"
                  y1="12.716"
                  x2="5.09433"
                  y2="3.76313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5FAC9A" />
                  <stop offset="0.328125" stop-color="#65B8A4" />
                  <stop offset="1" stop-color="#72D1B9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </header>

        <div
          class="comment__item"
          v-for="comment in comments"
          :key="'comment' + comment.id"
        >
          <TipComment :comment="comment" />
        </div>

        <tip-comment-form :post="data.id" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TipTap from "@/components/TipTap.vue";
import Tags from "@/components/Tags.vue";
import TipComment from "@/components/tip/TipComment.vue";
import TipCommentForm from "@/components/tip/TipCommentForm.vue";
import { TipData, HashTag } from "@/api/tip/type";
import { Tip } from "@/store/tip/types";
import { WriteTip, GetTip, GetTipComments } from "@/api/tip";
import { LikeTip } from "@/api/like";
import { getAuthFromCookie } from "@/utils/cookies";
import { sign } from "@/store/sign/index";
import { SignState } from "@/store/sign/types";

export default Vue.extend({
  components: {
    TipComment,
    TipCommentForm
    // Tags
  },
  data() {
    return {
      data: { id: 0 } as Tip,
      comments: {} as Tip
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.data = (await GetTip(id)).data;
    this.comments = (await GetTipComments(id)).data;
  },
  methods: {
    async like() {
      const user = (sign.state as SignState).userId;
      console.log(await LikeTip({ user: Number(user), post: this.data.id }));
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tip";
@import "../assets/styles/tiptap/sass/main.scss";

.svg-hover {
  cursor: pointer;
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

#TipComment__section {
  margin: 0 auto;
  //overflow-y: scroll;
}

#TipContainer__content {
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#TipComment__header {
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;

  .TipComment__number {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
