<template>
  <div class="sticky z-58 bg-white flex items-center p-2 lg:px-5 shadow-md">
    <!-- Left -->
    <div class="flex items-center">
      <img
        src="../assets/logo.png"
        alt="Facebook Logo"
        width="40"
        height="40"
        loading="lazy"
        class="cursor-pointer"
        @click="moveTo('/')"
      />
      <div class="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon class="h-6 text-gray-600" />
        <input
          class="
            hidden
            md:inline-flex
            ml-2
            items-center
            bg-transparent
            outline-none
            flex-shrink
          "
          type="text"
          placeholder="Search Facebook"
        />
      </div>
    </div>
    <!-- Center -->
    <div class="flex justify-center flex-grow">
      <div class="flex space-x-6 md:space-x-2">
        <div
          class="
            flex
            items-center
            cursor-pointer
            md:px-10
            sm:h-14
            md:hover:bg-gray-100
            rounded-xl
            group
          "
          @click="moveTo('/')"
        >
          <HomeIcon class="h-5 text-gray-500 group-hover:text-blue-500" />
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            md:px-10
            sm:h-14
            md:hover:bg-gray-100
            rounded-xl
            group
          "
        >
          <FlagIcon class="h-5 text-gray-500 group-hover:text-blue-500" />
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            md:px-10
            sm:h-14
            md:hover:bg-gray-100
            rounded-xl
            group
          "
        >
          <PlayIcon class="h-5 text-gray-500 group-hover:text-blue-500" />
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            md:px-10
            sm:h-14
            md:hover:bg-gray-100
            rounded-xl
            group
          "
          @click="moveTo('/users')"
        >
          <UsersIcon
            class="h-5 text-gray-500 group-hover:text-blue-500"
          />
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            md:px-10
            sm:h-14
            md:hover:bg-gray-100
            rounded-xl
            group
          "
          @click="moveTo('/groups')"
        >
          <UserGroupIcon class="h-5 text-gray-500 group-hover:text-blue-500" />
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="flex items-center sm:space-x-2 justify-end">
      <!-- <LogoutIcon class="icon"/> -->
      <img
        :src="user?.photoURL"
        alt="avatar"
        width="30"
        height="30"
        loading="lazy"
        title="Username"
        class="icon"
      />
      <p class="whitespace-nowrap font-semibold pr-3 capitalize">
        {{ user?.displayName }}
      </p>
      <PlusIcon class="icon" />
      <ChatIcon class="icon" />
      <BellIcon class="icon" />
      <ChevronDownIcon class="icon" />
    </div>
  </div>
</template>

<script>
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  FlagIcon,
  PlayIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/vue/solid";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "main-header",
  setup() {
    let user = ref(null);
    const router = useRouter();

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
    });

    const moveTo = (path) => {
      router.push(path);
    };

    return { user, moveTo };
  },
  components: {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    PlusIcon,
    FlagIcon,
    PlayIcon,
    SearchIcon,
    UsersIcon,
  },
};
</script>

<style scoped>
</style>