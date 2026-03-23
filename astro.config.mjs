// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  security: {
    checkOrigin: false
  },
  image: {
    domains: ['r414-recettes-cuisine.pauldarlef.fr']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});