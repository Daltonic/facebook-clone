<template>
  <div class="wall">
    <MainHeader />
    <main class="felx">
      <Sidebar />
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "wall",
  components: {
    MainHeader,
    Sidebar,
  },
};
</script>

<style scoped>
</style>