<template>
  <div class="tipList__searchOption__contents">
    <div class="tipList__search__contents">
      <div class="tipList__searchTerm" v-if="tipSearchOptions.query != ''">
        <span v-text="tipSearchOptions.query">#검색어</span>
        <img
          src="../../assets/images/x_white.svg"
          alt="검색어 취소 버튼"
          @click="clearSearchWordEvent"
        />
      </div>
      <div class="tipList__associative__contents">
        <h3 class="" v-if="!isEmptyRecommendHashTags">추천</h3>
        <div class="tagList">
          <div
            class="tag__item"
            v-for="(recommendHashTag, index) in recommendHashTags"
            :key="'recommendHashTag_' + index + recommendHashTag.id"
            @click="searchTipsByHashTagEvent(recommendHashTag.name)"
          >
            <span v-text="recommendHashTag.name">#키워드</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HashTags, TipSearchOption } from "@/store/tip/types";
import Vue from "vue";
export default Vue.extend({
  props: {
    tipSearchOptions: {
      type: Object as () => TipSearchOption,
      default() {
        return {
          query: "",
          page: 1
        };
      }
    },
    recommendHashTags: {
      type: Array as () => HashTags,
      default: []
    }
  },
  methods: {
    clearSearchWordEvent() {
      this.$emit("searchTipsByQuery", "");
    },
    // 해시태그로 검색하는 함수
    searchTipsByHashTagEvent(hashTagName: string) {
      this.$emit("searchTipsByQuery", hashTagName);
    }
  },
  computed: {
    isEmptyRecommendHashTags() {
      const recommendHashTagsLength = this.$props.recommendHashTags.length;
      return recommendHashTagsLength == 0;
    }
  }
});
</script>

<style lang="scss">
.tipList__searchOption__contents {
  margin-top: 9px;
  @include mobileVersion {
    margin-top: 13px;
  }
  .tipList__search__contents {
    display: flex;
    align-items: flex-end;
    margin-bottom: 34px;
    @include mobileVersion {
      overflow-x: auto;
      width: 100%;
      max-width: 100%;
      padding-bottom: 13px;
      margin-bottom: 0;
      > div {
        flex: 0 0 auto;
      }
    }
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
    margin-right: 50px;
    @include mobileVersion {
      margin-right: 21px;
      padding: 7px 27px 4px 16px;
      background: linear-gradient(
        270deg,
        #5fac9a 13.39%,
        #65b8a4 35.41%,
        #72d1b9 80.51%
      );
      box-shadow: -4px -4px 6px #ffffff, 4px 4px 6px rgba(0, 0, 0, 0.17);
    }
    span {
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
      @include mobileVersion {
        font-weight: normal;
        font-size: 15px;
        line-height: 160%;
      }
    }
    img {
      margin-left: 8px;
      width: 23px;
      height: 23px;
      @include mobileVersion {
        width: 15px;
        height: 15px;
        margin-bottom: 1px;
      }
    }
  }
  // 추천 관련
  .tipList__associative__contents {
    display: flex;
    align-items: flex-end;
    @include mobileVersion {
    }
    h3 {
      font-size: 18px;
      line-height: 21px;
      color: #37444a;
      margin-right: 21px;
      @include mobileVersion {
        font-size: 12px;
        line-height: 14px;
        margin-right: 9px;
      }
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
        @include mobileVersion {
          padding: 6px 10px;
          margin-right: 9px;
        }
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
          @include mobileVersion {
            font-size: 12px;
            line-height: 12px;
          }
        }
      }
    }
  }
}
</style>
