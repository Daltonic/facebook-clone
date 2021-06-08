<template>
  <div class="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
    <SidebarRow :img="user?.photoURL" :title="user?.displayName" />
    <SidebarRow title="Friends">
      <UsersIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Groups">
      <UserGroupIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Marketplace">
      <ShoppingBagIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Watch">
      <DesktopComputerIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Events">
      <CalendarIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Memories">
      <ClockIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="See More">
      <ChevronDownIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
    <SidebarRow title="Logout" @click="logOut">
      <LogoutIcon class="h-8 w-8 text-blue-500" />
    </SidebarRow>
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";
import { ref, onMounted } from "vue";
import {
  ChevronDownIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/vue/solid";
import { auth } from "../firebase";
import { useRouter } from "vue-router";
export default {
  name: "sidebar",
  setup() {
    let user = ref(null);
    const router = useRouter();

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
    });

    const logOut = () => {
      auth
        .signOut()
        .then(() => {
          localStorage.clear()
          router.push("/login");
        })
        .catch((error) => console.log(error.message));
    };

    return { user, logOut };
  },
  components: {
    ChevronDownIcon,
    UserGroupIcon,
    ShoppingBagIcon,
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    SidebarRow,
    LogoutIcon
  },
};
</script>

<style scoped>
</style>