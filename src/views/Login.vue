<template>
  <div id="LoginForm">
    <form class="inlogg" @submit.prevent="pressed">
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
    <div class="error" v-if="userToLogin.error">
      <LoginError />
    </div>
    <span id="registerGuide">
      Need an account? Create here
      <router-link to="/register">Register</router-link></span
    >
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import LoginError from "../components/Login/LoginError";
export default {
  data() {
    return {
      userToLogin: {
        email: "",
        password: "",
        error: false,
      },
    };
  },
  methods: {
    pressed: function() {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.userToLogin.email,
            this.userToLogin.password
          )
          .then(() => {
            this.$router.replace({ name: "secret" });
          });
      } catch (err) {
        this.userToLogin.error = true;
        LoginError.writeLoginErrorMessage(err);
        console.log(err);
      }
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
