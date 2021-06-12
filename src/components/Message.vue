<template>
  <div class="mb-4">
    <div v-if="isRight" class="flex items-end justify-start">
      <img
        class="
          h-10
          w-10
          rounded-full
          object-cover
          xl:inline-flex
          p-2
          h-10
          w-10
          bg-gray-200
          rounded-full
          text-gray-700
          cursor-pointer
          hover:bg-gray-300
        "
        loading="lazy"
        :src="avatar"
        :alt="name"
      />
      <div class="w-2/4 bg-white p-5 rounded-r-2xl rounded-t-2xl ml-2">
        <p>{{ message }}</p>
        <small class="font-medium">{{ new Date(1000 * timestamp).toLocaleString() }}</small>
      </div>
    </div>

    <div v-else class="flex items-end justify-end">
      <div class="w-2/4 bg-blue-100 p-5 rounded-l-2xl rounded-t-2xl mr-2">
        <p>{{ message }}</p>
        <small class="font-medium">{{ new Date(1000 * timestamp).toLocaleString() }}</small>
      </div>
      <img
        class="
          h-10
          w-10
          rounded-full
          object-cover
          xl:inline-flex
          p-2
          h-10
          w-10
          bg-gray-200
          rounded-full
          text-gray-700
          cursor-pointer
          hover:bg-gray-300
        "
        loading="lazy"
        :src="avatar"
        :alt="name"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    avatar: { type: String },
    message: { type: String },
    timestamp: { type: Number },
    isRight: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>