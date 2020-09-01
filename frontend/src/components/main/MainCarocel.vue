<template>
  <div id="main__carocel">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="main__carocel__item">
          <div class="main__carocel__img">
            <img src="../../assets/images/main-carocel1.png" alt />
          </div>
          <div class="main__carocel__comment">
            <img
              class="cloud"
              src="../../assets/images/main-carocel-cloud.svg"
              alt=""
            />
            <h3>오늘의 베스트 팁</h3>
            <h1>환경을 새각하는 한 걸음</h1>
            <p>그린이와 함께 생활 속 유용 팁!</p>
            <p>음식물 쓰레기 버리는 법에 대해 알아볼까요?</p>
            <button>
              더 알아보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="main__carocel__item">
          <div class="main__carocel__img">
            <img src="../../assets/images/main-carocel1.png" alt />
          </div>
          <div class="main__carocel__comment">
            <img
              class="cloud"
              src="../../assets/images/main-carocel-cloud.svg"
              alt=""
            />
            <h3>오늘의 베스트 팁</h3>
            <h1>환경을 새각하는 한 걸음</h1>
            <p>그린이와 함께 생활 속 유용 팁! 음식물 쓰레기</p>
            <button>
              더 알아보기
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div id="swiper__indicate__contents"></div>

    <div id="swiper__navigation">
      <img
        class="swiper--next"
        src="../../assets/images/carocelRightBtn.svg"
        alt="캐러셀 왼쪽 버튼"
      />
      <img
        class="swiper--prev"
        src="../../assets/images/carocelLeftBtn.svg"
        alt="캐러셀 오른쪽 버튼"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss";
export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: "#swiper__indicate__contents",
          clickable: true,
          renderBullet(index: number, className: string) {
            return `<button class="swiper__indicator ${className}">${index}</button>`;
          }
        },
        navigation: {
          nextEl: ".swiper--next",
          prevEl: ".swiper--prev"
        }
      }
    };
  }
});
</script>

<style lang="scss">
#main__carocel {
  width: 100%;
  position: relative;
  .main__carocel__item {
    width: 100%;
    position: relative;
    .main__carocel__img {
      img {
        width: 100%;
      }
    }
  }
  // 텍스트
  .main__carocel__comment {
    position: absolute;
    left: 50%;
    @extend .container;
    top: 50%;
    transform: translate(-50%, -50%);
    .cloud {
      margin-bottom: 14px;
    }
    h3 {
      font-size: 27px;
      line-height: 32px;
      color: #ffffff;
      margin-bottom: 21px;
    }
    h1 {
      font-size: 48px;
      line-height: 56px;
      color: #333333;
      margin-bottom: 27px;
    }
    p {
      font-size: 18px;
      line-height: 160%;
      color: #333333;
    }
    button {
      margin-top: 41px;
      cursor: pointer;
      border: none;
      background: #f7f7f7;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px 82px 22px 72px;
      border-radius: 40px;
      font-size: 21px;
      line-height: 25px;
      color: #5fac9a;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 33px;
        height: 27px;
        width: 14px;
        background-image: url("../../assets/images/right-arrow.svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }

  //인디케이터
  #swiper__indicate__contents {
    position: absolute;
    width: 100%;
    bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper__indicator {
      @extend .mot3;
      width: 11px;
      height: 11px;
      background: rgba(39, 39, 39, 0.13);
      border-radius: 17px;
      margin-right: 33px;
      border: none;
      z-index: 3;
      @extend .txt-hidden;
      &.swiper-pagination-bullet-active {
        background: #ffffff;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  // 네비게이션

  #swiper__navigation {
    img {
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 3;
    }
    .swiper--next {
      right: 38px;
    }
    .swiper--prev {
      left: 38px;
    }
  }
}
</style>
