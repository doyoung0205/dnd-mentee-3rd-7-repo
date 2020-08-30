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
    box-shadow: -6px -6px 18px #ffffff, 6px 6px 18px rgba(0, 0, 0, 0.17);
    border-radius: 53px;
    padding: 13px 18px 14px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }
    img {
      margin-left: 8px;
      width: 23px;
      height: 23px;
    }
  }
  // 추천 관련
  .tipList__associative__contents {
    margin-left: 50px;
    display: flex;
    align-items: flex-end;
    h3 {
      font-size: 18px;
      line-height: 21px;
      color: #37444a;
      margin-right: 21px;
    }
    .tagList {
      display: flex;
      align-items: flex-end;

      .tag__item {
        padding: 7px 16px;
        background: linear-gradient(
            0deg,
            rgba(55, 68, 74, 0.09),
            rgba(55, 68, 74, 0.09)
          ),
          #f3f3f3;
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
          font-size: 15px;
          line-height: 160%;
          text-align: center;
          color: #37444a;
        }
      }
    }
  }
}
</style>
