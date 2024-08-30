import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// unocss
import unocss from 'unocss/vite';
// path alias
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
