<template>
  <div class="tipList__searchOption__contents">
    <div class="tipList__search__contents">
      <div class="tipList__searchTerm">
        <span>#검색어</span>
        <img src="../../assets/images/x_white.svg" alt="검색어 취소 버튼" />
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
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.tipList__searchOption__contents {
  margin-top: 9px;
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
    box-shadow: -0.3125vw -0.3125vw 0.9375vw #ffffff,
      0.3125vw 0.3125vw 0.9375vw rgba(0, 0, 0, 0.17);
    border-radius: 2.7604vw;
    padding: 0.6771vw 0.9375vw 0.7292vw 1.6667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 1.0938vw;
      line-height: 1.3021vw;
      color: #ffffff;
    }
    img {
      margin-left: 0.4167vw;
      width: 1.1979vw;
      height: 1.1979vw;
    }
  }
  // 추천 관련
  .tipList__associative__contents {
    margin-left: 2.6042vw;
    display: flex;
    align-items: flex-end;
    h3 {
      font-size: 0.9375vw;
      line-height: 1.0938vw;
      margin-right: 1.0938vw;
      color: #37444a;
    }
    .tagList {
      display: flex;
      align-items: flex-end;

      .tag__item {
        padding: 0.3646vw 0.8333vw;
        border-radius: 1.7969vw;
        background: linear-gradient(
            0deg,
            rgba(55, 68, 74, 0.09),
            rgba(55, 68, 74, 0.09)
          ),
          #f3f3f3;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.9375vw;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          box-shadow: inset 0.3125vw -0.3125vw 0.9375vw #ffffff,
            inset 0.3125vw 0.3125vw 0.9375vw rgba(0, 0, 0, 0.17);
        }
        span {
          font-size: 0.7813vw;
          line-height: 160%;
          text-align: center;
          color: #37444a;
        }
      }
    }
  }
}
</style>
