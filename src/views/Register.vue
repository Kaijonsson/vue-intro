<template>
  <div id="Register">
    <Home />
    <div class="registerError" v-if="registerUser.error">
      <Error />
    </div>
    <form @submit.prevent="pressed" class="inlogg">
      <div class="name">
        <input type="fName" v-model="registerUser.fName" placeholder="Name" />
      </div>
      <div class="lName">
        <input
          type="lName"
          v-model="registerUser.lName"
          placeholder="Last Name"
        />
      </div>
      <div class="email">
        <input type="email" v-model="registerUser.email" placeholder="email" />
      </div>
      <div class="password">
        <input
          type="password"
          v-model="registerUser.password"
          placeholder="Password"
        />
      </div>
      <button type="submit">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Home from "../components/Register/Home.vue";
import { dataBase } from "../main";
import CurrentUser from "../components/App/CurrentUser";
import Error from "../components/Register/Error";

export default {
  name: "Register",

  components: {
    Home: Home,
    Error: Error,
  },
  methods: {
    pressed: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.registerUser.email,
          this.registerUser.password
        )
        .then(() => {
          const userId = firebase.auth().currentUser.uid;
          const userEmail = this.registerUser.email;
          const firstName = this.registerUser.fName;
          const lastName = this.registerUser.lName;

          this.writeUserData(userId, firstName, lastName, userEmail);
          CurrentUser.methods.transmitter(userId);
          this.$router.replace({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
          Error.methods.writeErrorMessage(err).then(() => {
            !!this.registerUser.error;
          });
          // Error.methods.writeUserData(err);
        });
    },

    writeUserData(userId, fName, lName, email) {
      dataBase.ref("users/" + userId).set({
        username: fName + " " + lName,
        email: email,
      });
    },
  },

  data() {
    return {
      registerUser: {
        email: "",
        fName: "",
        lName: "",
        error: Boolean,
      },
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
  margin: 15px;
  width: 400px;
  padding: 25px;
  font-size: 20px;
  border-radius: 20px;
  border-style: none;
}

button {
  width: 400px;
  height: 55px;
  font-size: 20px;
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
