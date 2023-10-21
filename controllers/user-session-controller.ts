import { makeRequest } from '../api';
import { appData } from '../app-data';

export const userSessionController = {
    async getUserSessionInfo() {
        const { data } = await makeRequest({
            url: '/api/v1/user-session/info',
        });
        appData.userSession.data = data.record;
    },
};
