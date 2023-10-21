import { makeRequest } from '../api';
import { appData } from '../app-data';

export const documentContentController = {
    async searchSimilar(params: {
        search: string;
        mode: 'evibert' | 'openai';
    }) {
        appData.documentContent.list = {
            items: [],
        };
        m.redraw();
        if (!params.search) {
            return;
        }
        const { data } = await makeRequest({
            url: '/api/v1/documents/content/search-similar',
            params,
        });

        appData.documentContent.list = data;
        console.log(appData.documentContent);
    },
};
