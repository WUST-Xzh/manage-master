import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// antd样式按需引入
import styleImport, { AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
        AntdResolve()
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname,'./src'),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  }
})
