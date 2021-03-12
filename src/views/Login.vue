<template>
  <div id="LoginForm">
    <form class="inlogg" @submit.prevent="clicked" novalidate>
      <div>
        <p v-if="userToLogin.emptyError" class="error">
          {{ userToLogin.emptyError }}
        </p>
      </div>
      <div class="error" v-if="userToLogin.error">{{ userToLogin.error }}</div>

      <div class="login">
        <input type="email" placeholder="Login" v-model="userToLogin.email" />
      </div>
      <div class="password">
        <input
          type="password"
          placeholder="password"
          v-model="userToLogin.password"
        />
      </div>
      <div class="loginButton">
        <button type="submit">Login</button>
      </div>
    </form>
    <span id="registerGuide">
      Need an account? Create here
      <router-link to="/register">Register</router-link></span
    >
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Vue from "vue";

export default {
  data() {
    return {
      userToLogin: {
        email: "",
        password: "",
        error: "",
        emptyError: "",
      },
    };
  },
  methods: {
    clicked: function() {
      const emptyError = () => {
        this.userToLogin.emptyError = "Can't submit empty field/fields";
      };

      if (!this.userToLogin.email || !this.userToLogin.password) {
        emptyError();
      } else {
        this.login();
      }
    },

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.userToLogin.email,
          this.userToLogin.password
        )
        .catch((err) => {
          this.userToLogin.error = err.message;
          if (err.code === "auth/user-not-found") {
            this.userToLogin.error = "User does not exist";
          }
          console.log(err.code);
          console.log(err);
        })
        .then(() => {
          // Vue.prototype.$loggedInUser = this.userToLogin.email;
          Vue.prototype.$userId = firebase.auth().currentUser.uid;
          Vue.prototype.$loggedInUser = this.getUserName(this.$userId);

          this.$router.replace({ name: "secret" });
        });
    },

    getUserName() {
      const fetchedUser = firebase
        .database()
        .ref()
        .child("users")
        .child(this.$userId)
        .get()
        .then((usersObject) => {
          if (usersObject.exists()) {
            return usersObject.child("username").val();
          }
        });
      const userResponse = fetchedUser.then((response) => {
        return response;
      });
      console.log(userResponse);
      return userResponse;
    },
  },
};
</script>

<style scoped>
#LoginForm {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.inlogg {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.error {
  color: red;
  font-size: 18px;
}

input {
  margin: 20px;
  width: 400px;
  padding: 30px;
  font-size: 21px;
  color: white;
  border-radius: 20px;
  border-style: none;
}

input,
textarea {
  background-color: #7d827e;
}

input::placeholder {
  color: white;
}

input,
button:hover {
  cursor: pointer;
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

#registerGuide {
  margin-top: 15px;
  color: white;
  font-size: 21px;
}

a:visited {
  color: white;
}
</style>
