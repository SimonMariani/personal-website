/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // NOTE when using a bind mount, the docker container does not automatically detect the file system changes so we need to use polling. We also fix the port
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },

  // NOTE for using relative imports we need to set an alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // map '@' to './src'
    },
  },
});
