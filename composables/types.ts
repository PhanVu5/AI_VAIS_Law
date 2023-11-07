import { Schema } from 'mongoose';

export type ConversationRecord = {
    _id?: string | Schema.Types.ObjectId;
    id?: string | Schema.Types.ObjectId;
    name: string;
    userId: Schema.Types.ObjectId;
    llmModel: string; // llama2
    lastMessageAt?: Date;
    createdAt: Date;
    updatedAt: Date;
};

export type ConversationMessageRecord = {
    _key: number;
    _id?: string | Schema.Types.ObjectId;
    id?: string | Schema.Types.ObjectId;
    conversationId: string | Schema.Types.ObjectId;
    streamStatus: 'end' | 'streaming';
    userId: Schema.Types.ObjectId;
    createdBy:
        | {
              role: 'user';
              userId: Schema.Types.ObjectId;
          }
        | {
              role: 'assistant';
              model: string;
          };

    // Thứ tự trong kênh chat
    messageIdsPath: Schema.Types.ObjectId[];

    // Những nội dung chat khác trong cùng nhóm
    // alternativeId: Schema.Types.ObjectId;

    // gán nhãn
    label: {
        _id: Schema.Types.ObjectId;
        isUseful: boolean;
        isDanger: boolean;
        userId: Schema.Types.ObjectId;
        createdAt: Date;
    }[];
    message: string;
    createdAt: Date;
    updatedAt: Date;
    ragContents: any[];
};

export type UserRecord = {
    _id: Schema.Types.ObjectId;
    password: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};
export type EmbeddingType = 'evibert' | 'openai' | 'evibert_long'
export type DocumentRecord = {
    _id: Schema.Types.ObjectId;
    name: string;
    docName?: string;
    docType: 'pdf' | 'text' | 'url' | 'unknown';
    contentTextFiles: {
        key: string;
        bucket: string;
        fileSize: number;
        url?: string;
    }[];
    contentRawFiles: {
        key: string;
        bucket: string;
        fileSize: number;
        url?: string;
    }[];
    userId: Schema.Types.ObjectId | string;
    splitContentFiles: {
        key: string;
        bucket: string;
        fileSize: number;
        embedId?: string;
        url?: string;
    }[];
    totalStorage: number;
    tags: ('pháp luật' | 'tin học' | 'excel' | string)[];
    createdAt?: Date | string;
    embeddings?: EmbeddingType[];
};

type DocumentDetail = {
    _id: Schema.Types.ObjectId;
    documentId: Schema.Types.ObjectId;
    text: string;
};

export type UserSessionRecord = {
    documentSampleInputFile: {
        url: string;
        key: string;
        bucket?: string;
    };
    userId: Schema.Types.ObjectId | string;
};
