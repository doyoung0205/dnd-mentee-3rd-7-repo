<template>
  <div class="myTop__container">
    <div class="myTip__contents">
      <div class="myTip__navigations">
        <div
          class="myTip__nav__item "
          :class="{ active: currnetItem === 'USER_STORED_TIPS' }"
        >
          <span @click="setCurrentItem('USER_STORED_TIPS')">저장한 팁</span>
        </div>
        <div
          class="myTip__nav__item "
          :class="{ active: currnetItem === 'USER_CREATED_TIPS' }"
        >
          <span @click="setCurrentItem('USER_CREATED_TIPS')">작성한 팁</span>
        </div>
      </div>
    </div>

    <!-- 저장한 팁 리스트  -->
    <StoreTipList
      :tips="this.$store.state.user.userStoredTips"
      v-if="currnetItem === 'USER_STORED_TIPS'"
    ></StoreTipList>

    <!-- 작성한 팁 리스트  -->
    <CreatedTipList
      :tips="this.$store.state.user.userCreatedTips"
      v-if="currnetItem === 'USER_CREATED_TIPS'"
    ></CreatedTipList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StoreTipList from "@/components/tip/TipList.vue";
import CreatedTipList from "@/components/tip/TipList.vue";
export default Vue.extend({
  components: {
    StoreTipList,
    CreatedTipList
  },
  data() {
    return {
      currnetItem: "USER_STORED_TIPS"
    };
  },
  methods: {
    setCurrentItem(item: string) {
      this.currnetItem = item;
    }
  },
  computed: {},
  created() {
    const isLogin = this.$store.getters["isLogin"];
    const isEmptyUserStoredTips = this.$store.getters[
      "user/isEmptyUserStoredTips"
    ];
    const isEmptyUserCreatedTips = this.$store.getters[
      "user/isEmptyUserCreatedTips"
    ];
    const userId = this.$store.getters["getUserId"];
    if (isLogin && isEmptyUserStoredTips) {
      this.$store.dispatch("user/FETCH_USER_STORED_TIPS_BY_USER_ID", userId);
    }
    if (isLogin && isEmptyUserCreatedTips) {
      this.$store.dispatch("user/FETCH_USER_CREATED_TIPS_BY_USER_ID", userId);
    }
  }
});
</script>

<style lang="scss">
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
</style>
