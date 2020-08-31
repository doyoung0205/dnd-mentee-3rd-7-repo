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
  padding: 1.0938vw 2.2396vw;
  background: #f3f3f3;
  box-shadow: 0.625vw 0.625vw 0.9375vw rgba(0, 0, 0, 0.15),
    -0.625vw -0.625vw 0.9375vw #ffffff;
  border-radius: 0.7292vw;
  margin-bottom: 1.1979vw;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  h3.tip__subject {
    font-size: 1.0938vw;
    line-height: 1.3021vw;
    color: #272727;
  }
  span {
    font-size: 0.7813vw;
    line-height: 1.3021vw;
  }
  span.tip__previewContent {
    font-size: 0.7813vw;
    line-height: 150%;
    margin-top: 0.9375vw;
    margin-bottom: 0.9375vw;
  }

  .tip__info__contents {
    font-weight: normal;
    font-size: 0.7813vw;
    line-height: 1.3021vw;
    color: #737373;
    display: flex;
    align-items: flex-end;

    span.tip__createdAt {
      margin-left: 1.4583vw;
    }
    span.tip__heartCount,
    .tip__commentCount {
      display: flex;
      align-items: flex-end;
      img {
        width: 1.25vw;
        height: 1.25vw;
      }
    }
    span.tip__heartCount {
      margin-left: 1.4583vw;
      img {
        margin-right: 0.8333vw;
      }
    }
    span.tip__commentCount {
      margin-left: 1.7708vw;
      img {
        margin-right: 0.8333vw;
      }
    }
  }
}
</style>
