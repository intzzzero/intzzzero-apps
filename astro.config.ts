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
    sitemap({
      // Keep canonicalized-away URLs out of the sitemap:
      //  - /meowstiny landing canonicalizes to meowstiny.com (must NOT match /docs/meowstiny)
      //  - /docs/<app>/en duplicates the clean /docs/<app> EN route
      filter: page =>
        !/^https?:\/\/[^/]+\/meowstiny\/?$/.test(page) && !/\/docs\/[^/]+\/en\/?$/.test(page)
    })
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
