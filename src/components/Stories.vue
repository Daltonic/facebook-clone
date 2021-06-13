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
        name: "Darlington Gospel",
        src: "https://firebasestorage.googleapis.com/v0/b/facebook-clone-dff86.appspot.com/o/stories%2FIMG-20191026-WA0000.jpg?alt=media&token=23ff54fb-ceb2-4476-a142-e886a32ebb60",
        profile:
          "https://firebasestorage.googleapis.com/v0/b/facebook-clone-dff86.appspot.com/o/stories%2FWhatsApp%20Image%202021-01-26%20at%2012.25.20%20PM.jpeg?alt=media&token=d3fe60ba-3e75-4748-9b4f-9b690c6f1426",
      },
      {
        name: "Myles Munroe",
        src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/11/11/17/Myles_Munroe.jpg?width=1200",
        profile: "https://1.bp.blogspot.com/-NVuQ02pDdMk/XcA7WZrOuGI/AAAAAAAAU1k/CJflEQ7wBiwOEfPsuUnYdMVH4ppCogXmQCLcBGAsYHQ/s1600/Myles%2B1.jpg",
      },
      {
        name: "TD Jakes",
        src: "https://jakesdivinity.org/wp-content/uploads/2020/09/rsz_bishop_jakes_headshot-e1600264848251.jpg",
        profile: "https://www1.cbn.com/sites/default/files/styles/original/public/media/standard/images/SUJA1_TD_Jakes_SI.jpg?itok=9Bg2WhZt",
      },
      {
        name: "Kevin Zadia",
        src: "https://kevinzadai.com/wp-content/uploads/2019/12/kevin-kathi-zadai-partnership.jpg",
        profile: "https://yt3.ggpht.com/ytc/AAUvwngwW1v09FEB-mhdE2T6Jkqi0gdfbRpvEpBwCtce=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
      },
    ]);
    return { stories };
  },
};
</script>

<style scoped>
</style>