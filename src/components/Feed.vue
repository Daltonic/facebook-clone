<template>
  <div class="felx-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto">
    <!-- Feeds -->
    <div class="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
      <!-- Stories -->
      <Stories />
      <!-- Input Box -->
      <InputBox />
      <!-- Posts -->
      <Posts />
    </div>
  </div>
</template>

<script>
import Posts from "./Posts.vue";
import InputBox from "./InputBox.vue";
import Stories from "./Stories.vue";
export default {
  components: {
    Posts,
    InputBox,
    Stories,
  },
};
</script>

<style scoped>
</style>