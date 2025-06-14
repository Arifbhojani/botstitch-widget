import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // ✅ MAKE SURE THIS PATH IS CORRECT
      entry: "./src/embed.jsx",
      name: "Chatbot",
      fileName: "embed",
      formats: ["iife"], // This makes it usable via CDN (window.Chatbot)
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
