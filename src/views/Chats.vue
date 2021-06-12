<template>
  <div class="friends">
    <MainHeader />
    <main class="flex">
      <Sidebar />
      <Messages :id="id" :type="type" />
      <Widget />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
import Messages from "../components/Messages.vue";
import Widget from "../components/Widget.vue";
export default {
  name: "chats",
  props: ['id', 'type'],
  setup() {
    return {};
  },
  components: {
    MainHeader,
    Sidebar,
    Messages,
    Widget,
  },
};
</script>

<style scoped>
</style>