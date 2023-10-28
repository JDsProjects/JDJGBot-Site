import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "https://www.jdjgbot.com",
    clearScreen: false,
    server: {
        host: true,
        port: 3000,
    },
});
