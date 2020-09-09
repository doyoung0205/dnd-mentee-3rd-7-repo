<template>
  <div class="tips__contents" v-if="tips != null">
    <div class="tip__item" v-for="tip in tips" :key="'tip_' + tip.id">
      <div class="tip__txt">
        <h3 class="tip__subject" v-text="tip.title">기저귀 버리실때 팁!</h3>
        <span class="tip__previewContent" v-text="tip.content"> </span>
        <div class="tip__info__contents">
          <span class="tip__writer" v-text="tip.username">닉네임</span>
          <span class="tip__createdAt" v-text="tip.date_created"
            >2020.08.03</span
          >
          <span class="tip__heartCount">
            <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
            {{ tip.number_of_likes }}</span
          >
          <span class="tip__commentCount">
            <img src="../../assets/images/comment.svg" alt="댓글 수 " />
            {{ tip.number_of_comments }}</span
          >
        </div>
      </div>
      <div class="tip__img">
        <img :src="tip.thumbnail" v-if="tip.thumbnail" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Tips } from "@/store/tip/types";
import Vue from "vue";
export default Vue.extend({
  props: {
    tips: {
      type: Array as () => Tips,
      required: true
    }
  },
  methods: {
    handleScroll() {
      //window height + window scrollY 값이 document height보다 클 경우,
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        //실행할 로직 (콘텐츠 추가)
        this.$emit("nextPage");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});
</script>

<style lang="scss">
.line-clamp {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 !important;
}
.line-clamp-1 {
  -webkit-line-clamp: 1;
  height: 24px;
}
.line-clamp-2 {
  -webkit-line-clamp: 2;
  height: 48px;
}
// 팁 아이템
.tip__item {
  display: flex;
  justify-content: space-between;
  background: #f3f3f3;
  box-shadow: 12px 12px 18px rgba(0, 0, 0, 0.15), -12px -12px 18px #ffffff;
  border-radius: 14px;
  margin-bottom: 23px;
  height: 170px;
  @include mobileVersion {
    height: 74px;
  }
  .tip__txt {
    display: flex;
    flex-direction: column;
    padding: 21px 43px;
    @include mobileVersion {
      padding: 8px 11px;
    }
  }
  .tip__img {
    min-width: 294px;
    width: 294px;
    @include mobileVersion {
      width: 98px;
      min-width: 98px;
      img {
        border-radius: 0 14px 14px 0;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  h3.tip__subject {
    font-size: 21px;
    line-height: 25px;
    color: #272727;
    @extend .line-clamp;
    -webkit-line-clamp: 1;
    height: 30px;
    @include mobileVersion {
      font-size: 14px;
      line-height: 16px;
    }
  }

  span.tip__previewContent {
    @extend .line-clamp;
    @extend .line-clamp-2;
    font-weight: normal;
    font-size: 15px;
    height: 52px;
    line-height: 150%;
    color: #737373;
    margin-top: 18px;
    margin-bottom: 18px;
    word-break: break-all;
    @include mobileVersion {
      -webkit-line-clamp: 1;
      height: 22px;
      font-size: 12px;
      line-height: 14px;
      margin-top: 9px;
      margin-bottom: 9px;
    }
  }

  .tip__info__contents {
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #737373;
    line-height: 25px;
    display: flex;
    align-items: flex-end;

    @include mobileVersion {
      font-size: 11px;
      line-height: 12px;
    }

    span.tip__createdAt {
      margin-left: 28px;
      @include mobileVersion {
        margin-left: 7px;
      }
    }
    span.tip__heartCount,
    .tip__commentCount {
      display: flex;
      align-items: flex-end;
      img {
        width: 24px;
        height: 24px;
        @include mobileVersion {
          width: 10px;
          height: 10px;
        }
      }
    }
    span.tip__heartCount {
      margin-left: 28px;
      @include mobileVersion {
        margin-left: 19px;
      }
      img {
        margin-right: 16px;
        @include mobileVersion {
          margin-right: 3px;
        }
      }
    }
    span.tip__commentCount {
      margin-left: 34px;
      @include mobileVersion {
        margin-left: 5px;
      }
      img {
        margin-right: 16px;
        @include mobileVersion {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
