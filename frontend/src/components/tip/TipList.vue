<template>
  <div class="tipList__contents">
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
    <div
      class="tip__item"
      :style="{ backgroundImage: `url(${dummyBackgroundImg})` }"
    >
      <h3 class="tip__subject">기저귀 버리실때 팁!</h3>
      <span class="tip__previewContent"
        >기저귀버리실때 팁을 가르쳐드릴 기저귀버리실때 팁을 가르쳐드릴
        기저귀버리실때ㄹ
      </span>
      <div class="tip__info__contents">
        <span class="tip__writer">닉네임</span>
        <span class="tip__createdAt">2020.08.03</span>
        <span class="tip__heartCount">
          <img src="../../assets/images/heart.svg" alt="좋아요 수 " />
          23</span
        >
        <span class="tip__commentCount">
          <img src="../../assets/images/comment.svg" alt="댓글 수 " />
          23</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      dummyBackgroundImg: require(`@/assets/images/dummy.png`)
    };
  }
});
</script>

<style lang="scss">
// 팁 아이템
.tip__item {
  display: flex;
  flex-direction: column;
  padding: 21px 43px;
  background: #f3f3f3;
  box-shadow: 12px 12px 18px rgba(0, 0, 0, 0.15), -12px -12px 18px #ffffff;
  border-radius: 14px;
  margin-bottom: 23px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  h3.tip__subject {
    font-size: 21px;
    line-height: 25px;
    color: #272727;
  }

  span.tip__previewContent {
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #737373;
    margin-top: 18px;
    margin-bottom: 18px;
  }

  .tip__info__contents {
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #737373;
    line-height: 25px;
    display: flex;
    align-items: flex-end;

    span.tip__createdAt {
      margin-left: 28px;
    }
    span.tip__heartCount,
    .tip__commentCount {
      display: flex;
      align-items: flex-end;
      img {
        width: 24px;
        height: 24px;
      }
    }
    span.tip__heartCount {
      margin-left: 28px;
      img {
        margin-right: 16px;
      }
    }
    span.tip__commentCount {
      margin-left: 34px;
      img {
        margin-right: 16px;
      }
    }
  }
}
</style>
