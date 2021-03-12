import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTNhe8oXngFw04L4FK_SiAJsuGO9lWas",
  authDomain: "vue-login-733d1.firebaseapp.com",
  databaseURL: "https://vue-login-733d1-default-rtdb.firebaseio.com",
  projectId: "vue-login-733d1",
  storageBucket: "vue-login-733d1.appspot.com",
  messagingSenderId: "1023227131801",
  appId: "1:1023227131801:web:55901f0b0ec05323904508",
};

firebase.initializeApp(firebaseConfig);
export const dataBase = firebase.database();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

// export default {
//   textRef: dataBase.ref("users"),
// };

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
