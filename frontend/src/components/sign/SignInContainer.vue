<template>
  <div class="FormContainer RegisterFormContainer">
    <form v-on:submit.prevent="onSubmit" class="RegisterFormContainer__FormTag">
      <transition name="slide-left">
        <div class="EmailInputContainer">
          <label
            class="FormContainer__label RegisterFormContainer__EmailLabel"
            for="email"
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
      </transition>

      <transition name="slide-left">
        <div class="PWInputContainer">
          <div class="RegisterErrorContainer">
            <p class="RegisterErrorContainer__Text">
              {{ logMessage }}
            </p>
          </div>

          <label
            class="FormContainer__label RegisterFormContainer__labelPassword RegisterFormContainer__label-darkgreen"
            for="password"
            >비밀번호
          </label>
          <input
            class="FormContainer__input"
            id="password"
            type="text"
            v-model="password"
          />
        </div>
      </transition>

      <button
        class="FormContainer__button RegisterFormContainer__button"
        @submit.prevent="submitForm"
      >
        로그인
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
    submitForm() {
      //
    }
  },
  created() {
    // alert("asdf");
  }
});
</script>

<style></style>
