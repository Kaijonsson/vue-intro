<template>
  <div class="currentUser">
    <h1>{{ userHeader.userToShow }}</h1>
  </div>
</template>

<script>
import { dataBase } from "../../main";
export default {
  created() {},

  data() {
    return {
      userHeader: {
        userToShow: "",
      },
    };
  },
  //self
  methods: {
    newFunc: function(value) {
      console.log((this.userHeader.userToShow = value));
      return (this.userHeader.userToShow = value);
    },
    getCurrentUser: function(id) {
      console.log("User ID: " + id);
      dataBase
        .ref()
        .child("users")
        .child(id)
        .get()
        .then((usersObject) => {
          if (usersObject.exists()) {
            console.log(usersObject.val());
            console.log(usersObject.child("username").val());
            // this.userToShow = snapshot.child("username").val();

            this.newFunc(usersObject.child("username").val());
          } else {
            console.log("no data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    transmitter: function(user) {
      this.getCurrentUser(user);
    },
  },
};
</script>

<style scoped></style>
