<template>
  <div id="app">
    <div id="nav-container">
      <div id="nav">
        <TopHeader />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "./components/App/TopHeader";

export default {
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
  height: 700px;
  background-color: #111c13;
}

#nav-container {
  width: 100%;
  display: flex;
  justify-content: initial;
}
</style>
