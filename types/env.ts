// @ts-ignore
export const env =import.meta.env as {
  VITE_API_HOST:string,
  VITE_SOKETI_KEY:string,
  VITE_SOKETI_PORT:number,
  VITE_SOKETI_HOST:string
}

env.VITE_SOKETI_HOST = "wsapi.vais.vn";
env.VITE_SOKETI_PORT = 443;
env.VITE_SOKETI_KEY = "625d0b7b88428c37838f892e";
env.VITE_API_HOST="https://llm-bot-api.vais.vn";








// export const env =import.meta.env as {
//   VITE_API_HOST:string,
//   VITE_SOKETI_KEY:string,
//   VITE_SOKETI_PORT:number,
//   VITE_SOKETI_HOST:string
// }

