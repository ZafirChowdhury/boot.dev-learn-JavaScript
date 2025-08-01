import { defineConfig } from "vite";

export default defineConfig({
    buid: {
        lib: {
            entry: "main.js",
            formats: ["es"],
        },
    },
});
