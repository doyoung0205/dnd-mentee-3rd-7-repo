<template>
  <div
    class="RegisterContainer"
    :class="{
      'RegisterContainer-FirstStage': stage === 0,
      'RegisterContainer-SecondStage': stage === 1,
      'RegisterContainer-ThirdStage': stage === 2
    }"
  >
    <header class="ImageContainer">
      <img
        v-if="stage < 3"
        class="ImageContainer__Cover"
        :src="headerImg[stage]"
      />
      <img
        v-bind:class="{
          ImageContainer__Earth: stage < 3,
          'ImageContainer__Earth-drop': stage === 3
        }"
        :src="headerImg[stage]"
      />

      <img
        class="ImageContainer__Leaf"
        v-bind:class="{
          'ImageContainer__final-show': stage === 3
        }"
        src="@/assets/register/leaf.svg"
      />

      <img
        class="ImageContainer__Hand"
        v-bind:class="{
          'ImageContainer__final-show': stage === 3
        }"
        src="@/assets/register/hand.svg"
      />

      <img
        class="ImageContainer__Light"
        v-bind:class="{
          'ImageContainer__final-show': stage === 3
        }"
        src="@/assets/register/light.svg"
      />

      <transition name="trash-disappear">
        <img
          v-if="stage < 2"
          class="ImageContainer__rm ImageContainer__rm1"
          src="@/assets/register/except_1.svg"
        />
      </transition>
      <transition name="trash-disappear">
        <img
          v-if="stage < 1"
          class="ImageContainer__rm ImageContainer__rm2"
          src="@/assets/register/pass_934.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 3"
          class="ImageContainer__rm ImageContainer__spoon"
          src="@/assets/register/spoon.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 1"
          class="ImageContainer__rm ImageContainer__straw"
          src="@/assets/register/straw.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 3"
          class="ImageContainer__rm ImageContainer__bottle"
          src="@/assets/register/bottle.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 2"
          class="ImageContainer__rm ImageContainer__shampoo"
          src="@/assets/register/shampoo.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 1"
          class="ImageContainer__rm ImageContainer__BigBottle"
          src="@/assets/register/BigBottle.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 1"
          class="ImageContainer__rm ImageContainer__pet"
          src="@/assets/register/pet.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 2"
          class="ImageContainer__rm ImageContainer__fork"
          src="@/assets/register/fork.svg"
        />
      </transition>

      <transition name="trash-disappear">
        <img
          v-if="stage < 3"
          class="ImageContainer__rm ImageContainer__lightspoon"
          src="@/assets/register/lightspoon.svg"
        />
      </transition>
    </header>
    <main class="Main">
      <img
        class="RegisterContainer__character"
        :class="{
          'RegisterContainer__character-shrink': stage >= 1,
          'RegisterContainer__character-final_position': stage === 3
        }"
        src="@/assets/register/group_404.svg"
      />
      <transition name="slide-left">
        <div v-if="stage === 0" class="TextContainer">
          <p class="TextContainer_text">
            <span class="TextContainer__span">그린이</span>가 되어
          </p>
          <p class="TextContainer_text">쓰레기를 똑똑하게 버리고</p>
          <p class="TextContainer_text">
            지구를 <span span class="TextContainer__span">그린별</span>로
            만들어봐요!
          </p>
        </div>
      </transition>

      <div class="RegisterFormContainer">
        <form
          v-on:submit.prevent="onSubmit"
          class="RegisterFormContainer__FormTag"
        >
          <transition name="slide-left">
            <div v-if="stage === 0" class="EmailInputContainer">
              <label class="RegisterFormContainer__label" for="email"
                >이메일</label
              >
              <input
                class="RegisterFormContainer__input RegisterFormContainer__Emailinput"
                id="email"
                type="text"
                v-model="email"
              />
              <div class="RegisterErrorContainer">
                <p
                  class="RegisterErrorContainer__Text RegisterErrorContainer__Text-shadow"
                >
                  {{ logMessage }}
                </p>
              </div>
            </div>
          </transition>

          <transition name="go-up">
            <div v-if="stage === 1" class="NickNameInputContainer">
              <label
                class="RegisterFormContainer__label RegisterFormContainer__label-darkgreen"
                for="nickname"
                >닉네임</label
              >
              <input
                class="RegisterFormContainer__input"
                id="nickname"
                type="text"
                v-model="nickname"
              />
            </div>
          </transition>

          <transition name="slide-left">
            <div v-if="stage === 2" class="PWInputContainer">
              <label
                class="RegisterFormContainer__label RegisterFormContainer__label-green RegisterFormContainer__label-noBottomMargin"
                for="password"
                >비밀번호
              </label>
              <div class="PasswordTextBlock">
                <span class="PasswordTextBlock__Text">
                  영어숫자를 포함한 4자리 이상!
                </span>

                <span
                  class="PasswordTextBlock__Text PasswordTextBlock__LeftText"
                  >비밀번호 보기</span
                >
                <input type="checkbox" id="checkbox" v-model="showpassword" />
              </div>

              <input
                class="RegisterFormContainer__input RegisterFormContainer__Passwordinput"
                id="password"
                type="text"
                v-model="password"
              />

              <div class="RegisterErrorContainer">
                <p class="RegisterErrorContainer__Text">
                  {{ logMessage }}
                </p>
              </div>

              <label
                class="RegisterFormContainer__label RegisterFormContainer__labelPassword RegisterFormContainer__label-darkgreen"
                for="passwordCheck"
                >비밀번호 확인</label
              >
              <input
                class="RegisterFormContainer__input"
                id="passwordCheck"
                type="text"
                v-model="passwordCheck"
              />
            </div>
          </transition>

          <div class="FinalTextContainer" v-if="stage === 3">
            <p class="FinalTextContainer__Text">그리니 님의</p>
            <p class="FinalTextContainer__Text">회원가입을 축하합니다!</p>
          </div>
          <button class="RegisterFormContainer__button" @click="onClick">
            {{ buttonText[stage] }}
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      nickname: "",
      stage: 0,
      headerImg: [
        require(`@/assets/register/FirstStageEarth.svg`),
        require(`@/assets/register/TwoStageEarth.svg`),
        require(`@/assets/register/ThreeStageEarth.svg`),
        require(`@/assets/register/FourthStageEarth.svg`)
      ],
      buttonText: ["가입하기", "다음", "다음", "회원가입 끝!"],
      logMessage: "올바른 이메일 형식이 아니에요",
      password: "",
      passwordCheck: "",
      showpassword: false
    };
  },
  methods: {
    onClick() {
      this.stage = this.stage + 1;
      console.log("clicking");
    },
    onSubmit() {
      console.log("submit form");
    }
  }
};
</script>

