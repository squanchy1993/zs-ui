import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // you can also use @vitejs/plugin-react-swc
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'wsContoller',
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        },
      }
    },
  }

})