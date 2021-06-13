<template>
  <div class="felx-grow flex-1 h-screen pb-44 pt-6">
    <div
      id="messages"
      class="mx-auto max-w-md md:max-w-lg lg:max-w-2xl overflow-y-auto overflow-x-hidden"
    >
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <Message
          :name="msg?.receiverId !== user?.uid ? user?.name : msg.sender.name"
          :avatar="
            msg?.receiverId !== user?.uid ? user?.avatar : msg.sender.avatar
          "
          :message="msg.text"
          :timestamp="msg.sentAt"
          :isRight="msg?.receiverId !== user?.uid"
        />
      </div>
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <form @submit.prevent="sendMessage" class="relative flex">
        <input
          type="text"
          class="
            w-full
            focus:outline-none
            focus:placeholder-gray-400
            text-gray-600
            placeholder-gray-600
            pl-12
            bg-gray-200
            rounded-full
            py-3
          "
          :placeholder="`Message ${user?.name}`"
          v-model.trim="message"
        />
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              rounded-full
              h-12
              w-12
              transition
              duration-500
              ease-in-out
              text-white
              bg-blue-500
              hover:bg-blue-400
              focus:outline-none
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 transform rotate-90"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, onUpdated } from "vue";
import { CometChat } from "@cometchat-pro/chat";
import Message from "./Message.vue";
export default {
  props: ["uid"],
  components: { Message },
  setup(props) {
    const user = ref(null);
    const messages = ref([]);
    const message = ref("");

    onBeforeMount(() => {
      getUser(props.uid);
      getMessages(props.uid);
      listenForMessage(props.uid);
    });

    onUpdated(() => scrollToEnd());

    const listenForMessage = (listenerID) => {
      CometChat.addMessageListener(
        listenerID,
        new CometChat.MessageListener({
          onTextMessageReceived: (message) => {
            messages.value.push(message);
            scrollToEnd();
          },
        })
      );
    };

    const getMessages = (uid) => {
      const limit = 50;

      const messagesRequest = new CometChat.MessagesRequestBuilder()
        .setLimit(limit)
        .setUID(uid)
        .build();

      messagesRequest
        .fetchPrevious()
        .then((msgs) => {
          messages.value = msgs.filter(
            (m) => m.type === "text" && typeof m.text != "undefined"
          );
          scrollToEnd();
        })
        .catch((error) =>
          console.log("Message fetching failed with error:", error)
        );
    };

    const sendMessage = () => {
      const receiverID = props.uid;
      const messageText = message.value;
      const receiverType = CometChat.RECEIVER_TYPE.USER;
      const textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        receiverType
      );

      CometChat.sendMessage(textMessage)
        .then((msg) => {
          messages.value.push(msg);
          message.value = "";
          scrollToEnd();
        })
        .catch((error) =>
          console.log("Message sending failed with error:", error)
        );
    };

    const getUser = (uid) => {
      CometChat.getUser(uid)
        .then((u) => (user.value = u))
        .catch((error) => {
          console.log("User details fetching failed with error:", error);
        });
    };

    const scrollToEnd = () => {
      const elmnt = document.getElementById("messages");
      elmnt.scrollTop = elmnt.scrollHeight;
    };
    return { user, message, messages, sendMessage };
  },
};
</script>

<style scoped>
#messages {
  height: calc(100vh - 200px);
}
</style>