import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { resolve } from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
    cssInjectedByJsPlugin({
      injectCode: (cssCode: string, options) => {
        return `try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(${cssCode}));document.head.appendChild(elementStyle);document.addEventListener('astro:page-load', ()=>{var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(${cssCode}));document.head.appendChild(elementStyle);});}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}`
      },
      dev: {
        enableDev: true,
        removeStyleCodeFunction: function removeStyleCode(id: string) {
          (function removeStyleInjected() {
            const elementsToRemove = document.querySelectorAll("style[data-vite-dev-id='${id}']");
            elementsToRemove.forEach(element => {
              element.remove();
            });
          })()
        }
      },
      preRenderCSSCode: (cssCode) => cssCode
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 7301,
    open: false,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: "src/App.tsx",
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
          entryFileNames: "bundle.js",
          format: "esm",
      },
    },
  }

});
