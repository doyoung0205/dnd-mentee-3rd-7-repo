<template>
  <div class="" style="position: relative;">
    <div
      v-for="(doast, index) in doasts"
      :key="index"
      class="doastbox"
      :class="{
        doastbox__show: doast.isShowing,
        doastbox__error: isErrorType(doast.type),
        doastbox__success: isSuccessType(doast.type)
      }"
    >
      <div class="alert">
        <div class="alert__msg">
          <h3>{{ doast.title }}</h3>
          <span>{{ doast.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export type DoastType = {
  title: string;
  content: string;
  type: string;
  completed: boolean;
  isShowing: boolean;
};

export type DoastsType = DoastType[];

import Vue from "vue";
export default Vue.extend({
  name: "Doast",
  data() {
    return {
      doasts: [] as DoastsType
    };
  },
  mounted() {
    const doastOption = {
      title: "로그인에 실패했어요:(",
      content: "이메일과 비밀번호를 다시한번 확인해 보세요!"
    } as DoastType;

    this.add(doastOption);
  },
  methods: {
    add(doast: DoastType) {
      if (!Object.prototype.isPrototypeOf.call(doast, "isShowing")) {
        doast.isShowing = false;
      }
      if (!Object.prototype.isPrototypeOf.call(doast, "completed")) {
        doast.completed = false;
      }
      if (!Object.prototype.isPrototypeOf.call(doast, "type")) {
        doast.type = "ERROR";
      }

      this.doasts.push(doast);
      const index = this.doasts.length - 1 === 0 ? 0 : this.doasts.length - 1;

      setTimeout(() => {
        this.doasts[index].isShowing = true;
      }, 20);
      setTimeout(() => {
        this.doasts[0].isShowing = false;
      }, 3000);
      setTimeout(() => {
        this.delete(0, 1);
      }, 3500);
    },
    delete(index1: number, index2: number) {
      this.doasts.splice(index1, index2);
    },
    isErrorType(type: string) {
      return type === "ERROR";
    },
    isSuccessType(type: string) {
      return type === "SUCCESS";
    }
  }
});
</script>
<style lang="scss">
.doastbox_container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
}
.doastbox {
  position: fixed;
  top: calc(50% + 40px);
  left: 50%;
  z-index: 1000010;
  text-align: center;
  transition: all ease-in-out 0.2s;
  opacity: 0;
  transform: translate(-50%, 0);

  .alert {
    max-width: 620px;
    min-width: 247px;
    height: auto;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    padding: 18px 0;
    border-radius: 11px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.58);
    background-color: #ff5a5a;
    .alert__msg {
      h3 {
        font-family: GodoB;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.13;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-bottom: 8px;
      }
      span {
        font-family: GodoM;
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
    }
  }
  &.doastbox__show {
    top: 50%;
    opacity: 1;
  }

  &.doastbox__error .alert {
    background-color: #ff5a5a;
  }

  &.doastbox__success .alert {
    background-color: #4dabff;
  }
}
</style>
