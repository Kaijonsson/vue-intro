<template>
  <div id="topHeader">
    <router-link to="secret">members page</router-link> |
    <router-link to="Login">Login page</router-link> |
    <span v-if="loggedIn"><button @click="signOut">Sign Out</button></span>|
    <!-- <span v-else>No</span>  -->
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      //   if (user) {
      //     this.loggedIn = true;
      //   } else {
      //     this.loggedIn = false;
      //   }
    });
  },

  data() {
    return {
      loggedIn: false,
    };
  },

  methods: {
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}

#topHeader {
  display: flex;
  flex-direction: column;
}
</style>
