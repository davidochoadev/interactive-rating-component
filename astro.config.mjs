import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://davidochoadev.github.io',
  base: '/interactive-rating-component',
  integrations: [tailwind()]
});