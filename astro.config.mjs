import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://uriel-P-V.github.io/mi-portfolio', // Asegúrate de poner la URL correcta de tu repositorio
  base: '/mi-portfolio'
  integrations: [
    tailwind() // Integración de TailwindCSS
  ],
});
