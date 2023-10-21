import axios from 'axios';
// import { route } from 'mithril';
import {
    ConversationMessageRecord,
    ConversationRecord,
} from '~/composables/types';
const url = '/api/v1/conversations';
import { appData } from "@/types/app-data";
// const url = 'https://64b4bf820efb99d86269398b.mockapi.io/user';

const limit = 20;

const tokens = JSON.parse(localStorage.getItem('tokens') as any);
const api = axios.create({
    baseURL: 'https://llm-bot-api.vais.vn',
    headers: {
        // Thêm thông tin xác thực (authorization) vào header của mọi yêu cầu
        Authorization: `Bearer ${tokens.access.token}`,
    },
});


export const conversationUserController = {
    async list() {
        try {
            const res: { data: any } = await api.get(
                url,
                {
                    headers: {
                        Accept: 'application/json',
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
            return res?.data.data;
        } catch (error) {
            console.error();
        }
    },
    async getDetail(conversationId?: string) {
        const tokens = JSON.parse(localStorage.getItem('tokens') as any);
        // conversationId = conversationId || route.param('conversationId');
        const res: { data: any } = await api.get(
            url,
            {
                headers: {
                    Accept: 'application/json',
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
        if (conversationId) {
            const tokens = JSON.parse(localStorage.getItem('tokens') as any);
            const res: { data: any } = await api.get(
                url + `/${conversationId}/messages?sort%5BcreatedAt%5D=1`,
                {
                    headers: {
                        Accept: 'application/json',
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
        const tokens = JSON.parse(localStorage.getItem('tokens') as any);
        console.log(1, appData.conversationMessages.list.items);
        
        if (conversationId) {
            const res = await api.post(url + `/${conversationId}/messages`, {
                params: {
                    conversationId,
                },
                message,
                previousMessageId:
                    appData.conversationMessages.list.items[
                        appData.conversationMessages.list.items.length - 1
                    ].id,
            })
            if (!res) throw new Error("Unknown error");
            return res?.data.data;
        } else {
            const res = await api.post(url, {
                message,
            })
            console.log('res post', res);
            if (!res) throw new Error("Unknown error");
            return res?.data.data;
        }

    }

}