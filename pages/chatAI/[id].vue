<template>
  <div class="container_chatbox container_scroll w-full">
    <div class="contain_head_cb">
      <div class="avt_cb">
        <img src="@/image/logo/connect_face.png" alt="" />
        <span>&nbsp; phanminhvu_t65@levthanh</span>
      </div>
      <div class="function_centerhead_cb">
        <div class="function_cb-hover fnc_center_frist">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <span> Bộ sưu tập </span>
        </div>
        <p>&nbsp;/&nbsp;</p>
        <div class="function_cb-hover fnc_center_second">
          <span> Chưa tiêu đề</span>
        </div>
      </div>
      <div class="function_setting_cb">
        <button class="active_setting setting_frist">
          <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </button>

        <button class="active_setting setting_second">
          <font-awesome-icon icon="fa-solid fa-briefcase" />
          <span> Share </span>
        </button>
      </div>
    </div>
    <!-- ************************************************************************** -->
    <div
      class="content_cb box_dcv"
      v-for="(mess, index) in listMessage"
      :id="'fist_ask_chat' + index"
    >
      <div class="title_first" v-if="index % 2 === 0">
        <!-- <div class="avt_cb">
          <img src="@/image/logo/connect_face.png" alt="" /> -->
        <font-awesome-icon icon="fa-regular fa-circle-user" />
        <span>{{ " " + mess.message }}</span>
        <!-- </div> -->
      </div>

      <div class="curent_answer" v-else>
        <!-- <div class="quick_search_cb">
          <div class="css_title_cb status_quicksearch">
            <font-awesome-icon icon="fa-solid fa-bolt" />
            <span> Quick Search</span>
          </div>
          <div class="contain_box_cb">
            <div class="box_cb"></div>
              <div class="name_web">
                <img src="@/image/logo/youtube.png" alt="" />
                <span>youtube</span>
              </div>
            </div>
            <div v-for="info in mess.ragContents">
              <button v-show="false">{{ info.id }}</button>
            </div>
          </div>
        </div> -->

        <div class="bot_answer_cb">
          <div class="css_title_cb header_answer">
            <font-awesome-icon icon="fa-solid fa-bars-staggered" />
            <span> Trả lời</span>
            <div class="box_chat" v-for="info in mess.ragContents">
              <p class="title_law" @click="toggleComponentById(info.id)">
                {{ infoExchangeText[info.docName] + " " + info.partName }}
              </p>

              <QuickSearch
                :info="info.pageContent"
                v-show="showComponent(info.id)"
              ></QuickSearch>
            </div>
          </div>
          <div
            class="paragraphs_answer"
            style="background: rgb(241 239 239); padding: 21px 15px; border-radius: 15px"
          >
            <p>
              {{ mess.message }}
            </p>
          </div>
          <div class="img_search_answer">
            <img src="" alt="" />
          </div>
        </div>

        <!-- <div class="change_copilot_answer">
          <div class="header_copilot">
            <div class="copilot_title_first">
              <font-awesome-icon icon="fa-solid fa-rotate-right" />
              <span> Copilot</span>
            </div>
            <font-awesome-icon icon="fa-regular fa-flag" />
            <font-awesome-icon icon="fa-solid fa-layer-group" />
            <font-awesome-icon icon="fa-regular fa-clipboard" />
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </div>

          <div class="box_copilot_answer">
            <div class="triangle"></div>
            <div class="box_copilot">
              <div class="title_copilot_answer">
                <font-awesome-icon icon="fa-brands fa-galactic-republic" />
                <span> Try Copilot</span>
              </div>
              <div class="paragrhaps_boxchange_copilot">
                <p>
                  Copilot is the best way to answer the hardest questions. Search the web
                  more comprehensively than ever before.
                </p>
              </div>
            </div>
          </div>
        </div> -->

        <div class="change_related_answer">
          <div class="header_related"></div>

          <!-- <div class="box_related_answer">
            <div class="css_title_cb title_related_answer">
              <font-awesome-icon icon="fa-brands fa-stack-overflow" />
              <span> Related</span>
            </div>
            <div class="related_name">
              <button class="box-related">
                <p>What is the meaning of "{{ mess.message.slice(0, 18) }}..."</p>
                <span>+</span>
              </button>
              <button class="box-related">
                <p>What is the meaning of "{{ mess.message.slice(0, 18) }}..."</p>
                <span>+</span>
              </button>
              <button class="box-related">
                <p>What is the meaning of "{{ mess.message.slice(0, 18) }}..."</p>
                <span>+</span>
              </button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- ************************************************************************** -->
    <div class="checkbox" ref="chatAI_lineChat">
      <div class="fixed_checkbox">
        <textarea
          class="chat_askAI"
          id="myTextarea"
          name=""
          cols="30"
          rows="1"
          placeholder="Trò chuyện ở đây..."
          v-model="messageInput"
          v-on:keyup.enter="listenInput(messageInput)"
        ></textarea>

        <!-- Copilot 
          
          <button class="btn_checkbox location-first" onchange="replaceColorCopilot()">
          <label class="switch">
            <input type="checkbox" id="myCheckbox" />
            <span class="slider round"></span>
            <div id="name_checkbox" class="name_checkbox">Copilot</div>
          </label>
        </button> -->
        <button
          class="inp_buttom btn_arrow location-second"
          @click="listenInput(messageInput)"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-up" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" allowJs="true">
import { useStore } from "vuex";
import { conversationUserController } from "@/composables/callApi";
import { mapDocName } from "@/types/ExchangeSymbol";
import { appData } from "@/types/app-data";
import { ConversationMessageRecord } from "~/composables/types";
import { soketiClient } from "@/types/socketi";
// import { useStore } from "vuex";

// const store = useStore();
const route = useRoute();
const store = useStore();
const store_mess = ref({});
const infoExchangeText = mapDocName;
const listMessage = ref([]);
const messageInput = ref("");
const visibleComponents = ref([]);
let checkMess = ref(false);

onMounted(async () => {
  await conversationUserController.listMessage(route.params.id);
  listMessage.value = store.state.conversationMessages.list.items.filter(
    (id) => id.conversationId === route.params.id
  );
});

watch(checkMess, (newCheckMess) => {
  console.log("watch aready");
  newCheckMess = false;
  setTimeout(() => {
    listMessage.value = store.state.conversationMessages.list.items.filter(
      (id) => id.conversationId === route.params.id
    );
  }, 500);
});

function toggleComponentById(id) {
  console.log("save", visibleComponents.value);
  if (visibleComponents.value.includes(id)) {
    visibleComponents.value = visibleComponents.value.filter((item) => item !== id);
  } else {
    visibleComponents.value.push(id);
  }
}

function showComponent(id) {
  console.log("class", visibleComponents.value.includes(id));
  return visibleComponents.value.includes(id);
}

const listenInput = (mess) => {
  const post = conversationUserController.sendMessage(route.params.id, mess);
  checkMess = true;
};
</script>
