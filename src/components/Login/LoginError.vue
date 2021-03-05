<template>
  <div class="loginError">
    <p>{{ ErrorMessages.wrongUserNameOrPassword }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ErrorMessages: {
        wrongUserNameOrPassword: "",
      },
    };
  },
  methods: {
    writeLoginErrorMessage: function(error) {
      console.log(error);
      this.ErrorMessages.wrongUserNameOrPassword = error.message;
    },
  },
};
</script>

<style scoped></style>
