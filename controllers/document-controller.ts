import { makeRequest } from '../api';
import { appData } from '../app-data';

export const documentController = {
    async getList() {
        const { data } = await makeRequest({
            url: '/api/v1/documents',
            params: {
                limit: 1000,
            },
        });
        appData.document.list = data;
    },
};
