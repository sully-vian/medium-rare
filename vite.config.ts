import { resolve } from "node:path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/highlight.js/styles/*.min.css",
          dest: "vendor",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup.ts"),
        content: resolve(__dirname, "src/content.ts"),
      },
      output: {
        entryFileNames: (chunk) => {
          switch (chunk.name) {
            case "popup":
              return "popup.js";
            case "content":
              return "content.js";
            default:
              return "[name].js";
          }
        },
      },
    },
  },
});
