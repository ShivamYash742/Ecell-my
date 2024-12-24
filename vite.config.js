import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp', '**/*.bmp', '**/*.tiff'],
});