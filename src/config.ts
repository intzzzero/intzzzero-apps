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
    appStoreUrl: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%EB%8B%A4%EC%8B%9C-%EB%82%98%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9E%91%EC%9D%80-%EC%8A%B5%EA%B4%80/id6758337278'
  }
]
