import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/potential-octo-waffle/',
  plugins: [react()],
});
