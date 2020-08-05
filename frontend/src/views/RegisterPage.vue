<template>
  <div class="Register">
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    RegisterForm
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
