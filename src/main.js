import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTNhe8oXngFw04L4FK_SiAJsuGO9lWas",
  authDomain: "vue-login-733d1.firebaseapp.com",
  projectId: "vue-login-733d1",
  storageBucket: "vue-login-733d1.appspot.com",
  messagingSenderId: "1023227131801",
  appId: "1:1023227131801:web:55901f0b0ec05323904508",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
