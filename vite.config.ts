import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "uis",
      fileName: (format) => `uis.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "vue-tsc"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue(),]

})
