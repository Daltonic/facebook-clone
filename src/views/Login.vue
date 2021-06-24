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
    </div>
  </div>
</template>

<script>
import { auth, provider } from "../firebase";
import { CometChat } from "@cometchat-pro/chat";
import { cometChatConfig } from "../app.config";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "login",
  setup() {
    let loading = ref(false);
    const router = useRouter();

    const signIn = () => {
      loading.value = true;
      auth
        .signInWithPopup(provider)
        .then((res) => loginCometChat(res.user))
        .catch((error) => {
          loading.value = false;
          console.log(error);
          alert(error.message);
        });
    };

    const loginCometChat = (data) => {
      const authKey = cometChatConfig.AUTH_KEY;

      CometChat.login(data.uid, authKey)
        .then((u) => {
          console.log(u);
          localStorage.setItem('user', JSON.stringify(data))
          loading.value = false;
          router.push("/");
        })
        .catch((error) => {
          if (error.code === "ERR_UID_NOT_FOUND") {
            signUpWithCometChat(data);
          } else {
            console.log(error);
            loading.value = false;
            alert(error.message);
          }
        });
    };

    const signUpWithCometChat = (data) => {
      const authKey = cometChatConfig.AUTH_KEY;
      const user = new CometChat.User(data.uid);

      user.setName(data.displayName);
      user.setAvatar(data.photoURL);

      CometChat.createUser(user, authKey)
        .then(() => {
          loading.value = false;
          alert("You are now signed up, click the button again to login");
        })
        .catch((error) => {
          console.log(error);
          loading.value = false;
          alert(error.message);
        });
    };

    return { loading, signIn };
  }
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