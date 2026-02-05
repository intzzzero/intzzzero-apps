import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import playformInline from '@playform/inline'
import { siteConfig } from './src/config'
import { imageConfig } from './src/utils/image-config'
import path from 'path'

export default defineConfig({
  site: siteConfig.site.website,
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: imageConfig
    }
  },
  integrations: [
    playformInline(),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  devToolbar: {
    enabled: false
  }
})
