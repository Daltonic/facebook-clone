<template>
  <div class="flex flex-col">
    <div class="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
      <div class="flex items-center space-x-2">
        <img class="rounded-full icon" :src="image" width="40" height="40" />
        <div>
          <p class="font-medium">{{ name }}</p>
          <p v-if="timestamp" class="text-xs text-gray-400">
            {{ new Date(timestamp?.toDate()).toLocaleString() }}
          </p>
          <p v-else class="text-xs text-gray-400">Loading</p>
        </div>
      </div>

      <p class="pt-4">{{ message }}</p>
    </div>
    <div v-if="postImage" class="relative h-56 md:h-96 bg-white">
      <img :src="postImage" class="object-cover w-full" loading="lazy" />
    </div>

    <!-- Post Footer -->
    <div
      class="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t"
    >
      <div class="inputIcon p-3 rounded-none rounded-bl-2xl">
        <ThumbUpIcon class="h-4" />
        <p class="text-xs sm:text-base">Like</p>
      </div>

      <div class="inputIcon p-3 rounded-none">
        <ChatAltIcon class="h-4" />
        <p class="text-xs sm:text-base">Comment</p>
      </div>

      <div class="inputIcon p-3 rounded-none rounded-br-2xl">
        <ShareIcon class="h-4" />
        <p class="text-xs sm:text-base">Share</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/vue/outline";
export default {
  props: ["name", "message", "email", "timestamp", "image", "postImage"],
  setup() {
    return {};
  },
  components: { ChatAltIcon, ShareIcon, ThumbUpIcon },
};
</script>

<style scoped>
</style>