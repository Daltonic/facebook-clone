<template>
  <div
    class="
      flex
      items-center
      space-x-2
      p-4
      hover:bg-gray-200
      rounded-xl
      cursor-pointer
    "
  >
    <img
      v-if="img"
      :src="img"
      alt="avatar"
      width="30"
      height="30"
      loading="lazy"
      :title="title"
      class="icon"
      @click="logOut"
    />
    <slot v-else></slot>
    <p class="hidden sm:inline-flex font-medium capitalize">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "img"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>