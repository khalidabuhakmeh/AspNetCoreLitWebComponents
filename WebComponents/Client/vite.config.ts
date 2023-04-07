import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../wwwroot",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "index" : 'index.ts'
      }
    }
  },
})
