<template>
  <div class="felx-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
    <!-- Feeds -->
    <div class="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
      <!-- Stories -->
      <div class="stories flex items-center justify-center space-x-3 mx-auto">
        <!-- StoryCard -->
        <div
          className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
          v-for="(story, index) in stories"
          :key="index"
        >
          <img
            :src="story.profile"
            :alt="story.name"
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
            :src="story.src"
            :alt="story.name"
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
            {{ story.name }}
          </p>
        </div>
      </div>
      <!-- Input Box -->
      <div
        class="
          bg-white
          p-2
          rounded-2xl
          shadow-md
          text-gray-500
          font-medium
          mt-6
        "
      >
        <div class="flex items-center space-x-4 p-2">
          <img
            :src="user?.photoURL"
            :alt="user?.displayName"
            class="h-10 w-10 rounded-full object-cover icon"
            loading="lazy"
          />
          <form @submit.prevent="onSubmit" class="flex flex-1">
            <input
              type="text"
              :placeholder="`what's on your mind, ${user?.displayName}?`"
              class="
                rounded-full
                h-12
                bg-gray-100
                flex-grow
                px-5
                focus:outline-none
              "
            />
          </form>
        </div>
        <div class="flex justify-evenly p-3 border-t">
          <div class="inputIcon">
            <VideoCameraIcon class="h-7 text-red-500" />
            <p class="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div class="inputIcon">
            <CameraIcon class="h-7 text-green-400" />
            <p class="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
          <div class="inputIcon">
            <EmojiHappyIcon class="h-7 text-yellow-300" />
            <p class="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { EmojiHappyIcon } from "@heroicons/vue/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/vue/solid";
export default {
  setup() {
    const user = ref(null);
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

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
    });

    const onSubmit = () => {
      console.log("submitted");
    };
    return { stories, user, onSubmit };
  },
  components: {
      EmojiHappyIcon,
      CameraIcon,
      VideoCameraIcon
  }
};
</script>

<style scoped>
</style>