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

    <TipList :tips="[]"></TipList>
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
  computed: {},
  created() {
    // user 정보 가져오기
    //
  }
});
</script>

<style lang="scss">
#myPage__contents {
  @extend .container;
  .profile__contents {
    margin: 69px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @include mobileVersion {
      margin: 38px 0;
    }
    .level__image__contens {
      margin-right: 69px;
      width: 209px;
      height: 209px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      background: #f3f3f3;
      box-shadow: 12px 12px 18px rgba(0, 0, 0, 0.15), -12px -12px 18px #ffffff;
      border-radius: 166px;
      @include mobileVersion {
        width: 150px;
        height: 150px;
        margin-right: 42px;
      }
      img {
        width: 100%;
        @include mobileVersion {
          width: 104px;
          height: 107px;
        }
      }
    }
    .user__info {
      div {
        margin-bottom: 1.2vw;
        &:last-child {
          margin-bottom: 0;
        }
        > span {
          font-size: 21px;
          line-height: 25px;
          color: #333333;
          @include mobileVersion {
            font-size: 15px;
            line-height: 17px;
          }
        }
      }
      .user__name {
        display: flex;
        align-items: center;
        .nameChangeBtn {
          padding: 5px 14px;
          background: #37444a;
          border-radius: 12px;
          border: none;
          font-size: 15px;
          line-height: 18px;
          color: #f5f5f5;
          margin-left: 13px;
          word-break: keep-all;
          @include mobileVersion {
            font-weight: normal;
            font-size: 9px;
            line-height: 10px;
            padding: 2px 7px;
            margin-left: 9px;
          }
        }
      }
    }
  }
  .myTip__contents {
    margin-bottom: 44px;
    @include mobileVersion {
      margin-bottom: 24px;
    }
    .myTip__navigations {
      display: flex;
      justify-content: center;
      align-items: center;
      @include mobileVersion {
        justify-content: flex-start;
        > div {
          width: 50%;
        }
      }
      .myTip__nav__item {
        @extend .mot2;
        margin-right: 69px;
        cursor: pointer;
        position: relative;
        @include mobileVersion {
          margin-right: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        span {
          font-size: 21px;
          line-height: 25px;
          color: #c7c7c7;
          @include mobileVersion {
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
          }
        }
        &.active {
          span {
            color: #333333;
          }
          &::before {
            content: "";
            position: absolute;
            bottom: -7px;
            left: 0;
            width: 100%;
            height: 7px;
            background: #5fac9a;
            border-radius: 4.5px;
            @include mobileVersion {
              width: 64px;
              height: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
