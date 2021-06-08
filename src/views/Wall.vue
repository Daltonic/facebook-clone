<template>
  <div class="wall">
    <MainHeader />
    <main class="flex">
      <Sidebar />
      <Feed />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
import Feed from "../components/Feed.vue";
export default {
  name: "wall",
  components: {
    MainHeader,
    Sidebar,
    Feed,
  },
};
</script>

<style scoped>
</style>