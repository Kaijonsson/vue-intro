<template>
  <div id="app">
    <div id="nav-container">
      <div id="nav">
        <TopHeader />
        <CurrentUser />
        <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> | -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "./components/App/TopHeader";
import CurrentUser from "./components/App/CurrentUser";

export default {
  components: {
    TopHeader: TopHeader,
    CurrentUser: CurrentUser,
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
  background-color: #111c13;
}

#nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
