import type { HeroData, FeatureShowcaseData, FeatureGridItem, FeatureListItem, PricingTier } from '@/types'

export const hero: HeroData = {
  headline: 'The Courage to Start Again',
  subheadline: 'Today Restart is a local-only habit tracker for perfectionists. No streaks, no pressure. Just start again, one minute at a time.',
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
    href: '/docs/todayrestart',
    variant: 'secondary'
  },
  screenshot: '/apps/todayrestart/hero-screenshot.png',
  screenshotAlt: 'Today Restart app showing habit journey'
}

export const featureShowcases: FeatureShowcaseData[] = [
  {
    title: 'Resilience Over Streaks',
    description: 'Success is measured by the number of times you started again, not consecutive days. Miss a day? A week? No problem. Your journey continues the moment you return.',
    screenshot: '/apps/todayrestart/feature-resilience.png',
    screenshotAlt: 'Journey Line showing restart count',
    imagePosition: 'right'
  },
  {
    title: 'Your Journey, Visualized',
    description: 'The Journey Line connects your first check-in to your latest, no matter how many days you missed. The line never breaks — proof that you haven\'t given up.',
    screenshot: '/apps/todayrestart/feature-journey.png',
    screenshotAlt: 'Journey Line visualization',
    imagePosition: 'left'
  },
  {
    title: '100% Private, 100% Local',
    description: 'No servers, no accounts, no sync. All your data stays on your iPhone. No privacy leaks, no data harvesting. Just you and your habits.',
    screenshot: '/apps/todayrestart/feature-privacy.png',
    screenshotAlt: 'Local-only storage illustration',
    imagePosition: 'right'
  },
  {
    title: 'Check In From Your Home Screen',
    description: 'Complete your habits without even opening the app. The iOS widget lets you check off habits with a single tap, greeted by warm, encouraging messages.',
    screenshot: '/apps/todayrestart/feature-widget.png',
    screenshotAlt: 'iOS Widget for Today Restart',
    imagePosition: 'left'
  }
]

export const featureGridItems: FeatureGridItem[] = [
  {
    title: 'Quick Start Templates',
    description: 'Not sure where to start? Use templates like "1-Minute English" or "Walk" to begin instantly.',
    icon: '🚀'
  },
  {
    title: 'Warm Reminders',
    description: 'Notifications that encourage, not pressure. Messages like "Just one minute" respect your pace.',
    icon: '💬'
  },
  {
    title: 'Flexible Schedule',
    description: 'Choose only the days you feel comfortable with. It doesn\'t have to be every day.',
    icon: '📅'
  },
  {
    title: 'Toggle with Confidence',
    description: 'Made a mistake? Tap again to cancel. No pressure, no permanent actions.',
    icon: '↩️'
  }
]

export const moreFeatures: FeatureListItem[] = [
  { label: 'Custom habit creation', tier: 'free' },
  { label: 'Cute icon selection', tier: 'free' },
  { label: 'Flexible day scheduling', tier: 'free' },
  { label: 'Push notifications', tier: 'free' },
  { label: 'Quick start templates', tier: 'free' },
  { label: 'Journey Line visualization', tier: 'free' },
  { label: 'Restart count tracking', tier: 'free' },
  { label: 'iOS home screen widget', tier: 'free' },
  { label: 'Hide streak display option', tier: 'free' },
  { label: 'Hide incomplete days option', tier: 'free' },
  { label: '100% local data storage', tier: 'free' },
  { label: 'No login required', tier: 'free' },
  { label: 'Ad-free experience', tier: 'pro' }
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to build sustainable habits.',
    features: [
      'Unlimited habits',
      'Journey Line visualization',
      'Restart count tracking',
      'iOS widget',
      'Push notifications',
      'Quick start templates',
      '100% local storage'
    ],
    cta: {
      label: 'Download Free',
      href: '#',
      variant: 'secondary'
    }
  },
  {
    name: 'Remove Ads',
    price: '$2.99',
    priceDetail: 'One-time purchase',
    description: 'Enjoy a clean, distraction-free experience.',
    features: [
      'All free features',
      'Remove banner ads permanently',
      'Support indie development'
    ],
    cta: {
      label: 'Remove Ads',
      href: '#',
      variant: 'primary'
    },
    highlighted: true
  }
]
