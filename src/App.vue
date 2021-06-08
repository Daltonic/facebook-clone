<template>
  <div id="app" class="h-screen bg-gray-100 overflow-hidden">
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