<style lang="scss" scoped>
$email-input-location: 71vh;
$nickname-input-location: 34vh;

@font-face {
  font-family: "Godo";
  font-style: normal;
  font-weight: 700;
  src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2")
      format("woff2"),
    url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff")
      format("woff");
}

* {
  font-family: "GodoB";
  font-weight: 700;
}
.slide-left-leave-active,
.go-up-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-leave-to,.go-up-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-25vw);
  opacity: 0;
}

.trash-disappear-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}

.trash-disappear-leave-to {
  transform: translateY(100vh) !important;
  opacity: 0;
}

.go-up-enter-active {
  transition: all 2s ease;
  // transition-delay: 1s;
}

.go-up-enter {
  transform: translateY(37vh);
}

.RegisterContainer-FirstStage {
  background: linear-gradient(to top, #656565, #000000);
}

.RegisterContainer-SecondStage {
  background: linear-gradient(to top, #ffffff, #8c8c8c, #000000);
}

.RegisterContainer-ThirdStage {
  background: linear-gradient(to top, #ffffff, #8c8c8c);
}

.RegisterContainer {
  position: relative;
  width: 100%;
  height: 100%;

  .ImageContainer__Cover {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .ImageContainer__Earth {
    position: absolute;
    width: 100%;
    top: -30vh;
    visibility: hidden;
    left: 0;
  }

  .ImageContainer__Light {
    position: absolute;
    left: 10vw;
    top: 15vh;
    opacity: 0;
    z-index: -1;
  }
  .ImageContainer__Leaf {
    position: absolute;
    top: 18vh;
    left: 25vh;
    opacity: 0;
  }

  .ImageContainer__Hand {
    position: absolute;
    top: 45vh;
    left: 28vw;
    opacity: 0;
  }

  .ImageContainer__final-show {
    opacity: 1;
    transition: all 0.5s ease;
  }
  .ImageContainer__Earth-drop {
    position: absolute;
    width: 100%;
    top: 10vh;
    left: 0;
    transform: scale(0.5);
    transition: all 0.5s ease;
  }

  .ImageContainer__rm {
    position: absolute;
    transform: rotate(180deg);
  }

  .ImageContainer__rm1 {
    top: 4.5vh;
    left: 2.4vw;
  }

  .ImageContainer__rm2 {
    top: 19vh;
    left: 5vw;
  }

  .ImageContainer__lightspoon {
    top: 11vh;
    left: 3vw;
    opacity: 0.5;
  }

  .ImageContainer__spoon {
    top: 11vh;
    left: 62vw;
    transform: rotate(-90deg);
  }

  .ImageContainer__straw {
    top: 15vh;
    left: 22vw;
  }

  .ImageContainer__bottle {
    top: 5vh;
    left: 41vw;
  }

  .ImageContainer__shampoo {
    top: 20vh;
    left: 43vw;
  }
  .ImageContainer__BigBottle {
    top: 0;
    left: 73vw;
  }

  .ImageContainer__fork {
    top: 6vh;
    left: 87vw;
  }
  .ImageContainer__pet {
    top: 92px;
    left: 67vw;
  }

  .Main {
    height: 100%;
    .RegisterContainer__character {
      position: absolute;
      top: 26.7vh;
      left: 57vw;
    }

    .RegisterContainer__character-shrink {
      transform: scale(0.5);
      transform-origin: 100% 0%;
      animation: transform 2s ease-in;
    }
    .RegisterContainer__character-final_position {
      top: 10.7vh;
      left: 25vw;
      animation: transform 0.5s ease-in;
    }
    .TextContainer {
      position: absolute;
      top: 43vh;
      left: 10.8vw;
      .TextContainer_text {
        text-align: left;

        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        font-family: GodoB;
        font-size: 20px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.9;
        letter-spacing: 0.4px;

        margin: 0;
        &:not(span) {
          color: white;
        }
        .TextContainer__span {
          color: #77d6be;
        }
      }
    }

    .RegisterFormContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 100%;
      margin-left: 10.8vw;
      margin-right: 10.8vw;

      .RegisterFormContainer__FormTag {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .EmailInputContainer {
        position: absolute;
        top: 72vh;
        width: 100%;
      }

      .NickNameInputContainer {
        position: absolute;
        top: $nickname-input-location;
        width: 100%;
      }
      .PWInputContainer {
        position: absolute;
        top: $nickname-input-location;
        width: 100%;
      }

      .RegisterFormContainer__label {
        display: block;
        text-align: left;
        width: 70%;
        font-size: 16px;
        color: white;
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        line-height: 18px;
        margin-bottom: 9px;
      }

      .RegisterFormContainer__label-green {
        color: #76d4bc;
      }

      .RegisterFormContainer__label-darkgreen {
        color: #5fad9b;
      }

      .RegisterFormContainer__label-noBottomMargin {
        margin-bottom: 0;
      }

      .RegisterFormContainer__labelPassword {
        margin-top: 11px;
      }

      .RegisterFormContainer__input {
        display: inline-block;
        text-align: left;
        width: 100%;
        height: 6.4vh;
        border: solid 1.5px #6ec8b1;
        background-color: white;
        border-radius: 6px;
        margin-left: 0;
        .RegisterFormContainer__input-error {
          border: solid 1.5px #ff5b5b;
        }
      }

      .RegisterFormContainer__Emailinput {
        background-color: rgba(255, 255, 255, 0.51);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.57);
      }

      .RegisterErrorContainer {
        height: 13%;
        color: #ff5a5a;
        text-align: left;
        font-size: 11px;
        .RegisterErrorContainer__Text {
          margin: 0;
        }
      }
      .RegisterErrorContainer__Text-shadow {
        text-shadow: 0px 3px 6px #000000;
      }

      .RegisterFormContainer__button {
        position: absolute;
        top: 87vh;
        left: 0;
        height: 6.4vh;
        width: 100%;
        border: none;
        border-radius: 31px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        background: linear-gradient(to left, #73d2ba, #559a8b);
        font-size: 16px;
        color: white;
      }

      .PasswordTextBlock {
        display: flex;
        flex-direction: row;
        .PasswordTextBlock__Text {
          margin: 0;
          font-size: 9px;
        }

        .PasswordTextBlock__LeftText {
          margin-left: auto;
        }
      }

      .FinalTextContainer__Text {
        top: 66vh;
        position: relative;
      }

      .FinalTextContainer__Text {
        margin: 0;
        font-size: 20px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.9;
        letter-spacing: 0.4px;
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        color: #39675d;
      }
    }
  }
}
</style>
