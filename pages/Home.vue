<template>
  <div
    id="replace_type_ask"
    class="container__home w-full h-full mx-auto max-w-screen-md px-20 text-center"
  >
    <div class="title">
      <h1 class="text-4xl">Nơi tri thức bắt đầu</h1>
    </div>
    <div class="relative">
      <textarea
        id="myTextarea"
        class="input_user border-2"
        name=""
        cols="30"
        rows="1"
        placeholder="Hỏi tôi bất kỳ điều gì..."
        style="min-height: 114px !important"
        v-model="messageInput"
        v-on:keyup.enter="listenInput(messageInput)"
      ></textarea>
      <!-- Feature
      <button class="inp_buttom btn_focus">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Focus
      </button>
      <button class="inp_buttom btn_file">
        <font-awesome-icon icon="fa-solid fa-circle-plus" style="color: #25395b" /> File
      </button> -->
      <!--Copilot

      <button class="btn_checkbox" onchange="replaceColorCopilot(), replaceText()">
        <label class="switch">
          <input type="checkbox" id="myCheckbox" />
          <span class="slider round"></span>
          <div id="name_checkbox" class="name_checkbox">Copilot</div>
        </label>
      </button> -->
      <div id="click-ask">
        <button
          class="inp_buttom btn_arrow"
          @click="listenInput(messageInput)"
          :style="{
            background: messageInput != '' ? 'rgb(32, 128, 141)' : '#dedede',
            color: messageInput != '' ? '#fff' : '#999',
          }"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
    <div class="try_ask_curent">
      <!-- <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" /> -->
      <span id="type_ask"
        >Chúng tôi sáng tạo ra các giải pháp nhằm để thay đổi cách các tổ chức vận hành
        công việc của họ bằng cách tận dụng trí thông minh nhân tạo. Hiện nay, các giải
        pháp của chúng tôi được triển khai tại các cơ quan của Nhà nước Việt Nam để giải
        quyết những vấn đề cơ bản đã kéo dài hàng thập kỷ trước.</span
      >
      <!-- Try<span id="type_ask"> asking</span> -->
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { conversationUserController } from "@/composables/callApi";
const store = useStore();

const messageInput = ref("");

const listenInput = async (mess) => {
  const post = await conversationUserController.sendMessage("", mess);

  await navigateTo(`chatAI/${post.record.id}`);
};

onMounted(async () => {});
</script>
