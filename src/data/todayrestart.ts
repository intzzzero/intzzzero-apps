import type { HeroData, FeatureShowcaseData, FeatureGridItem, FeatureListItem, PricingTier } from '@/types'

export const hero: HeroData = {
  headline: 'The Courage to Start Again',
  subheadline: 'Today Restart is a local-only habit tracker for perfectionists. No streaks, no pressure. Just start again, one minute at a time.',
  primaryCTA: {
    label: 'Download Free',
    href: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%EB%8B%A4%EC%8B%9C-%EB%82%98%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9E%91%EC%9D%80-%EC%8A%B5%EA%B4%80/id6758337278',
    variant: 'primary'
  },
  secondaryCTA: {
    label: 'View on App Store',
    href: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%EB%8B%A4%EC%8B%9C-%EB%82%98%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9E%91%EC%9D%80-%EC%8A%B5%EA%B4%80/id6758337278',
    variant: 'secondary'
  },
  docsCTA: {
    label: 'User Manual',
    href: '/docs/todayrestart',
    variant: 'secondary'
  }
}

export const featureShowcases: FeatureShowcaseData[] = [
  {
    title: 'Resilience Over Streaks',
    description: 'Success is measured by the number of times you started again, not consecutive days. Miss a day? A week? No problem. Your journey continues the moment you return.',
    imagePosition: 'right'
  },
  {
    title: 'Your Journey, Visualized',
    description: 'The Journey Line connects your first check-in to your latest, no matter how many days you missed. The line never breaks — proof that you haven\'t given up.',
    imagePosition: 'left'
  },
  {
    title: '100% Private, 100% Local',
    description: 'No servers, no accounts, no sync. All your data stays on your iPhone. No privacy leaks, no data harvesting. Just you and your habits.',
    imagePosition: 'right'
  },
  {
    title: 'Check In From Your Home Screen',
    description: 'Complete your habits without even opening the app. The iOS widget lets you check off habits with a single tap, greeted by warm, encouraging messages.',
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
      href: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%EB%8B%A4%EC%8B%9C-%EB%82%98%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9E%91%EC%9D%80-%EC%8A%B5%EA%B4%80/id6758337278',
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
      href: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%EB%8B%A4%EC%8B%9C-%EB%82%98%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9E%91%EC%9D%80-%EC%8A%B5%EA%B4%80/id6758337278',
      variant: 'primary'
    },
    highlighted: true
  }
]
