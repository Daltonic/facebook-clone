<template>
  <div class="stories flex items-center justify-center space-x-3 mx-auto">
    <!-- StoryCard -->
    <StoryCard
      v-for="(story, index) in stories"
      :profile="story.profile"
      :src="story.src"
      :name="story.name"
      :key="index"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import StoryCard from "./StoryCard.vue";
export default {
  components: { StoryCard },
  setup() {
    const stories = ref([
      {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
      },
      {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
      },
      {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
      },
      {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
      },
      {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
      },
    ]);
    return { stories };
  },
};
</script>

<style scoped>
</style>