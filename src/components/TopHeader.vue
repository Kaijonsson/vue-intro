<template>
  <div>
    <span v-if="loggedIn"><button @click="signOut">Sign Out</button></span>
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

<style scoped></style>
