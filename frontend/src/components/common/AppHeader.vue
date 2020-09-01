<template>
  <!-- HEADER -->
  <header id="header">
    <div class="header__contents">
      <router-link to="/">
        <div class="header__logo">
          로고이미지
        </div>
      </router-link>
      <div class="header__navigations">
        <ul>
          <li class="header__nav__item__intro">
            <router-link to="/intro">그린이소개</router-link>
          </li>
          <li class="header__nav__item__tip">
            <router-link to="">팁쓰기</router-link>
          </li>
          <!-- 로그인 상태일 떄 -->
          <template v-if="isUserLogin">
            <li class="header__nav__item__myPage">
              <router-link to="/mypage">이페이지</router-link>
            </li>
          </template>
          <!-- 로그인 상태이지 않을 떄 -->
          <template v-else>
            <li class="header__nav__item__login">
              <router-link to="">회원가입/로그인</router-link>
            </li>
          </template>
          <li class="header__nav__item__search" @click="searchWindowOpen">
            <router-link to="">검색이미지</router-link>
          </li>
        </ul>
      </div>
      <div id="search" v-if="isSearching">
        <div class="search__overlay" @click="searchWindowClose"></div>
        <div class="search__contents__container">
          <div class="search__contents">
            <div class="search__input__container">
              <div class="search__input">
                <input type="text" />
                <img
                  class="searchIcon"
                  src="../../assets/images/search-icon.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="search__history">
              <ul>
                <li>
                  <span>쓰레기통</span>
                  <img
                    src="../../assets/images/deleteBtn.svg"
                    alt=""
                    class="sarch__delete__btn"
                  />
                </li>
                <li>
                  <span>티백 쓰레기</span>
                  <img
                    src="../../assets/images/deleteBtn.svg"
                    alt=""
                    class="sarch__delete__btn"
                  />
                </li>
                <li>
                  <span>홍합</span>
                  <img
                    src="../../assets/images/deleteBtn.svg"
                    alt=""
                    class="sarch__delete__btn"
                  />
                </li>
              </ul>
            </div>
            <!-- <hr /> -->
            <div class="search__recommend__container">
              <div class="search__recommend">
                <h3 class="search_comment">추천 해시태그로 검색해 보세요</h3>
                <div class="search__hashTags">
                  <div class="search__hashTag">
                    #키워드
                  </div>
                  <div class="search__hashTag">
                    #키워드
                  </div>
                  <div class="search__hashTag">
                    #키워드
                  </div>
                  <div class="search__hashTag">
                    #키워드
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
import { deleteCookie } from "@/utils/cookies";

const signModalNameSpace = "signModal/";
export default Vue.extend({
  data() {
    return {
      isSearching: false
    };
  },
  methods: {
    showSignIn() {
      this.$store.commit(`${signModalNameSpace}showSignIn`);
    },
    showSignUp() {
      this.$store.commit(`${signModalNameSpace}showSignUp`);
    },
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("greene_auth");
      deleteCookie("greene_user");
    },
    searchWindowOpen() {
      this.isSearching = true;
    },
    searchWindowClose() {
      this.isSearching = false;
    }
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  }
});
</script>

<style lang="scss">
.text--hidden {
  text-indent: -9999px;
  text-decoration: none;
  display: block;
}
.image--center {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
/* ============================= HEADER  ============================= */
#header {
  width: 100%;
  height: 2.6042vw;
  .header__contents {
    margin: 0 auto;
    max-width: 62.1875vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    @extend .text--hidden;
    @extend .image--center;
    width: 3.125vw;
    height: 1.0938vw;
    cursor: pointer;
    background-image: url("../../assets/images/logo.svg");
  }

  .header__navigations {
    font-size: 0.9375vw;
    line-height: 1.0938vw;

    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 3.3854vw;
        &:first-child {
          margin-left: 0;
        }
        // 검색이미지
        &.header__nav__item__search {
          @extend .text--hidden;
          @extend .image--center;
          cursor: pointer;
          margin-top: 0.4167vw;
          width: 1.8229vw;
          height: 1.8229vw;
          background-image: url("../../assets/images/search-icon.svg");
        }
        a {
          color: #333333;
        }
      }
    }
  }
}

#search {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .search__contents__container {
    background-color: #f5f5f5;
    width: 100%;
    z-index: 9999;
    position: relative;
  }
  // 공통
  .search__padding {
    padding: 0 0.8333vw;
  }
  .search__width {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .search__contents {
    position: relative;
    padding-top: 0.6771vw;

    // 검색 창
    .search__input__container {
      @extend .search__width;
      @extend .search__padding;
    }
    .search__input {
      width: 100%;

      background: #f5f5f5;
      box-shadow: inset -0.2083vw -0.2083vw 0.3125vw #ffffff,
        inset 0.2083vw 0.2083vw 0.3125vw rgba(0, 0, 0, 0.17);
      height: 3.0208vw;
      border-radius: 1.9792vw;
      position: relative;
      input {
        padding: 0 2.1875vw 0 1.1458vw;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        box-shadow: inset -0.2083vw -0.2083vw 0.3125vw #ffffff,
          inset 0.2083vw 0.2083vw 0.3125vw rgba(0, 0, 0, 0.17);
        border-radius: 1.9792vw;
        font-size: 1.0938vw;
        line-height: 1.3021vw;
        color: #37444a;
      }
      .searchIcon {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 0.6771vw;
        width: 1.8229vw;
        height: 1.8229vw;
        margin-top: -0.7292vw;
        cursor: pointer;
      }
    }
    // 과거 기록
    .search__history {
      @extend .search__width;
      @extend .search__padding;
      display: flex;
      flex-direction: column;
      padding-bottom: 0.7813vw;
      ul {
        margin-top: 0.2604vw;
        li {
          display: flex;
          align-items: center;
          margin-top: 0.7813vw;
          cursor: pointer;
          span {
            font-size: 0.9375vw;
            line-height: 1.0938vw;
            color: #37444a;
          }
          img {
            margin-left: 0.5208vw;
          }
        }
      }
    }
    // 경계선
    hr {
      height: 0.0521vw;
      border: none;
      margin: 0;
      color: #cccccc;
      background-color: #cccccc;
    }
    // 추천 키워드
    .search__recommend__container {
      width: 100%;
      background-color: #eeeeee;
    }
    .search__recommend {
      @extend .search__width;
      @extend .search__padding;
      padding-top: 1.1979vw;
      padding-bottom: 1.3542vw;
      h3 {
        font-size: 0.7813vw;
        line-height: 0.9375vw;
        color: #37444a;
      }
      .search__hashTags {
        display: flex;
        flex-wrap: wrap;
        .search__hashTag {
          cursor: pointer;
          margin-top: 1.1979vw;
          width: 5.9375vw;
          height: 2.1354vw;
          border-radius: 1.7969vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9375vw;
          line-height: 1.0938vw;

          margin-right: 1.0938vw;
          background: #f5f5f5;
          box-shadow: -0.3125vw -0.3125vw 0.9375vw #ffffff,
            0.3125vw 0.3125vw 0.9375vw rgba(0, 0, 0, 0.17);
          &:hover {
            box-shadow: inset 0.3125vw -0.3125vw 0.9375vw #ffffff,
              inset 0.3125vw 0.3125vw 0.9375vw rgba(0, 0, 0, 0.17);
          }
        }
      }
    }
  }
  .search__overlay {
    z-index: 9998;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.17);
  }
}
</style>
