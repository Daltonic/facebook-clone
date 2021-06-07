<template>
  <div class="login grid place-items-center p-10">
    <img src="../assets/logo.png" alt="Facebook Logo" />
    <button
      class="
        my-5
        p-3
        rounded-full
        text-white text-center
        cursor-pointer
        focus:outline-none
      "
    >
      Login With Facebook
    </button>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped>
.login > img {
  object-fit: contain;
  width: 200px;
  height: 200px;
}

.login > button {
  border: 1px solid #45619d;
  background-color: #45619d;
  transition: all 0.3s ease-in-out;
}

.login > button:hover {
  background-color: transparent;
  color: #45619d;
}
</style>