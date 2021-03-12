<template>
  <div>
    <h1>This is the Home page</h1>
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
h1 {
  text-align: center;
  color: white;
  text-decoration: underline;
}

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
