/** Xử lý check tokens, Authorization với các cách có thể  
 * Middleware
 * Grap
 * Lifecycle
 * **/


import axios from 'axios';
import { login } from "@/composables/userChat";
import {
    ConversationMessageRecord,
    ConversationRecord,
} from '~/composables/types';
const url = 'https://llm-bot-api.vais.vn/api/v1/conversations';
import { appData } from "@/types/app-data";
import { useStore } from "vuex";
const store = useStore();
console.log("123", store.state.count);

// const url = 'https://64b4bf820efb99d86269398b.mockaxios.io/user';

const limit = 20;
let tokens = JSON.parse(localStorage.getItem('tokens') as any);



export const conversationUserController = {
    async list() {

        try {
            if (tokens !== JSON.parse(localStorage.getItem('tokens') as any)) {
                await login();
                tokens = JSON.parse(localStorage.getItem('tokens') as any);
            }

            
            const res: { data: any } = await axios.get(
                url,
                {
                    headers: {
                        Accept: 'application/json',
                        // Thêm thông tin xác thực (authorization) vào header của mọi yêu cầu
                        Authorization: `Bearer ${tokens.access.token}`,

                    },
                    params: {
                        limit,
                    }
                },
            ) as {
                data: {
                    items: ConversationRecord[];
                };
            }
            
            
            return res?.data.data;
        } catch (error) {
            console.error();
        }
    },
    async getDetail(conversationId?: string) {
        if (tokens !== JSON.parse(localStorage.getItem('tokens') as any)) {
            await login();
            tokens = JSON.parse(localStorage.getItem('tokens') as any);
        }
        const res: { data: any } = await axios.get(
            url,
            {
                headers: {
                    Accept: 'application/json',

                    // Thêm thông tin xác thực (authorization) vào header của mọi yêu cầu
                    Authorization: `Bearer ${tokens.access.token}`,

                },
                params: {
                    conversationId,
                }
            },
        )
        
        return res?.data.data;
    },
    async listMessage(conversationId?: String) {
        if (tokens !== JSON.parse(localStorage.getItem('tokens') as any)) {
            await login();
            tokens = JSON.parse(localStorage.getItem('tokens') as any);
        }
        if (conversationId) {
            const tokens = JSON.parse(localStorage.getItem('tokens') as any);
            const res: { data: any } = await axios.get(
                url + `/${conversationId}/messages?sort%5BcreatedAt%5D=1`,
                {
                    headers: {
                        Accept: 'application/json',

                        // Thêm thông tin xác thực (authorization) vào header của mọi yêu cầu
                        Authorization: `Bearer ${tokens.access.token}`,

                    },
                    params: {

                    }
                },
            )
            appData.conversationMessages.list = res?.data.data;
            return res?.data.data;
        } else {
            appData.conversationMessages.list = {
                filter: {
                    conversationId: null,
                },
                items: [],
            };
        }
    },
    async sendMessage(conversationId?: string, message?: string) {
        try {
            if (tokens !== JSON.parse(localStorage.getItem('tokens') as any)) {
                await login();
                tokens = await JSON.parse(localStorage.getItem('tokens') as any);
            }
            

            if (conversationId) {
                const res = await axios.post(
                    url + `/${conversationId}/messages`,
                    {
                        message,
                        params: {
                            conversationId,
                        },
                        previousMessageId:
                            appData.conversationMessages.list.items[
                                appData.conversationMessages.list.items.length - 1
                            ].id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${tokens.access.token}`,
                        }
                    })
                
                appData.conversationMessages.list.items.push(res?.data.data);
                appData.chatbox.message = '';
                return res?.data.data;
            } else {
                const res = await axios.post(
                    url,
                    {
                        headers: {
                            Authorization: `Bearer ${tokens.access.token}`,
                        },
                        message,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${tokens.access.token}`,
                        }
                    })
                appData.conversations.list.items.unshift(res?.data.data);
                appData.chatbox.message = '';
                return res?.data.data;
            }
        } catch (error) {
            console.error(error);
        }

    },
    async syncChatFromWebSocket(record: ConversationMessageRecord
        //  conversationId?: string
         ) {
        
        
        const index = appData.conversationMessages.list.items.findIndex(
            (item) => item.id === record.id
        );
        
        

        // if (conversationId !== record.conversationId) {
        //     return 
        // }

        record._key = Date.now();
        if (index > -1) {
            appData.conversationMessages.list.items[index] = {
                ...appData.conversationMessages.list.items[index],
                ...record,
            };
        } else {
            appData.conversationMessages.list.items.push(record);
        }

        
        

        const lastMessage =
        appData.conversationMessages.list.items?.[
            appData.conversationMessages.list.items.length-1
        ];
        
        
        const isGetStreamingText = 
            lastMessage && lastMessage.streamStatus === 'streaming';
       

    }

}
