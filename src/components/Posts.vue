<template>
  <div>
    <Post
      v-for="post in posts"
      :key="post.id"
      :name="post.name"
      :message="post.message"
      :email="post.email"
      :timestamp="post.timestamp"
      :image="post.image"
      :postImage="post.postImage"
    />
  </div>
</template>

<script>
import db from "../firebase";
import { ref, onMounted } from "vue";
import Post from "./Post.vue";
export default {
  setup() {
    const posts = ref([]);

    const listPosts = () => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          posts.value = snapshot.docs.map((doc) => {
            const data = { ...doc.data(), id: doc.id };
            return data;
          });
        });
    };

    onMounted(() => {
      listPosts();
    });
    return { posts };
  },
  components: {
    Post,
  },
};
</script>

<style scoped>
</style>