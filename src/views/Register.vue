<template>
  <div id="Register">
    <Home />
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed" class="inlogg">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Home from "../components/Home.vue";

export default {
  components: {
    Home: Home,
  },
  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
};
</script>

<style scoped>
#Register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input,
textarea {
  background-color: #7d827e;
}

input::placeholder {
  color: white;
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
  border-radius: 20px;
  border-style: none;
}

button {
  width: 400px;
  height: 75px;
  font-size: 21px;
  font-weight: bold;
  color: black;
  background-color: #c7d6ca;
  border-radius: 20px;
  border-style: none;
}

input,
button:hover {
  cursor: pointer;
}
</style>
