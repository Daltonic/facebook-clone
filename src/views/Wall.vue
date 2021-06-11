<template>
  <div class="wall">
    <MainHeader />
    <main class="flex">
      <Sidebar />
      <Feed />
      <Widget />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
import Feed from "../components/Feed.vue";
import Widget from "../components/Widget.vue";
export default {
  name: "wall",
  components: {
    MainHeader,
    Sidebar,
    Feed,
    Widget,
  },
};
</script>

<style scoped>
</style>