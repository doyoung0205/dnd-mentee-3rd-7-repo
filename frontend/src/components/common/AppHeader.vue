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
  height: 50px;
  .header__contents {
    margin: 0 auto;
    max-width: 1194px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    @extend .text--hidden;
    @extend .image--center;
    width: 60px;
    height: 21px;
    cursor: pointer;
    background-image: url("../../assets/images/logo.svg");
  }

  .header__navigations {
    font-size: 18px;
    line-height: 21px;

    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 65px;
        &:first-child {
          margin-left: 0;
        }
        // 검색이미지
        &.header__nav__item__search {
          @extend .text--hidden;
          @extend .image--center;
          cursor: pointer;
          margin-top: 8px;
          width: 35px;
          height: 35px;
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
    padding: 0 16px;
  }
  .search__width {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .search__contents {
    position: relative;
    padding-top: 13px;

    // 검색 창
    .search__input__container {
      @extend .search__width;
      @extend .search__padding;
    }
    .search__input {
      width: 100%;
      height: 58px;
      background: #f5f5f5;
      box-shadow: inset -4px -4px 6px #ffffff,
        inset 4px 4px 6px rgba(0, 0, 0, 0.17);
      border-radius: 38px;
      position: relative;
      input {
        padding: 0 42px 0 22px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        box-shadow: inset -4px -4px 6px #ffffff,
          inset 4px 4px 6px rgba(0, 0, 0, 0.17);
        border-radius: 38px;
        caret-color: #5fac9a;
        font-size: 21px;
        line-height: 25px;
        color: #37444a;
      }
      .searchIcon {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 13px;
        width: 35px;
        height: 35px;
        margin-top: -14px;
        cursor: pointer;
      }
    }
    // 과거 기록
    .search__history {
      @extend .search__width;
      @extend .search__padding;
      display: flex;
      flex-direction: column;
      padding-bottom: 15px;
      ul {
        margin-top: 5px;
        li {
          display: flex;
          align-items: center;
          margin-top: 15px;
          cursor: pointer;
          span {
            font-size: 18px;
            line-height: 21px;
            color: #37444a;
          }
          img {
            margin-left: 10px;
          }
        }
      }
    }
    // 경계선
    hr {
      height: 1px;
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
      padding-top: 23px;
      padding-bottom: 26px;
      h3 {
        font-size: 15px;
        line-height: 18px;
        color: #37444a;
      }
      .search__hashTags {
        display: flex;
        flex-wrap: wrap;
        .search__hashTag {
          cursor: pointer;
          margin-top: 23px;
          width: 114px;
          height: 41px;
          border-radius: 34.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 21px;
          color: #5fac9a;
          margin-right: 21px;
          background: #f5f5f5;
          box-shadow: -6px -6px 18px #ffffff, 6px 6px 18px rgba(0, 0, 0, 0.17);
          &:hover {
            box-shadow: inset 6px -6px 18px #ffffff,
              inset 6px 6px 18px rgba(0, 0, 0, 0.17);
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
