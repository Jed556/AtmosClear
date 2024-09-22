import { Server } from "./schemas/Server";

export const server: Server = {
    url: process.env.API_URL || "localhost",
    suffix: process.env.API_SUFFIX || "",
    port: process.env.API_PORT ? parseInt(process.env.API_PORT) : 80
}