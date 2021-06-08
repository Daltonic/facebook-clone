<template>
  <div id="app">
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
</style>