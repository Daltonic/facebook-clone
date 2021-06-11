<template>
  <div
    class="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
  >
    <img
      class="rounded-full h-10 w-10 object-cover"
      :src="src"
      loading="lazy"
    />
    <p>{{ name }}</p>
    <div
      class="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"
    />
  </div>
</template>

<script>
export default {
  name: "contact",
  props: ["src", "name"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>