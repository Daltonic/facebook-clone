<template>
  <div class="felx-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto">
    <div class="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
      <div
        class="
          flex
          justify-between
          bg-white
          p-2
          rounded-2xl
          shadow-md
          text-gray-500
          font-medium
          mt-6
        "
        v-for="(user, index) in users"
        :key="index"
      >
        <router-link
          :to="`/chats/user/${user?.uid}`"
          class="flex items-center space-x-4 p-2"
        >
          <img
            :src="user?.avatar"
            :alt="user?.name"
            class="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <p>{{ user?.name }}</p>
        </router-link>
        <div class="flex items-center space-x-4 p-2">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded-full
              focus:outline-none
            "
            @click="addFriend(user?.uid)"
          >
            Add as Friend
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { CometChat } from "@cometchat-pro/chat";
import { cometChatConfig } from "../app.config";
export default {
  setup() {
    const user = ref(null);
    const users = ref([]);

    const getUsers = () => {
      const limit = 20;
      const usersRequest = new CometChat.UsersRequestBuilder()
        .setLimit(limit)
        .build();

      usersRequest
        .fetchNext()
        .then((userList) => (users.value = userList))
        .catch((error) => {
          console.log("User list fetching failed with error:", error);
        });
    };

    const addFriend = (uid) => {
      const url = `https://api-us.cometchat.io/v2.0/users/${user.value.uid}/friends`;
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          appId: cometChatConfig.APP_ID,
          apiKey: cometChatConfig.REST_KEY,
        },
        body: JSON.stringify({ accepted: [uid] }),
      };
      fetch(url, options)
        .then((res) => {
          console.log(res);
          alert("Added as friend successfully");
        })
        .catch((err) => console.error("error:" + err));
    };

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
      getUsers();
    });

    return { user, users, addFriend };
  },
};
</script>

<style scoped>
</style>