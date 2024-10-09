/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from "autoprefixer";
import presetEnv from "postcss-preset-env";


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
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    transformer: 'postcss',
    postcss: {
      plugins: [
        presetEnv,
        autoprefixer,
      ]
    }
  }
});
