import type { HeroData, FeatureShowcaseData, FeatureGridItem, FeatureListItem, PricingTier } from '@/types'

export const hero: HeroData = {
  headline: 'Your Desktop, Automatically Organized',
  subheadline: 'TidyBox keeps your Mac desktop clean by automatically sorting files with smart rules, presets, and powerful automation.',
  primaryCTA: {
    label: 'Download Free',
    href: '#',
    variant: 'primary'
  },
  secondaryCTA: {
    label: 'View on App Store',
    href: '#',
    variant: 'secondary'
  },
  docsCTA: {
    label: 'User Manual',
    href: '/docs/tidybox',
    variant: 'secondary'
  },
  screenshot: '/screenshots/tidybox/01.png',
  screenshotAlt: 'TidyBox app showing organized desktop'
}

export const featureShowcases: FeatureShowcaseData[] = [
  {
    title: 'Smart Rules That Work For You',
    description: 'Create powerful file organization rules based on file type, name patterns, date, size, and more. TidyBox watches your desktop and automatically moves files to the right place.',
    screenshot: '/screenshots/tidybox/02.png',
    screenshotAlt: 'Smart Rules editor in TidyBox',
    imagePosition: 'right'
  },
  {
    title: 'One-Click Presets',
    description: 'Get started instantly with built-in presets for common workflows. Organize screenshots, downloads, documents, and more with a single click. Customize any preset to fit your needs.',
    screenshot: '/screenshots/tidybox/03.png',
    screenshotAlt: 'Preset selection panel in TidyBox',
    imagePosition: 'left'
  },
  {
    title: 'Preview Before You Organize',
    description: 'See exactly where your files will go before any action is taken. The live preview dashboard shows pending moves, letting you confirm or adjust rules with confidence.',
    screenshot: '/screenshots/tidybox/04.png',
    screenshotAlt: 'TidyBox preview dashboard',
    imagePosition: 'right'
  },
  {
    title: 'Set It and Forget It',
    description: 'Enable File Watcher to automatically sort new files the moment they appear. Set up scheduled cleaning, quiet hours, and battery-aware options. Your desktop stays clean without lifting a finger.',
    screenshot: '/screenshots/tidybox/05.png',
    screenshotAlt: 'Automation settings in TidyBox',
    imagePosition: 'left',
    badge: 'PRO'
  }
]

export const featureGridItems: FeatureGridItem[] = [
  {
    title: 'Undo Anytime',
    description: 'Accidentally moved a file? Undo any action with a single click. TidyBox keeps a history of all moves.',
    icon: '↩️'
  },
  {
    title: 'Quarantine Zone',
    description: 'Hold files temporarily before auto-deletion. Set retention periods (7/30/90 days) and choose the expiration action.',
    icon: '🛡️'
  },
  {
    title: 'Duplicate Detection',
    description: 'Automatically find and handle duplicate files. Free up space and reduce clutter without manual searching.',
    icon: '🔍'
  },
  {
    title: 'Activity Log',
    description: 'Track every file move with detailed history. See what was moved, when, and where. Export to CSV for Pro users.',
    icon: '📋'
  }
]

export const moreFeatures: FeatureListItem[] = [
  { label: 'Drag & drop rule creation', tier: 'free' },
  { label: 'File type filtering', tier: 'free' },
  { label: 'Name pattern matching', tier: 'free' },
  { label: 'Size-based rules', tier: 'free' },
  { label: 'Custom folder destinations', tier: 'free' },
  { label: 'Menu bar quick access', tier: 'free' },
  { label: 'Notification center alerts', tier: 'free' },
  { label: 'Dark mode support', tier: 'free' },
  { label: 'Keyboard shortcuts', tier: 'free' },
  { label: 'File Watcher (auto-clean)', tier: 'pro' },
  { label: 'Scheduled cleaning', tier: 'pro' },
  { label: 'Quiet Hours', tier: 'pro' },
  { label: 'Battery-aware cleaning', tier: 'pro' },
  { label: 'Clean on Startup', tier: 'pro' },
  { label: 'Launch at Login', tier: 'pro' },
  { label: 'Regex pattern matching', tier: 'pro' },
  { label: 'Creation/modified date conditions', tier: 'pro' },
  { label: 'File age conditions', tier: 'pro' },
  { label: 'Multi-folder watching', tier: 'pro' },
  { label: 'CSV activity export', tier: 'pro' },
  { label: 'Priority support', tier: 'pro' }
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to keep your desktop organized.',
    features: [
      'Up to 2 rules',
      'Built-in presets',
      '24-hour undo history',
      'Basic conditions',
      'Menu bar access'
    ],
    cta: {
      label: 'Download Free',
      href: '#',
      variant: 'secondary'
    }
  },
  {
    name: 'Pro',
    price: '$9.99',
    priceDetail: 'One-time purchase',
    description: 'Unlock the full power of desktop automation.',
    features: [
      'Unlimited rules',
      '30-day undo history',
      'All advanced conditions',
      'Scheduled cleaning',
      'File Watcher (auto-clean)',
      'Quarantine with auto-delete',
      'CSV activity export',
      'Launch at Login'
    ],
    cta: {
      label: 'Get Pro',
      href: '#',
      variant: 'primary'
    },
    highlighted: true
  },
  {
    name: 'Trial',
    price: 'Free',
    priceDetail: '14-day trial',
    description: 'Try all Pro features with no commitment.',
    features: [
      'All Pro features',
      '14 days full access',
      'No credit card required',
      'Converts to Free after trial'
    ],
    cta: {
      label: 'Start Trial',
      href: '#',
      variant: 'ghost'
    }
  }
]
