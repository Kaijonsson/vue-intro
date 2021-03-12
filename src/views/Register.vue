<template>
  <div id="Register">
    <Home />
    <form @submit.prevent="pressed" class="inlogg" novalidate>
      <div class="registerError" v-if="registerUser.EmptyError">
        {{ registerUser.EmptyError }}
      </div>
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
      <div class="registerError" v-if="registerUser.error">
        {{ registerUser.error }}
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
import Vue from "vue";

export default {
  components: {
    Home: Home,
  },
  methods: {
    pressed: function() {
      const postEmptyError = () => {
        this.registerUser.EmptyError = "Can't submit empty field/fields";
      };
      if (
        !this.registerUser.fName ||
        !this.registerUser.lName ||
        !this.registerUser.email ||
        !this.registerUser.password
      ) {
        postEmptyError();
      } else {
        this.firebaseAuth();
      }
    },

    firebaseAuth() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.registerUser.email,
          this.registerUser.password
        )
        .then(() => {
          const userId = firebase.auth().currentUser.uid;
          const firstName = this.registerUser.fName;
          const lastName = this.registerUser.lName;
          const userEmail = this.registerUser.email;

          this.writeUserDataBase(userId, firstName, lastName, userEmail);
          this.logCurrentUser(firstName, lastName);

          this.$router.replace({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
          this.registerUser.error = err.message;
        });
    },

    writeUserDataBase(userId, fName, lName, email) {
      dataBase.ref("users/" + userId).set({
        username:
          this.capitalizeFirstLetter(fName) +
          " " +
          this.capitalizeFirstLetter(lName),
        email: email,
      });
    },

    logCurrentUser(fname, lname) {
      const activeUser = fname + " " + lname;
      Vue.prototype.$registeredUser = activeUser;
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },

  data() {
    return {
      registerUser: {
        email: "",
        fName: "",
        lName: "",
        error: "",
        EmptyError: "",
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

.registerError {
  color: red;
  font-size: 18px;
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
