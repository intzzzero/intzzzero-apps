import type { SiteConfig, AppInfo } from './types'

export const siteConfig: SiteConfig = {
  site: {
    title: 'intzzzero Apps',
    description: 'macOS apps crafted with care',
    website: 'https://apps.intzzzero.com/',
    author: 'intzzzero',
    language: 'en'
  },
  general: {
    themeToggle: true,
    footer: true,
    fadeAnimation: true
  }
}

export const apps: AppInfo[] = [
  {
    id: 'inboxzero',
    name: 'InboxZero',
    tagline: 'Your Desktop, Automatically Organized',
    description: 'Automatically organize files on your Mac desktop with smart rules, presets, and powerful automation.',
    icon: '/apps/inboxzero/icon.png',
    accentColor: '#007AFF',
    appStoreUrl: '#'
  }
]
