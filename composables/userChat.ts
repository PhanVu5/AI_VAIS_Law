import axios, { AxiosRequestConfig } from 'axios';
import { conversationUserController } from '@/composables/callApi';
import {
    ConversationMessageRecord
} from '~/composables/types';
import { soketiClient } from '@/types/socketi';
import { env } from '@/types/env';

const url = 'https://llm-bot-api.vais.vn/api/v1/conversations';

const API_HOST = env.VITE_API_HOST || "http://localhost:3000";

async function login() {
    const res = await axios.post(
        `${API_HOST}/api/v2/auth/login`,
        // `https://llm-bot-api.vais.vn/api/v2/auth/login`,
        {
            email: 'user@vais.vn',
            password: '12345678',
        },
    ) as any;
    console.log('user gettokens', res.data);

    const { user, tokens } = res.data.data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokens', JSON.stringify(tokens));
    console.log('done token');
    
    console.log('user', user.id);
    const chatChannel = soketiClient.subscribe(`public-${user.id}`);
    // @ts-ignore
    chatChannel.bind('chat-message', (data: ConversationMessageRecord) => {
        conversationUserController.syncChatFromWebSocket(data)
    });

}

// async function makeRequest(options: AxiosRequestConfig) {
//     try {
//         const headers = options.headers || {};
//         console.log(1);

//         try {
//             const tokens = JSON.parse(localStorage.getItem('tokens') as any);
//             headers['Authorization'] = `Bearer ${tokens.access.token}`;
//         } catch (err) {
//             // pass
//         }

//         if (!options.url?.startsWith('http')) {
//             options.url = `${API_HOST}${options.url}`;
//             console.log('opt url', options.url);
//         }

//         options.headers = headers;

//         console.log('opt', options);


//         const response = await axios.create(options);
//         console.log('get',response);

//         return options;
//     } catch (e) {
//         alert((e as Error).message);
//         throw e;
//     }
// }

// async function makeRequest(
//     options: Mithril.RequestOptions<any> & { url: string }
// ) {
//     try {
//         const headers = options.headers || {};
//         try {
//             const tokens = JSON.parse(localStorage.getItem('tokens') as any);
//             headers['Authorization'] = `Bearer ${tokens.access.token}`;
//         } catch (err) {
//             // pass
//         }
//         if (!options.url.startsWith('http')) {
//             options.url = `${API_HOST}${options.url}`;
//         }
//         return await m.request({ ...options, headers });
//     } catch (e) {
//         alert((e as Error).message);
//         throw e;
//     }
// }

export { login, makeRequest };
