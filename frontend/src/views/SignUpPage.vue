<template>
  <div class="Register">
    <SignUpContainer></SignUpContainer>
  </div>
</template>

<script>
import SignUpContainer from "@/components/sign/SignUpContainer";
export default {
  components: {
    SignUpContainer
  }
};
</script>

<style lang="scss" scoped>
.Register {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
