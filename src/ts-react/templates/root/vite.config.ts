import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",

    rollupOptions: {
      input: "src/index.tsx",
      output: {
        file: "dist/bundle.js",
        dir: null,
        inlineDynamicImports: true,
        manualChunks: null,
        assetFileNames: assetInfo => {
          if (assetInfo.name === "index.css") {
            return "main.css";
          }
          return assetInfo.name;
        },
      },
    },

    target: "esnext",
  },
});
