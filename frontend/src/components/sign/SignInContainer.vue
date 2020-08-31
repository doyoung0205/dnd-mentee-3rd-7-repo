<template>
  <div>
    <section class="IMGBLOCK">
      <div class="IMGBLOCK__RightCorner"></div>
    </section>

    <section class="IMGBLOCK">
      <div class="IMGBLOCK__UpperLeft"></div>
    </section>
    <section class="IMGBLOCK">
      <div class="IMGBLOCK__LowerLeft"></div>
    </section>

    <section class="IMGBLOCK">
      <div class="IMGBLOCK__Character"></div>
    </section>

    <div class="FormContainer LoginFormContainer">
      <div class="LoginFormContainer_HeaderText">
        <span>오늘도 반가워요!</span>
      </div>
      <form
        v-on:submit.prevent="submitForm"
        class="LoginFormContainer__FormTag"
      >
        <div class="InputContainer">
          <label class="FormContainer__label LoginForm__Label" for="email"
            >이메일</label
          >
          <input
            class="FormContainer__input"
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

        <div class="InputContainer">
          <label class="FormContainer__label  LoginForm__Label" for="password"
            >비밀번호
          </label>
          <input
            class="FormContainer__input"
            id="password"
            type="text"
            v-model="password"
          />
          <div class="ForgetPWContainer">
            <p class="ForgetPWContainer__Text">
              비밀번호를 잊으셨나요?
            </p>
          </div>
        </div>

        <button
          class="FormContainer__button LoginFormContainer__button"
          @submit.prevent="submitForm"
        >
          로그인
        </button>
        <div class="RegisterTextContainer">
          <p class="RegisterTextContainer__Text">
            아직 회원이 아니신가요?
          </p>
        </div>
        <button
          class="FormContainer__button RegisterFormContainer__button"
          @click.prevent="showSignUp"
        >
          가입하러 가기:)
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { UserSignIn } from "../../api/sign/type";
export default Vue.extend({
  name: "SignInContainer",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      logMessage: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const signInData: UserSignIn = {
          username: this.email,
          password: this.password
        };
        await this.$store.dispatch("SIGN_IN", signInData);
        this.$store.commit("signModal/close");
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = "";
      this.password = "";
    },
    showSignUp() {
      this.$emit("showSignUp");
    }
  }
});
</script>

<style lang="scss">
.IMGBLOCK {
  z-index: -1;
}
.IMGBLOCK__RightCorner {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  margin-right: 0;
  margin-left: 50vw;
  position: absolute;
  background-position: -21px -212px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/upperrightcornerPlanet.svg");
}
.IMGBLOCK__UpperLeft {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  margin-right: 0;
  position: absolute;
  background-position: -44px 60px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/upperleftPlanet.svg");
}

.IMGBLOCK__LowerLeft {
  z-index: -1;
  width: 82vw;
  z-index: -1;
  height: 50vh;
  margin-right: 0;
  position: absolute;
  background-position: -245px 117px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/lowerleftPlanet.svg");
  margin-top: 50vh;
}

.IMGBLOCK__Character {
  z-index: -1;
  width: 50vw;
  height: 50vh;
  position: absolute;
  margin-left: 25vw;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(/img/group_404.c2f607ec.svg);
}

.LoginFormContainer {
  height: 100vh;
  .LoginFormContainer_HeaderText {
    margin-top: 36vh;
    color: #2b4f46;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4vh;
  }
  .LoginFormContainer__FormTag {
    width: 280px;
  }
  .LoginForm__Label {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #579d8d;
  }

  .InputContainer {
    margin-bottom: 2vh;

    .ForgetPWContainer {
      text-align: right;
      font-size: 9px;
      padding: 1em;
    }
  }
  .RegisterTextContainer {
    text-align: center;
    font-size: 9px;
    padding: 1em;
  }

  button.LoginFormContainer__button {
    box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.5);
    background-image: linear-gradient(to bottom, #3b7266, #2b4f46 172%);
  }
}
</style>
