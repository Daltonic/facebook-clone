<template>
  <div
    class="sticky top-8 z-58 bg-white flex items-center p-2 lg:px-5 shadow-md"
  >
    <!-- Left -->
    <div class="flex items-center">
      <img
        src="../assets/logo.png"
        alt="Facebook Logo"
        width="40"
        height="40"
        loading="lazy"
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
        >
          <ShoppingCartIcon
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
        >
          <UserGroupIcon class="h-5 text-gray-500 group-hover:text-blue-500" />
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="flex items-center sm:space-x-2 justify-end">
      <!-- <LogoutIcon class="icon"/> -->
      <img
        src="../assets/logo.png"
        alt="avatar"
        width="30"
        height="30"
        loading="lazy"
        title="Username"
        class="icon"
        @click="logOut"
      />
      <p class="whitespace-nowrap font-semibold pr-3">Darlington Gospel</p>
      <ViewGridIcon class="icon" />
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
  ViewGridIcon,
  // LogoutIcon,
} from "@heroicons/vue/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/outline";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

export default {
  name: "main-header",
  setup() {
    const router = useRouter();

    const logOut = () => {
      auth
        .signOut()
        .then(() => {
          router.push("/login");
        })
        .catch((error) => console.log(error.message));
    }

    return { logOut };
  },
  components: {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    // LogoutIcon,
  },
};
</script>

<style scoped>
</style>