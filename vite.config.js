import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globalStylesOptions } from './global.styles';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      '@redux': '/src/redux',
      shared: '/src/shared',
      helpers: '/src/helpers',
      context: '/src/context',
      services: '/src/services',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
      },
    },
  },
  base: '/my-camper',
});
