// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the deploy workflow.
// - Vercel / custom domain: leave BASE_PATH unset (site is served at "/").
// - GitHub Pages project site: BASE_PATH is "/<repo-name>".
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
