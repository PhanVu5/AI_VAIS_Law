// import { makeRequest } from '../api';
// import m from "mithril";
// // import {
// //     ConversationMessageRecord,
// //     ConversationRecord,
// // } from '../../../chatbot-knowledgebase-be/src/modules/types';
// import { appData } from '../app-data';
// // import { chatbox } from '../pages/chatbox/page-chatbox';

// export const conversationController = {
//     async list(query?: any) {
//         if (!query) {
//             query = m.route.param();
//         }
//         const { data } = (await makeRequest({
//             url: '/api/v1/conversations',
//             params: { ...query, limit: 100 },
//         })) as {
//             data: {
//                 items: ConversationRecord[];
//             };
//         };

//         appData.conversations.list = data;
//     },
//     async getDetail(conversationId?: string) {
//         conversationId = conversationId || m.route.param('conversationId');
//         const { data } = (await makeRequest({
//             url: '/api/v1/conversations',
//             params: { conversationId },
//         })) as {
//             data: {
//                 record: ConversationRecord;
//             };
//         };
//         appData.conversations.record = data.record;
//     },
//     async listMessage(conversationId?: string, query?: any) {
//         conversationId = conversationId || m.route.param('conversationId');
//         if (conversationId) {
//             const { data } = await makeRequest({
//                 url: '/api/v1/conversations/:conversationId/messages',
//                 params: {
//                     conversationId,
//                     ...query,
//                     sort: {
//                         createdAt: 1,
//                     },
//                 },
//             });
//             appData.conversationMessages.list = data;
//         } else {
//             appData.conversationMessages.list = {
//                 items: [],
//             };
//         }
//     },
//     async sendMessage(conversationId?: string, message?: string) {
//         conversationId = conversationId || m.route.param('conversationId');
//         message = message || appData.chatbox.message;
//         if (conversationId) {
//             const { data } = await makeRequest({
//                 url: '/api/v1/conversations/:conversationId/messages',
//                 params: {
//                     conversationId,
//                 },
//                 method: 'post',
//                 body: {
//                     message,
//                     previousMessageId:
//                         appData.conversationMessages.list.items[
//                             appData.conversationMessages.list.items.length - 1
//                         ].id,
//                 },
//             });
//             appData.conversationMessages.list.items.push(data.record);
//             appData.chatbox.message = '';
//         } else {
//             const { data } = (await makeRequest({
//                 url: '/api/v1/conversations',
//                 method: 'post',
//                 body: {
//                     message,
//                 },
//             })) as {
//                 data: {
//                     record: ConversationRecord;
//                 };
//             };
//             conversationId = data.record.id as string;
//             appData.conversations.list.items.unshift(data.record);
//             m.route.set('/conversations/:conversationId', { conversationId });
//             appData.chatbox.message = '';
//         }
//     },
//     async syncChatFromWebsocket(record: ConversationMessageRecord) {
//         const index = appData.conversationMessages.list.items.findIndex(
//             (item) => item.id === record.id
//         );
//         const conversationId = m.route.param('conversationId');
//         // @ts-ignore
//         if (conversationId !== record.conversationId) {
//             return;
//         }
//         // @ts-ignore
//         record._key = Date.now();
//         if (index > -1) {
//             appData.conversationMessages.list.items[index] = {
//                 ...appData.conversationMessages.list.items[index],
//                 ...record,
//             };
//         } else {
//             appData.conversationMessages.list.items.push(record);
//         }
//         m.redraw();
//         const chatDiv = document.querySelector('.chat-message-container');
//         if (chatDiv) {
//             chatDiv.scroll({
//                 top: chatDiv.scrollHeight,
//                 behavior: 'smooth',
//             });
//         }
//         const lastMessage =
//             appData.conversationMessages.list.items?.[
//                 appData.conversationMessages.list.items.length - 1
//             ];
//         const isGetStreamingText =
//             lastMessage && lastMessage.streamStatus === 'streaming';
//         if (!isGetStreamingText && chatbox?.chatInputDom) {
//             setTimeout(() => {
//                 // @ts-ignore
//                 chatbox.chatInputDom.focus();
//             }, 200);
//         }
//     },
// };
