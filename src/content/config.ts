import { defineCollection, z } from 'astro:content'

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    app: z.string(),
    lang: z.enum(['en', 'ko'])
  })
})

export const collections = {
  docs: docsCollection
}
