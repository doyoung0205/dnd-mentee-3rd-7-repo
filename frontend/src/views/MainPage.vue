<template>
  <div class="main">
    <!-- 메인 캐러셀 -->
    <MainCarocel></MainCarocel>
    <!-- 실시간 인기 팁 -->
    <div id="tipList">
      <div class="tipList__header">
        <div class="tipList__h__caption">
          <h3>실시간 인기 팁</h3>
          <img
            class="tipList__arrow"
            src="../assets/images/tipListArrow.svg"
            alt="인기팁 방향"
          />
        </div>
        <div class="tipList__searchOption__contents">
          <div class="tipList__search__contents">
            <div class="tipList__searchTerm">
              <span>#검색어</span>
              <img src="../assets/images/x_white.svg" alt="검색어 취소 버튼" />
            </div>
            <div class="tipList__associative__contents">
              <h3 class="">추천</h3>
              <div class="tagList">
                <div class="tag__item">
                  <span>#키워드</span>
                </div>
                <div class="tag__item">
                  <span>#키워드</span>
                </div>
                <div class="tag__item">
                  <span>#키워드</span>
                </div>
                <div class="tag__item">
                  <span>#키워드</span>
                </div>
                <div class="tag__item">
                  <span>#키워드</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
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
                <img src="../assets/images/heart.svg" alt="좋아요 수 " />
                23</span
              >
              <span class="tip__commentCount">
                <img src="../assets/images/comment.svg" alt="댓글 수 " />
                23</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import MainCarocel from "../components/main/MainCarocel.vue";
export default Vue.extend({
  components: {
    MainCarocel
  },
  data() {
    return {
      dummyBackgroundImg: require(`@/assets/images/dummy.png`)
    };
  },
  methods: {},
  computed: {}
});
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
div#tipList {
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  margin-top: 68px;
  .tipList__h__caption {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 36px;
      line-height: 42px;
      color: #333333;
    }
    img {
      margin-top: 16px;
      cursor: pointer;
    }
  }
  .tipList__searchOption__contents {
    margin-top: 22px;
    .tipList__search__contents {
      display: flex;
      align-items: flex-end;
      margin-bottom: 34px;
    }
    // 검색어
    .tipList__searchTerm {
      background: linear-gradient(
        270deg,
        #5fac9a 13.39%,
        #65b8a4 35.41%,
        #72d1b9 80.51%
      );
      box-shadow: -6px -6px 18px #ffffff, 6px 6px 18px rgba(0, 0, 0, 0.17);
      border-radius: 53px;
      width: 237px;
      height: 81px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 36px;
        line-height: 42px;
        color: #ffffff;
      }
      img {
        margin-left: 8px;
      }
    }
    // 추천 관련
    .tipList__associative__contents {
      margin-left: 50px;
      display: flex;
      align-items: flex-end;
      h3 {
        font-size: 28px;
        line-height: 33px;
        color: #37444a;
        margin-right: 21px;
      }
      .tagList {
        display: flex;
        align-items: flex-end;

        .tag__item {
          width: 137px;
          height: 50px;
          background: #f5f5f5;
          box-shadow: -6px -6px 18px #ffffff, 6px 6px 18px rgba(0, 0, 0, 0.17);
          border-radius: 34.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 18px;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            box-shadow: inset 6px -6px 18px #ffffff,
              inset 6px 6px 18px rgba(0, 0, 0, 0.17);
          }
          span {
            font-size: 24px;
            line-height: 28px;
            text-align: center;
            color: #5fac9a;
          }
        }
      }
    }
  }
  // 팁 아이템
  .tip__item {
    display: flex;
    flex-direction: column;
    padding: 21px 43px;
    background: #f3f3f3;
    box-shadow: 12px 12px 18px rgba(0, 0, 0, 0.15), -12px -12px 18px #ffffff;
    border-radius: 14px;
    margin-bottom: 35px;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    h3.tip__subject {
      font-size: 36px;
      line-height: 42px;
      color: #272727;
    }

    span.tip__previewContent {
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
      color: #737373;
      margin-top: 15px;
      margin-bottom: 25px;
    }

    .tip__info__contents {
      font-weight: normal;
      font-size: 23px;
      line-height: 31px;
      color: #737373;
      line-height: 25px;
      display: flex;
      align-items: flex-end;

      span.tip__createdAt {
        margin-left: 54px;
      }
      span.tip__heartCount,
      .tip__commentCount {
        display: flex;
        align-items: flex-end;
      }
      span.tip__heartCount {
        margin-left: 54px;
        img {
          margin-right: 18px;
        }
      }
      span.tip__commentCount {
        margin-left: 34px;
        img {
          margin-right: 22px;
        }
      }
    }
  }
}
</style>
