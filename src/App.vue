<template>
  <div id="app">
    <TopHeader />
    <div id="nav">
      <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> | -->
    </div>
    <router-view />
  </div>
</template>

<script>
import Register from "./views/Register.vue";
import TopHeader from "./components/TopHeader";

export default {
  name: "App",
  Components: {
    Register: Register,
  },
  components: {
    TopHeader: TopHeader,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 650px;
  width: 100%;
  background-color: #111c13;
}
</style>
