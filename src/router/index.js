import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "regiester",
    component: Register,
  },
  {
    path: "/secret",
    name: "secret",
    component: Secret,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// const { isNavigationFailure, NavigationFailureType } = VueRouter;

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");

    // .catch((failure) => {
    //   if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    //     // show a small notification to the user
    //     console.log(failure);
    //   }
    // });
  } else {
    next();
  }
});
export default router;
