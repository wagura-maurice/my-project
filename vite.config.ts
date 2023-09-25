import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Define a function to resolve the path to the 'src' directory
function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolveSrc('src'), // Use the resolveSrc function to specify the root 'src' directory
    },
  },
});
