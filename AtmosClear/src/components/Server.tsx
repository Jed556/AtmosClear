import { Server } from '../schemas/Server';

export function getAPI({ url, port }: Server, fetch: string): string {
    // return `${url}${port ? `:${port}` : ""}/${fetch}`;
    const API_URL = `${url}:${port}/${fetch}`;
    console.log(API_URL);
    return API_URL;
}