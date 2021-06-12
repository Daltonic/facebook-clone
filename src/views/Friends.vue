<template>
  <div class="friends">
    <MainHeader />
    <main class="flex">
      <Sidebar />
      <Requests />
      <Widget />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
import Requests from "../components/Requests.vue";
import Widget from "../components/Widget.vue";
export default {
  name: "friends",
  components: {
    MainHeader,
    Sidebar,
    Requests,
    Widget,
  },
};
</script>

<style scoped>
</style>