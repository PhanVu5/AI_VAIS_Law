import axios from 'axios';
import { makeRequest } from "@/composables/userChat";
import { login } from "@/composables/userChat";
import {
    ConversationMessageRecord,
    ConversationRecord,
} from '~/composables/types';
const url = 'https://llm-bot-api.vais.vn/api/v1/conversations';
import { appData } from "@/types/app-data";
// const url = 'https://64b4bf820efb99d86269398b.mockaxios.io/user';

const limit = 20;
let tokens = JSON.parse(localStorage.getItem('tokens') as any);



export const conversationUserController = {
    async list() {

        try {
            if (!tokens) {
                await login();
                tokens = JSON.parse(localStorage.getItem('tokens') as any);
            }
            
            console.log('tokens', login());
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
            console.log('listenUser');
            console.log(res);
            return res?.data.data;
        } catch (error) {
            console.error();
        }
    },
    async getDetail(conversationId?: string) {
        if (!tokens) {
            await login();
            tokens = JSON.parse(localStorage.getItem('tokens') as any);
        }
        // conversationId = conversationId || route.param('conversationId');
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
        console.log('listenUserGetDetail', res?.data.data);
        return res?.data.data;
    },
    async listMessage(conversationId?: String) {
        if (!tokens) {
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
                items: [],
            };
        }
    },
    async sendMessage(conversationId?: string, message?: string) {
        try {
            if (!tokens) {
                await login();
                tokens = JSON.parse(localStorage.getItem('tokens') as any);
            }
            console.log('token', tokens);
            console.log(`Bearer ${tokens.access.token}`);

            if (conversationId) {
                const res = await axios.post(url + `/${conversationId}/messages`, {
                    message,
                    headers: {
                        Authorization: `Bearer ${tokens.access.token}`,
                    },
                    params: {
                        conversationId,
                    },
                    previousMessageId:
                        appData.conversationMessages.list.items[
                            appData.conversationMessages.list.items.length - 1
                        ].id,
                })
                // if (!res) throw new Error("Unknown error");
                
                return res?.data.data;
            } else {
                const res = await axios.post(url, {
                    headers: { 
                        Authorization: `Bearer ${tokens.access.token}`,
                    },
                    message,
                })
                console.log('res post', res);
                if (!res) throw new Error("Unknown error");
                return res?.data.data;
            }
        } catch (error) {
            console.error(error);
            
        }

    }

}
