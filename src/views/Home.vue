<template>
  <div>
    <button @click.prevent="navToLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    navToLogin() {
      this.$router.replace({ name: "login" });
    },
  },
};
</script>

<style scoped>
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
  font-weight: bold;
  color: black;
  background-color: #c7d6ca;
  border-radius: 20px;
  border-style: none;
}

button:hover {
  cursor: pointer;
}
</style>
