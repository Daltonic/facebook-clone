<template>
  <div class="login grid place-items-center p-10">
    <img src="../assets/logo.png" alt="Facebook Logo" loading="lazy" />
    <div class="flex items-center">
      <button
        class="
          my-5
          p-3
          rounded-full
          text-white text-center
          cursor-pointer
          focus:outline-none
        "
        @click="signIn"
      >
        {{ !loading ? "Sign In With Google" : "Signing..." }}
      </button>

      <!-- <button
        class="
          my-5
          p-3
          rounded-full
          text-white text-center
          cursor-pointer
          focus:outline-none
        "
        @click="signInWithFacebook"
      >
        Sign In With Google
      </button> -->
    </div>
  </div>
</template>

<script>
import { auth, provider } from "../firebase";
import { CometChat } from "@cometchat-pro/chat";
import { cometChat } from "../app.config";
export default {
  name: "login",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    signIn() {
      this.loading = true;
      auth
        .signInWithPopup(provider)
        .then((res) => this.loginCometChat(res.user))
        .catch((error) => {
          this.loading = false;
          console.log(error);
          alert(error.message);
        });
    },

    loginCometChat(data) {
      const authKey = cometChat.AUTH_KEY;

      CometChat.login(data.uid, authKey)
        .then((u) => {
          console.log(u);
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.code === "ERR_UID_NOT_FOUND") {
            this.signUpWithCometChat(data);
          } else {
            console.log(error);
            this.loading = false;
            alert(error.message);
          }
        });
    },

    signUpWithCometChat(data) {
      const authKey = cometChat.AUTH_KEY;
      const user = new CometChat.User(data.uid);

      user.setName(data.displayName);
      user.setAvatar(data.photoURL);

      CometChat.createUser(user, authKey)
        .then(() => {
          this.loading = false;
          alert("You are now signed up, click the button again to login");
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
.login > img {
  object-fit: contain;
  width: 200px;
  height: 200px;
}

.login > div > button:first-child {
  border: 1px solid #45619d;
  background-color: #45619d;
  transition: all 0.3s ease-in-out;
  margin: 20px 5px;
}

.login > div > button:first-child:hover {
  background-color: transparent;
  color: #45619d;
}

/* .login > div > button:last-child {
  border: 1px solid #0a8d48;
  background-color: #0a8d48;
  transition: all 0.3s ease-in-out;
  margin: 20px 5px
}

.login > div > button:last-child:hover {
  background-color: transparent;
  color: #0a8d48;
} */
</style>