<template>
  <div class="friends">
    <MainHeader />
    <main class="flex">
      <Sidebar />
      <GroupRequests />
      <Widget />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
import GroupRequests from "../components/GroupRequests.vue";
import Widget from "../components/Widget.vue";
export default {
  name: "friends",
  components: {
    MainHeader,
    Sidebar,
    GroupRequests,
    Widget,
  },
};
</script>

<style scoped>
</style>