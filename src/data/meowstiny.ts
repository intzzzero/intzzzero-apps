import type { HeroData, FeatureShowcaseData, FeatureGridItem, FeatureListItem } from '@/types'

const APP_STORE_URL = 'https://apps.apple.com/us/app/id6752027845'
const OFFICIAL_URL = 'https://meowstiny.com/'

export const hero: HeroData = {
  headline: 'A Daily Health Diary for Your Cat',
  subheadline:
    'Built for owners caring for cats with chronic conditions — cystitis/FLUTD, kidney disease, diabetes, IBD. Log pee, poop and meds in one tap a day, then show your vet a single clear report. No login — your records stay on your device.',
  primaryCTA: {
    label: 'Download Free',
    href: APP_STORE_URL,
    variant: 'primary'
  },
  secondaryCTA: {
    label: 'Visit meowstiny.com',
    href: OFFICIAL_URL,
    variant: 'secondary'
  },
  docsCTA: {
    label: 'User Manual',
    href: '/docs/meowstiny',
    variant: 'ghost'
  },
  screenshot: '/screenshots/meowstiny/01-today.png',
  screenshotAlt: "Meowstiny home screen showing today's cat health log"
}

export const featureShowcases: FeatureShowcaseData[] = [
  {
    title: 'Log in One or Two Taps a Day',
    description:
      "Record pee and poop right from the home screen — color, condition and count. Add weight and respiratory rate when you need them. Daily logging is fast enough to actually stick.",
    screenshot: '/screenshots/meowstiny/01-today.png',
    screenshotAlt: 'One-tap daily logging on the Meowstiny home screen',
    imagePosition: 'right'
  },
  {
    title: 'See the Health Trend at a Glance',
    description:
      'A unified calendar shows every record by date, so weeks of small notes turn into a pattern you can actually read — and bring to your next appointment.',
    screenshot: '/screenshots/meowstiny/02-calendar.png',
    screenshotAlt: 'Unified monthly calendar of cat health records in Meowstiny',
    imagePosition: 'left'
  },
  {
    title: 'Never Miss a Dose',
    description:
      'Check off medications and get reminder notifications that arrive on time. Keep adherence on track for cats on long-term treatment.',
    screenshot: '/screenshots/meowstiny/05-medication.png',
    screenshotAlt: 'Medication scheduling and reminders in Meowstiny',
    imagePosition: 'right'
  },
  {
    title: 'Track What Matters',
    description:
      'A 7-day summary, severity trend, medication adherence and weight trend — the signals that matter for chronic conditions, summarized for you.',
    screenshot: '/screenshots/meowstiny/04-stats.png',
    screenshotAlt: 'Health statistics and trends in Meowstiny',
    imagePosition: 'left'
  },
  {
    title: 'A Report You Can Show Your Vet',
    description:
      'One image covering since your last visit, or the past 2 weeks / 1 month / 3 months — abnormal urination, blood and weight loss summarized with your own notes. Save and share it to show at the clinic.',
    screenshot: '/screenshots/meowstiny/03-report.png',
    screenshotAlt: 'Vet-ready single-image health report from Meowstiny',
    imagePosition: 'right',
    badge: 'VET-READY'
  }
]

export const featureGridItems: FeatureGridItem[] = [
  {
    title: 'Respiratory Rate',
    description: 'Measure and log resting respiratory rate — an early signal worth watching in cats with heart or breathing concerns.',
    icon: '🫁'
  },
  {
    title: 'Multiple Cats',
    description: 'Keep a separate profile for each cat, so multi-cat households stay organized.',
    icon: '🐈'
  },
  {
    title: '100% On-Device',
    description: 'No login, no account. Every record stays on your iPhone — private by default.',
    icon: '🔒'
  },
  {
    title: 'Korean · English · Japanese',
    description: 'Fully localized in three languages, available on the KR, US and JP App Stores.',
    icon: '🌏'
  }
]

export const moreFeatures: FeatureListItem[] = [
  { label: 'One-tap pee & poop logging (color, condition, count)', tier: 'free' },
  { label: 'Medication check-off & reminder notifications', tier: 'free' },
  { label: 'Weight tracking', tier: 'free' },
  { label: 'Respiratory rate measurement', tier: 'free' },
  { label: 'Unified calendar of daily records', tier: 'free' },
  { label: '7-day summary & severity trend', tier: 'free' },
  { label: 'Medication adherence & weight trend', tier: 'free' },
  { label: 'Vet-ready single-image report', tier: 'free' },
  { label: 'Multiple cat profiles', tier: 'free' },
  { label: 'No login required', tier: 'free' },
  { label: '100% on-device storage', tier: 'free' },
  { label: 'Korean / English / Japanese', tier: 'free' }
]
