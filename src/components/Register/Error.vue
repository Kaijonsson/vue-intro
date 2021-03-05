<template>
  <div class="ErrorMessage">
    <p>{{ error.errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: {
        errorMessage: "",
      },
    };
  },
  methods: {
    writeErrorMessage(error) {
      this.error.errorMessage = error.message;
      return console.log(error.message);
    },
  },
};
</script>

<style scoped></style>
