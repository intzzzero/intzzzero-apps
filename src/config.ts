import type { SiteConfig, AppInfo } from './types'

export const siteConfig: SiteConfig = {
  site: {
    title: 'intzzzero apps',
    description: 'macOS, iOS apps crafted with care',
    website: 'https://app.intzzzero.dev/',
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
    icon: '/inboxzero_icon.png',
    accentColor: '#007AFF',
    appStoreUrl: '#'
  }
]
