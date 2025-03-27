import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import grpahQlLoader from 'vite-plugin-graphql-loader'
import fs from 'fs'
import path from 'path'

const webComponentsDir = './src/web-components'
const entryPoints = fs
  .readdirSync(webComponentsDir)
  .filter((file) => file.includes('index'))
  .reduce((entries, file) => {
    const name = path.parse(file).name
    entries[name] = path.resolve(webComponentsDir, file)
    return entries
  }, {})
const getBundleName = (format, entryName) => `wc-${entryName.toLowerCase()}.${format}.js`

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({ customElement: true }), vueJsx(), vueDevTools(), grpahQlLoader()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist-wc',
    lib: {
      entry: Object.values(entryPoints),
      fileName: getBundleName,
      name: getBundleName,
    },
  },
  define: {
    'process.env': process.env,
  },
})
