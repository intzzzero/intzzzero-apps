import { siteConfig, apps } from '@/config'
import type { AppInfo } from '@/types'

/** Site origin without a trailing slash, e.g. 'https://app.intzzzero.dev'. */
const SITE = siteConfig.site.website.replace(/\/$/, '')

/** Resolve a site-relative path (or pass through an absolute URL) to an absolute URL. */
const abs = (path: string): string =>
  /^https?:\/\//.test(path) ? path : `${SITE}${path.startsWith('/') ? '' : '/'}${path}`

const ORG_ID = `${SITE}/#organization`
const SITE_ID = `${SITE}/#website`

const GITHUB_URL = 'https://github.com/intzzzero'

export function organizationSchema(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.site.author,
    url: `${SITE}/`,
    logo: abs('/logo.png'),
    sameAs: [GITHUB_URL]
  }
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: siteConfig.site.title,
    url: `${SITE}/`,
    description: siteConfig.site.description,
    publisher: { '@id': ORG_ID }
  }
}

export function softwareApplicationSchema(app: AppInfo): Record<string, unknown> {
  const sameAs = [app.appStoreUrl, app.officialUrl].filter(Boolean) as string[]
  return {
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: app.officialUrl ?? `${SITE}/${app.id}`,
    image: abs(app.icon),
    applicationCategory: app.applicationCategory ?? 'UtilitiesApplication',
    operatingSystem: app.operatingSystem ?? 'iOS',
    ...(app.appStoreUrl ? { downloadUrl: app.appStoreUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(app.languages?.length ? { inLanguage: app.languages } : {}),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID }
  }
}

export function appListSchema(list: AppInfo[] = apps): Record<string, unknown> {
  return {
    '@type': 'ItemList',
    name: `Apps by ${siteConfig.site.author}`,
    itemListElement: list.map((app, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}/${app.id}`,
      name: app.name
    }))
  }
}

export function breadcrumbSchema(app: AppInfo): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: app.name, item: `${SITE}/${app.id}` }
    ]
  }
}

/** JSON-LD graph for the home/hub page: org + website + app list. */
export function homeJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema(), appListSchema()]
  }
}

/** JSON-LD graph for an individual app landing page. */
export function appJsonLd(app: AppInfo): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [softwareApplicationSchema(app), breadcrumbSchema(app), organizationSchema()]
  }
}
