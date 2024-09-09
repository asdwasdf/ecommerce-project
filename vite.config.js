import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      },
      {
        find: "@img",
        replacement: fileURLToPath(new URL("./src/assets/img", import.meta.url))
      },
      {
        find: "@style",
        replacement: fileURLToPath(new URL("./src/assets/css", import.meta.url))
      }
    ]
  }
});
