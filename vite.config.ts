import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// @ts-ignore

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest }), nodePolyfills(), viteCommonjs()],
  // nodePolyfills(), viteCommonjs()
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        esbuildCommonjs(["@biconomy"]),
      ],
    },
  },
  define: {
    "process.env": {},
  },
});
