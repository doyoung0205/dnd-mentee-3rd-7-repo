<template>
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
        <span v-text="this.$store.state.user.userInfo.username">닉네임</span>
        <!-- <button class="nameChangeBtn">변경</button> -->
      </div>
      <div class="user__id" v-text="this.$store.state.user.userInfo.email">
        <span>Tjstos13</span>
      </div>
      <div class="logout__wrap">
        <button class="logout__btn" @click="logout">
          <span>로그아웃</span>
          <img src="@/assets/images/arrow737373.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { tokenLiackList } from "@/api/token";
import { TokenRef } from "@/api/token/type";
import Vue from "vue";

export default Vue.extend({
  components: {},
  methods: {
    async logout() {
      try {
        // 현재 토큰 블랙리스트에 추가
        const refreshToken = localStorage.getItem("refreshToken");
        await tokenLiackList({
          refresh: refreshToken
        } as TokenRef);
        // 유저랑 관련된 STORE 초기화
        this.initStoreRelatedToUsers();
        // 메인페이지로 이동
        this.$router.push("/");
      } catch (error) {
        console.log("error", error);
      }
    },
    initStoreRelatedToUsers() {
      this.$store.commit("tip/clearHistories");
      this.$store.commit("clearSignState");
      this.$store.commit("user/clearUserState");
    }
  },
  computed: {},
  created() {
    const isEmptyUserInfo = this.$store.getters["user/isEmptyUserInfo"];
    const isLogin = this.$store.getters["isLogin"];
    if (isEmptyUserInfo && isLogin) {
      const userId = this.$store.getters["getUserId"];
      this.$store.dispatch("user/FETCH_USER_BY_ID", userId);
    }
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
      .logout__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: inherit;
        padding: 0;
        span {
          font-size: 15px;
          line-height: 15px;
          color: #737373;
          @include mobileVersion {
            font-size: 12px;
            line-height: 15px;
          }
        }
        img {
          @include mobileVersion {
            width: 19px;
            height: 19px;
          }
        }
      }
    }
  }
}
</style>
