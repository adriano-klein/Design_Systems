import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@ignite-ui/react',
        replacement: resolve(__dirname, '../react/src/index.tsx'),
      },
    ],
  },
})
