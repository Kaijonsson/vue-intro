<template>
  <div><router-link to="/login">Back</router-link></div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  width: 400px;
  height: 55px;
  background-color: #c7d6ca;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

a {
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 20px;

  width: 100%;
  color: black;
  background-color: #c7d6ca;
  border-radius: 20px;
}

a:visited {
  color: black;
  text-decoration: none;
}
</style>
