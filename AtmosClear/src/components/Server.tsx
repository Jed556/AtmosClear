import { Server } from '../schemas/Server';

export function getAPI({ url, port, suffix }: Server, fetch: string): string {
    return `${url}:${port}/${suffix}/${fetch}`;
}