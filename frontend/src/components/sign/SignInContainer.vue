<template>
  <SignLayout>
    <template #header>
      <header class="ImageContainer"></header>
    </template>
    <template #content>
      <div class="FormContainer RegisterFormContainer">
        <form
          v-on:submit.prevent="submitForm"
          class="RegisterFormContainer__FormTag"
        >
          <div class="EmailInputContainer">
            <label
              class="FormContainer__label RegisterFormContainer__EmailLabel"
              for="email"
              >이메일</label
            >
            <input class="FormContainer__input" id="email" type="text" />
            <div class="RegisterErrorContainer">
              <p
                class="RegisterErrorContainer__Text RegisterErrorContainer__Text-shadow"
              >
                {{ logMessage }}
              </p>
            </div>
          </div>

          <button class="FormContainer__button RegisterFormContainer__button">
            ㅁㄴㅇㄹㅁ
          </button>
        </form>
      </div>
    </template>
  </SignLayout>
</template>

<script lang="ts">
import SignLayout from "@/components/sign/SignLayout.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SignInContainer",
  components: {
    SignLayout
  },
  data() {
    return {
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
