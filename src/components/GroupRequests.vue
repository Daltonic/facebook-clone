<template>
  <div class="felx-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto">
    <div class="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
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
              placeholder="Add a new group"
              class="
                rounded-full
                h-12
                bg-gray-100
                flex-grow
                px-5
                focus:outline-none
              "
              v-model.trim="group.name"
            />
            <select
              class="
                rounded-full
                h-12
                bg-gray-100
                flex-grow
                px-5
                focus:outline-none
                text-base
                placeholder-gray-600
              "
              placeholder="Select Group Privacy"
              v-model="group.private"
            >
              <option selected disabled hidden value="">
                Select Group private
              </option>
              <option value="false">Public</option>
              <option value="true">Private</option>
            </select>

            <button
              type="submit"
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                focus:outline-none
              "
            >
              {{ loading ? "Creating..." : "Create" }}
            </button>
          </form>
        </div>
      </div>
      <div
        class="
          flex
          justify-between
          bg-white
          p-2
          rounded-2xl
          shadow-md
          text-gray-500
          font-medium
          mt-6
        "
        v-for="(group, index) in groups"
        :key="index"
      >
        <div
          v-if="group?.type === 'public'"
          class="flex items-center space-x-4 p-2"
        >
          <img
            :src="generateImageFromIntial(group?.name)"
            :alt="group?.name"
            class="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <p>{{ group?.name }}</p>
        </div>

        <div v-else class="flex items-center space-x-4 p-2">
          <img
            :src="generateImageFromIntial(group?.name)"
            :alt="group?.name"
            class="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <p>{{ group?.name }}</p>
        </div>

        <div v-if="!group?.hasJoined" class="flex items-center space-x-4 p-2">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded-full
              focus:outline-none
            "
            @click="joinGroup(group?.guid)"
            v-if="group?.type === 'public'"
          >
            Join Group
          </button>
          <button
            class="
              bg-blue-500
              text-white
              font-bold
              py-2
              px-4
              rounded-full
              italic
              hover:bg-blue-700
              focus:outline-none
              disabled:opacity-50
            "
            disabled
            v-else
          >
            Private
          </button>
        </div>
        <div v-else class="flex items-center space-x-4 p-2">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded-full
              focus:outline-none
            "
            @click="moveTo(`/chats/group/${group?.guid}`)"
          >
            Enter Group
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { CometChat } from "@cometchat-pro/chat";
export default {
  setup() {
    const router = useRouter();
    const user = ref(null);
    const loading = ref(false);
    const group = ref({ name: "", private: "" });
    const groups = ref([]);

    const getGroups = () => {
      const limit = 30;

      const groupsRequest = new CometChat.GroupsRequestBuilder()
        .setLimit(limit)
        .build();

      groupsRequest
        .fetchNext()
        .then((groupList) => groups.value = groupList)
        .catch((error) => {
          console.log("Groups list fetching failed with error", error);
        });
    };

    const joinGroup = (GUID) => {
      const password = "";
      const groupType = CometChat.GROUP_TYPE.PUBLIC;

      CometChat.joinGroup(GUID, groupType, password)
        .then((group) => {
          const index = groups.value.findIndex(g => g.guid === GUID)
          groups.value[index] = group
          console.log("Group joined successfully:", group);
          alert("Group joined successfully");
        })
        .catch((error) => {
          console.log("Group joining failed with exception:", error);
          alert(error.message);
        });
    };

    const moveTo = (path) => {
      router.push(path);
    };

    const onSubmit = () => {
      if (group.value.name === "" || group.value.private === "") return;
      loading.value = true;

      const GUID = generateGUID();
      const groupName = group.value.name;
      const groupType =
        group.value.private === "true"
          ? CometChat.GROUP_TYPE.PRIVATE
          : CometChat.GROUP_TYPE.PUBLIC;
      const password = "";

      const Group = new CometChat.Group(GUID, groupName, groupType, password);

      CometChat.createGroup(Group)
        .then((res) => {
          groups.value.unshift(res);
          console.log("Group created successfully:", res);
          group.value.name = "";
          group.value.private = "";
          loading.value = false;
        })
        .catch((error) => {
          console.log("Group creation failed with exception:", error);
          loading.value = false;
          alert(error.message);
        });
    };

    const generateGUID = (length = 20) => {
      const result = [];
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
        );
      }
      return result.join("");
    };

    const generateImageFromIntial = (name) => {
      let canvas = document.createElement("canvas");
      canvas.style.display = "none";
      canvas.width = "32";
      canvas.height = "32";
      document.body.appendChild(canvas);

      let context = canvas.getContext("2d");
      context.fillStyle = "#999";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "16px Arial";
      context.fillStyle = "#ccc";

      if (name && name != "") {
        let initials = name[0];
        context.fillText(initials.toUpperCase(), 10, 23);

        let data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
      } else {
        return false;
      }
    };

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
      getGroups();
    });

    return {
      loading,
      user,
      group,
      groups,
      onSubmit,
      joinGroup,
      generateImageFromIntial,
      moveTo,
    };
  },
};
</script>

<style scoped>
</style>