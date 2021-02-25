<template>
  <div id="LoginForm">
    <form class="inlogg" @submit.prevent="pressed">
      <div class="login">
        <input type="email" placeholder="Login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <div class="loginButton">
        <button type="submit">Login</button>
      </div>
    </form>
    <div class="error" v-if="error">
      {{ error.message }}
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

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const data = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(data);
        this.$router.replace({ name: "secret" });
      } catch (err) {
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
