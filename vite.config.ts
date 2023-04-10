import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: false,
      filename: "stats.html", //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/assets/styles/globalMixin.scss"; @import "@/assets//styles/globalVar.scss"; ',
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@store/": "/src/store/",
      "@pages/": "/src/pages/",
    },
  },
});
