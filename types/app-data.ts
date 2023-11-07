import {
    ConversationMessageRecord,
    ConversationRecord,
    DocumentRecord,
    UserSessionRecord,
} from '~/composables/types';

export const appData = {
    conversations: {
        list: {
            items: [] as ConversationRecord[],
        },
        record: {} as ConversationRecord,
    },
    conversationMessages: {
        list: {
            filter: {
                conversationId: null,
            },
            items: [] as ConversationMessageRecord[],
        },
    },
    chatbox: {
        message: '',
    },
    userSession: {
        data: {
            documentSampleInputFile: {
                url: '',
                key: '',
                bucket: '',
            },
            userId: '',
        } as UserSessionRecord,
    },
    document: {
        list: {
            items: [] as (DocumentRecord & { id: string })[],
            page: 1,
            limit: 1,
        },
    },
    documentContent: {
        list: {
            items: [] as {
                docName: string;
                id: string;
                pageContent: string;
                partId: string;
                partName: string;
                score: number;
            }[],
        },
    },
};
