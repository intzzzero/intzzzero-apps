export interface SiteInfo {
  website: string
  title: string
  author: string
  description: string
  language: string
}

export interface GeneralSettings {
  themeToggle: boolean
  footer: boolean
  fadeAnimation: boolean
}

export interface SiteConfig {
  site: SiteInfo
  general: GeneralSettings
}

export interface AppInfo {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  accentColor: string
  appStoreUrl?: string
  /** Schema.org SoftwareApplication.operatingSystem, e.g. 'iOS 18.5+', 'macOS'. */
  operatingSystem?: string
  /** Schema.org SoftwareApplication.applicationCategory, e.g. 'HealthApplication'. */
  applicationCategory?: string
  /** Canonical/official marketing site for this app (used as canonical + schema url). */
  officialUrl?: string
  /** Supported languages (BCP-47-ish codes), e.g. ['ko', 'en', 'ja']. */
  languages?: string[]
}
