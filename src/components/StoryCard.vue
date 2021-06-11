<template>
  <div
    className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
  >
    <img
      :src="profile"
      :alt="name"
      class="
        h-10
        w-10
        ml-2
        absolute
        opacity-0
        lg:opacity-100
        rounded-full
        z-50
        top-6
        object-cover
      "
      loading="lazy"
    />
    <img
      :src="src"
      :alt="name"
      class="
        h-full
        object-cover
        filter
        brightness-75
        rounded-full
        lg:rounded-3xl
      "
      loading="lazy"
    />
    <p
      className="absolute opacity-0 lg:opacity-100 bottom-4 left-5 w-2/3 text-white text-sm font-bold truncate"
    >
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "story-card",
  props: ["profile", "name", "src"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>