// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/embed.jsx",
      name: "Chatbot",
      fileName: "embed",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "embed.jsx",
      },
    },
  },
});
