import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/embed.jsx', // or embed.jsx if that's what you're using
      name: 'Chatbot',
      fileName: 'embed',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {},
    'process': { env: { NODE_ENV: 'production' } },
    global: 'globalThis',
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        'process.env.NODE_ENV': '"production"',
        'process.env': '{}',
        'process': '{ env: { NODE_ENV: "production" } }',
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
});
