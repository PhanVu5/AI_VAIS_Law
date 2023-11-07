import Pusher from 'pusher-js';
import { env } from './env';

const appKey = env.VITE_SOKETI_KEY;
const port = env.VITE_SOKETI_PORT;
const host = env.VITE_SOKETI_HOST;
export let userClient: Pusher | null;
const initedUserClient: Record<string, Pusher> = {};
// @ts-ignore
export const getSoketiUserClient = (key: string) => {
    if (initedUserClient[key]) return initedUserClient[key];
    if (!initedUserClient[key]) {
        // @ts-ignore
        initedUserClient[key] = new Pusher(appKey, {
            wsHost: host,
            wsPort: port,
            forceTLS: true,
            disableStats: true,
            enabledTransports: ['ws', 'wss'],
        });
        initedUserClient[key].connection.bind('connected', function () {
            console.log(`Connected To Soketi as user with key=${key}`);
        });
        initedUserClient[key].connection.bind('failed', function () {
            console.log(`FAIL To Soketi as user with key=${key}`);
        });
        return initedUserClient[key];
    }
};
export const soketiClient = getSoketiUserClient(
    'chatbot-knowledgeable'
) as Pusher;
