<template>
  <div id="intro__contents">
    <div class="banner">
      <img src="../assets/images/intro-banner.png" alt="" />
      <div class="banner_txt"><span>그린이를 소개합니다 :D</span></div>
    </div>
    <div class="intro__service">
      <div class="intro__service__container">
        <div class="intro__service__header">
          <h3 class="intro__header__subject">서비스 소개</h3>
          <img src="../assets/images/introLogo.svg" alt="그린이" />
        </div>
        <div class="intro__service__content">
          <h2>
            그린이는 쓰레기 관리 하는 방법과 TIP 을 공유하여 환경에 도움을 주는
            서비스 입니다!
          </h2>
          <h3>
            한 사람이 1년에 배출하는 쓰레기는 354.05kg로 평균수명인 81년을
            기준으로 할 때 26,678.05kg으로 28.6톤에 이른다고 합니다.
          </h3>
          <h3>
            오늘날 대량생산과 대량소비 중심의 자본주의 사회에 접어들면서 생활의
            편의성을 위해 일회용 제품 사용량이 늘어나고 사람들이 지나간 자리에는
            어김없이 쓰레기가 만들어지고 있습니다.
            <br />
            우리부터 생활 속에서 생겨나는 쓰레기들을 똑똑하게 버리고
            재활용한다면 환경 보호에 조금이나마 도움이 되지 않을까요?
          </h3>
        </div>
      </div>
    </div>
    <div class="intro__members">
      <div class="intro__members__header">
        <h3>그린이들</h3>
      </div>
      <div class="intro__members__content">
        <div class="member__table">
          <div class="member__table__row">
            <div class="job designer"><span>Designer</span></div>
            <div class="name"><span>최하윤</span></div>
            <div class="email"><span>tjstos16@gmail.com</span></div>
            <div class="actions">
              <img src="../assets/images/instagram.svg" alt="" />
              <img src="../assets/images/mail.svg" alt="" />
            </div>
          </div>
          <div class="member__table__row">
            <div class="job front"><span>Front-end</span></div>
            <div class="name"><span>김도영</span></div>
            <div class="email"><span>doyoung0205@naver.com</span></div>
            <div class="actions">
              <div class="actions__icons">
                <img src="../assets/images/instagram.svg" alt="" />
                <img src="../assets/images/mail.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="member__table__row">
            <div class="job clear"><span></span></div>
            <div class="name"><span>임한동</span></div>
            <div class="email"><span>limaries30@gmail.com</span></div>
            <div class="actions">
              <div class="actions__icons">
                <img src="../assets/images/instagram.svg" alt="" />
                <img src="../assets/images/mail.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="member__table__row">
            <div class="job back"><span>Back-end</span></div>
            <div class="name"><span>박정욱</span></div>
            <div class="email"><span>dnr1105@gmail.com</span></div>
            <div class="actions">
              <div class="actions__icons">
                <img src="../assets/images/instagram.svg" alt="" />
                <img src="../assets/images/mail.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="member__table__row">
            <div class="job clear"><span></span></div>
            <div class="name"><span>이정훈</span></div>
            <div class="email"><span>ljh9032a@naver.com</span></div>
            <div class="actions">
              <div class="actions__icons">
                <img src="../assets/images/instagram.svg" alt="" />
                <img src="../assets/images/mail.svg" alt="" />
              </div>
            </div>
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
div#intro__contents {
  width: 100%;

  .banner {
    position: relative;
    width: 100%;
    @include mobileVersion {
      height: 78px;
      img {
        height: 100%;
      }
    }
    img {
      width: 100%;
    }
    .banner_txt {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      width: 100%;
      justify-content: center;

      span {
        font-size: 36px;
        line-height: 42px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        @include mobileVersion {
          font-size: 24px;
          line-height: 27px;
          color: #ffffff;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .intro__service {
    padding: 76px 0;
    background: #fff;
    @include mobileVersion {
      padding: 25px 0;
      background: inherit;
    }
    .intro__service__container {
      @extend .container;
      display: flex;
      justify-content: space-between;
      @include mobileVersion {
        flex-direction: column;
      }
      .intro__service__header {
        max-width: 254px;
        width: 100%;
        @include mobileVersion {
          display: flex;
          align-items: center;
          margin-bottom: 11px;
          img {
            width: 26px;
            height: 27px;
            margin-left: 9px;
          }
        }
        h3 {
          font-size: 21px;
          line-height: 25px;
          color: #333333;
          @include mobileVersion {
            font-size: 13px;
            line-height: 15px;
          }
        }
      }
      .intro__service__content {
        h2 {
          font-size: 21px;
          line-height: 25px;
          color: #37444a;
          margin-bottom: 31px;
          @include mobileVersion {
            font-size: 13px;
            line-height: 19px;
            margin-bottom: 14px;
          }
        }
        h3 {
          font-size: 15px;
          line-height: 25px;
          color: #37444a;
          font-weight: normal;
          @include mobileVersion {
            font-size: 11px;
            line-height: 18px;
            margin-bottom: 20px;
            font-weight: normal;
          }
        }
      }
    }
  }

  .intro__members {
    @extend .container;
    padding-top: 90px;
    padding-bottom: 90px;
    display: flex;
    @include mobileVersion {
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .intro__members__header {
      max-width: 254px;
      width: 100%;
      word-break: keep-all;
      @include mobileVersion {
        display: flex;
      }
      h3 {
        font-size: 21px;
        line-height: 25px;
        color: #333333;
        @include mobileVersion {
          font-size: 13px;
          line-height: 15px;
          margin-bottom: 16px;
        }
      }
    }
    .intro__members__content {
      width: 100%;
    }
    .member__table {
      display: table;
      width: 100%;

      .member__table__row {
        display: table-row;
        padding: 28px;
        > div {
          border-top: 1px solid rgba(55, 68, 74, 0.32);
          display: table-cell;
          vertical-align: middle;
          padding: 21px;
          @include mobileVersion {
            padding: 0;
            padding-left: 6px;
            height: 31px;
          }
          &.clear {
            border-top: none;
          }
        }
        &:last-child {
          > div {
            border-bottom: 1px solid rgba(55, 68, 74, 0.32);
          }
        }

        span {
          font-size: 21px;
          line-height: 25px;
          color: #37444a;
          @include mobileVersion {
            font-weight: normal;
            font-size: 11px;
            line-height: 12px;
          }
        }
        .job {
          &.designer {
            span {
              color: #a3e0ae;
            }
          }
          &.front {
            span {
              color: #79d3b8;
            }
          }
          &.back {
            span {
              color: #5fac9a;
            }
          }
        }
        .actions {
          position: relative;
          cursor: pointer;
          img {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            &:nth-child(1) {
              left: -32px;
            }
            &:nth-child(2) {
              width: 26px;
              height: 26px;
              left: 20px;
            }
            @include mobileVersion {
              width: 10px;
              height: 10px;
              &:nth-child(1) {
                left: -28px;
              }
              &:nth-child(2) {
                width: 13px;
                height: 13px;
                left: -6px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
