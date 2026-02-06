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
    icon: '/icons/inboxzero_icon.png',
    accentColor: '#007AFF',
    appStoreUrl: '#'
  },
  {
    id: 'todayrestart',
    name: 'Today Restart',
    tagline: 'The Courage to Start Again',
    description: 'A local-only habit tracker designed for those who struggle to start due to perfectionism. One minute is enough.',
    icon: '/icons/todayrestart_icon.png',
    accentColor: '#34C759',
    appStoreUrl: '#'
  }
]
