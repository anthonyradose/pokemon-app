import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
  define: {
    // Handle Node.js modules that might be used by dependencies
    global: 'globalThis',
    'process.env': {}
  },
  optimizeDeps: {
    include: ['pokedex-promise-v2']
  },
  resolve: {
    alias: {
      os: 'os-browserify'
    }
  }
}) 