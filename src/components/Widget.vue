<template>
  <div class="hidden lg:flex flex-col w-60 p-2 mt-5">
    <div class="flex justify-between items-center text-gray-500 mb-5">
      <h2 class="text-xl">Contacts</h2>
      <div class="flex space-x-2">
        <VideoCameraIcon class="h-6" />
        <SearchIcon class="h-6" />
        <DotsHorizontalIcon class="h-6" />
      </div>
    </div>

    <Contact
      v-for="(contact, index) in contacts"
      :key="index"
      :src="contact.src"
      :name="contact.name"
    />
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/vue/solid";
import Contact from "./Contact";
import { ref } from "vue";
export default {
  name: "widget",
  setup() {
    const contacts = ref([
      { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
      { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
      { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
      { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
      { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
      { src: "https://links.papareact.com/6gg", name: "The Queen" },
      { src: "https://links.papareact.com/r57", name: "James Bond" },
    ]);
    return { contacts };
  },
  components: {
    SearchIcon,
    DotsHorizontalIcon,
    VideoCameraIcon,
    Contact,
  },
};
</script>

<style scoped>
</style>