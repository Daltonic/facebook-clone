<template>
  <div id="app">
    <MainHeader />
    <main></main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
// import { ref } from 'vue'
export default {
  name: "app",
  components: {
    MainHeader,
  },
};
</script>

<style scoped>
</style>