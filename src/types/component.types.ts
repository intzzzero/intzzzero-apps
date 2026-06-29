// Transition props interface
export interface TransitionProps {
  type: 'post' | 'page'
  class?: string
}

// Layout props interface
export interface LayoutProps {
  type?: 'post' | 'page'
  fullWidth?: boolean
}

// BaseHead component props interface
export interface BaseHeadProps {
  title: string
  description: string
  ogImage?: string
  /** Override the canonical URL (defaults to the current page URL). */
  canonical?: string
  /** JSON-LD structured data — a single schema object or an array of them. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  /** hreflang alternates, e.g. [{ lang: 'en', href: '...' }, { lang: 'ko', href: '...' }]. */
  alternates?: { lang: string; href: string }[]
}

// ImageOptimizer component props interface
export interface ImageOptimizerProps {
  src: string | ImageMetadata
  alt: string
  width?: number
  height?: number
  quality?: number
  format?: 'avif' | 'webp' | 'jpeg' | 'png'
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  class?: string
  caption?: string
  priority?: boolean
}
