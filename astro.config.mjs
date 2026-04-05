// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://letters.krishg.com',
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),

  fonts: [{
    provider: fontProviders.google(),
    name: 'Crimson Pro',
    cssVariable: "--font-body",
  }]
});
