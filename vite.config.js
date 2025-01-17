import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileUrlToPath, URL} from "node:url";

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": fileUrlToPath(new URL("./src", import.meta.url))
    }
  }
  plugins: [vue()],
})
