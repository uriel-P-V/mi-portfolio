import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sistemap";
import tailwind from '@astrojs/tailwind';

const SERVER_PORT = 3000;
const LOCALHOST_URL = 'https://localhost:${SERVER_PORT}';

const LIVE_URL = "https://uriel-P-V.github.io";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if(isBuild){
  BASE_URL =LIVE_URL;
}

export default defineConfig({
  server: {port: SERVER_PORT},
  base: '/mi-portfolio',
  integrations: [
    sitemap(),
    tailwind() // Integración de TailwindCSS
  ],
});
