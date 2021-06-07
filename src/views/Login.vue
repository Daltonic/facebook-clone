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
        @click="signInWithFacebook"
      >
        Sign In With Facebook
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
// import { auth, provider } from "../firebase";
export default {
  name: "login",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    signInWithFacebook() {
      console.log("Sign in with facebook");
    },

    // signIn() {
    //   this.loading = true;
    //   auth
    //     .signInWithPopup(provider)
    //     .then((res) => loginCometChat(res.user))
    //     .catch((error) => {
    //       this.loading = true;
    //       alert(error.message);
    //     });
    // },
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