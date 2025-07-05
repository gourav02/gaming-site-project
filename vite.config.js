import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function baseUrlReplacePlugin() {
  return {
    name: 'html-transform-base-url',
    transformIndexHtml(html, ctx) {
      const base = ctx.server ? '/' : '/gaming-site-project/';
      return html.replace(/%VITE_BASE_URL%/g, base);
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), baseUrlReplacePlugin()],
  base: command === 'build' ? '/gaming-site-project/' : '/'
}))
