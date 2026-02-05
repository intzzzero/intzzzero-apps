import type { HeroData, FeatureShowcaseData, FeatureGridItem, FeatureListItem, PricingTier } from '@/types'

export const hero: HeroData = {
  headline: 'Your Desktop, Automatically Organized',
  subheadline: 'InboxZero keeps your Mac desktop clean by automatically sorting files with smart rules, presets, and powerful automation.',
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
  screenshot: '/apps/inboxzero/hero-screenshot.png',
  screenshotAlt: 'InboxZero app showing organized desktop'
}

export const featureShowcases: FeatureShowcaseData[] = [
  {
    title: 'Smart Rules That Work For You',
    description: 'Create powerful file organization rules based on file type, name patterns, date, size, and more. InboxZero watches your desktop and automatically moves files to the right place.',
    screenshot: '/apps/inboxzero/feature-rules.png',
    screenshotAlt: 'Smart Rules editor in InboxZero',
    imagePosition: 'right'
  },
  {
    title: 'One-Click Presets',
    description: 'Get started instantly with built-in presets for common workflows. Organize screenshots, downloads, documents, and more with a single click. Customize any preset to fit your needs.',
    screenshot: '/apps/inboxzero/feature-presets.png',
    screenshotAlt: 'Preset selection panel in InboxZero',
    imagePosition: 'left'
  },
  {
    title: 'Preview Before You Organize',
    description: 'See exactly where your files will go before any action is taken. The live preview dashboard shows pending moves, letting you confirm or adjust rules with confidence.',
    screenshot: '/apps/inboxzero/feature-dashboard.png',
    screenshotAlt: 'InboxZero preview dashboard',
    imagePosition: 'right'
  },
  {
    title: 'Set It and Forget It',
    description: 'Enable automatic mode and let InboxZero run in the background. New files on your desktop are sorted the moment they appear. Your desktop stays clean without lifting a finger.',
    screenshot: '/apps/inboxzero/feature-automation.png',
    screenshotAlt: 'Automation settings in InboxZero',
    imagePosition: 'left',
    badge: 'PRO'
  }
]

export const featureGridItems: FeatureGridItem[] = [
  {
    title: 'Undo Anytime',
    description: 'Accidentally moved a file? Undo any action with a single click. InboxZero keeps a history of all moves.',
    icon: '↩️'
  },
  {
    title: 'Quarantine Zone',
    description: 'Unsure about a file? Send it to quarantine for review later, keeping your desktop clean while you decide.',
    icon: '🛡️'
  },
  {
    title: 'Duplicate Detection',
    description: 'Automatically find and handle duplicate files. Free up space and reduce clutter without manual searching.',
    icon: '🔍'
  },
  {
    title: 'Activity Log',
    description: 'Track every file move with a detailed activity log. See what was moved, when, and where at a glance.',
    icon: '📋'
  }
]

export const moreFeatures: FeatureListItem[] = [
  { label: 'Drag & drop rule creation', tier: 'free' },
  { label: 'File type filtering', tier: 'free' },
  { label: 'Name pattern matching', tier: 'free' },
  { label: 'Date-based sorting', tier: 'free' },
  { label: 'Size-based rules', tier: 'free' },
  { label: 'Custom folder destinations', tier: 'free' },
  { label: 'Menu bar quick access', tier: 'free' },
  { label: 'Notification center alerts', tier: 'free' },
  { label: 'Dark mode support', tier: 'free' },
  { label: 'Keyboard shortcuts', tier: 'free' },
  { label: 'Scheduled organization', tier: 'pro' },
  { label: 'Regex pattern matching', tier: 'pro' },
  { label: 'Tag-based filing', tier: 'pro' },
  { label: 'Multi-folder watching', tier: 'pro' },
  { label: 'Cloud folder support', tier: 'pro' },
  { label: 'AppleScript integration', tier: 'pro' },
  { label: 'Shortcuts app actions', tier: 'pro' },
  { label: 'Custom notification sounds', tier: 'pro' },
  { label: 'Export/import rules', tier: 'pro' },
  { label: 'Priority support', tier: 'pro' }
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to keep your desktop organized.',
    features: [
      'Up to 5 active rules',
      'Built-in presets',
      'Undo history',
      'Quarantine zone',
      'Duplicate detection',
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
      'Automatic mode',
      'Scheduled organization',
      'Regex patterns',
      'Multi-folder watching',
      'Cloud folder support',
      'AppleScript & Shortcuts',
      'Priority support'
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
