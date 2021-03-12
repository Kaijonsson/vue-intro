<template>
  <div id="topHeader">
    <div class="dropdown">
      <h1 v-if="loggedIn">{{ user }}</h1>

      <button class="dropbtn">Menu</button>
      <div class="dropdown-content">
        <router-link v-if="loggedIn" to="secret">members page</router-link>
        <router-link to="/">Home page</router-link>
        <router-link to="Login">Login page</router-link>
        <router-link to="Register">Register page</router-link>
        <span v-if="loggedIn"><button @click="signOut">Sign Out</button></span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.user = this.$registeredUser;
        if (!this.$registeredUser) {
          this.$loggedInUser.then((response) => {
            this.user = response;
          });
        }

        console.log(this.user);
      } else {
        this.loggedIn = false;
      }
    });
  },

  data() {
    return {
      loggedIn: false,
      user: "",
    };
  },

  methods: {
    signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
        this.user = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 18px;
  font-weight: normal;
  color: white;
}

#topHeader {
  display: flex;
  flex-direction: column;
}

button {
  background-color: #c7d6ca;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}

.dropdown {
  display: inline-block;
  margin: 25px;
}

.dropdown-content {
  display: none;
  margin-right: 50px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
}

a {
  border-radius: 10px;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #608060;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #9cf39c;
  cursor: pointer;
}
button:hover {
  cursor: pointer;
}
</style>
