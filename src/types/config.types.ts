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
}
