/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  mode: "development",
  cacheDir: "./.vite",
  server: {
    port: 8080,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
