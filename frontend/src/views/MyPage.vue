<template>
  <div id="myPage__contents">
    <!-- 프로필 영역 -->
    <div class="profile__contents">
      <div class="level__image__contens">
        <div class="level__image__wrap">
          <img src="@/assets/images/level1.svg" alt="레벨 이미지" />
        </div>
      </div>
      <div class="user__info">
        <div class="user__level">
          <span>Lv.1</span>
        </div>
        <div class="user__name">
          <span>닉네임</span>
          <button class="nameChangeBtn">변경</button>
        </div>
        <div class="user__id"><span>Tjstos13</span></div>
      </div>
    </div>
    <!-- 팁 리스트 영역 -->
    <div class="myTip__contents">
      <div class="myTip__navigations">
        <div class="myTip__nav__item active">
          <span>저장한 팁</span>
        </div>
        <div class="myTip__nav__item">
          <span>작성한 팁</span>
        </div>
      </div>
    </div>

    <tip-list></tip-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TipList from "@/components/tip/TipList.vue";
export default Vue.extend({
  components: {
    TipList
  },
  methods: {},
  computed: {}
});
</script>

<style lang="scss">
#myPage__contents {
  margin: 0 auto;
  max-width: 62.1875vw;
  width: 100%;

  .profile__contents {
    margin: 3.6vw 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .level__image__contens {
      margin-right: 3.6vw;
      width: 10.9vw;
      height: 10.9vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      background: #f3f3f3;
      box-shadow: 0.625vw 0.625vw 0.9375vw rgba(0, 0, 0, 0.15),
        -0.625vw -0.625vw 0.9375vw #ffffff;
      border-radius: 8.6458vw;
      img {
        width: 100%;
      }
    }
    .user__info {
      div {
        margin-bottom: 1.2vw;
        &:last-child {
          margin-bottom: 0;
        }
        > span {
          font-size: 1.0938vw;
          line-height: 1.3021vw;
          color: #333333;
        }
      }
      .user__name {
        display: flex;
        align-items: center;
        .nameChangeBtn {
          padding: 0.2604vw 0.7292vw;
          border-radius: 0.625vw;
          font-size: 0.7813vw;
          line-height: 0.9375vw;
          margin-left: 0.6771vw;
          background: #37444a;
          border: none;
          color: #f5f5f5;
        }
      }
    }
  }
  .myTip__contents {
    margin-bottom: 2.2917vw;
    .myTip__navigations {
      display: flex;
      justify-content: center;
      align-items: center;
      .myTip__nav__item {
        @extend .mot2;
        margin-right: 3.6vw;
        cursor: pointer;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        span {
          font-size: 1.0938vw;
          line-height: 1.3021vw;
          color: #c7c7c7;
        }
        &.active {
          span {
            color: #333333;
          }
          &::before {
            content: "";
            position: absolute;
            bottom: -0.58vh;
            left: 0;
            width: 100%;
            height: 0.58vh;
            background: #5fac9a;
            border-radius: 0.2344vw;
          }
        }
      }
    }
  }
}
</style>
