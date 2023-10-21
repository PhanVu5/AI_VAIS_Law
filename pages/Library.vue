<template>
    <div>
        <div class="contain_header_dcv">
            <div class="header_discover box_dcv">
                <font-awesome-icon icon="fa-brands fa-stack-overflow" /><span>  Library</span> 
            </div>
        </div>

        <div class="content_dcv box_dcv">
            <div class="blog_dcv" v-for="title in list.items" :key="title.id">
                <a @click="nextPageChat(title.id)">
                    <div class="title_dcv">
                        <h4>{{ title.name }}</h4>
                    </div>
                    <div class="paragraphs_dcv">
                        <p> {{ getMessage(title.id) }}</p>
                    </div>
                </a>
                <div class=" label_dcv">
                    <div class="time_history see">
                        <font-awesome-icon icon="fa-regular fa-calendar-check" />
                        <span> {{ '   ' + title.updatedAt.slice(0, 19) }}</span> 
                    </div>
                    <div class="time_history share">
                        <font-awesome-icon icon="fa-regular fa-clock" title="last message"/>
                        <span> {{ '   ' + title.lastMessageAt.slice(0, 19) }}</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" allowJs>
import { login } from "@/composables/userChat";
import { conversationUserController } from "@/composables/callApi";
import { appData } from "@/types/modules";

const list = ref([]);
const listMessage = ref([]);
// const detail = await conversationUserController.getDetail('651f7575e725efd57c1094f2');
// const listmessage = await conversationUserController.listMessage(id);


function getMessage(id) {
    if (id) {
        // console.log('abc', listMessage.value.find(obj => obj.filter.conversationId === id));
        // console.log('abc', id);
        return listMessage.value.find(obj => obj.filter.conversationId === id)?.items[1].message;
    } else {
        return ;
    }
}

function nextPageChat(id){
    navigateTo(`chatAI/${id}`);
}

onMounted(async () =>{
    await login();
    list.value = await conversationUserController.list();
    listMessage.value = await Promise.all(list.value.items.map(async item => await conversationUserController.listMessage(item.id)));
    console.log('hjj', list);
    console.log('hjj', list.value.items);
    

})
// console.log("value",list);

</script>