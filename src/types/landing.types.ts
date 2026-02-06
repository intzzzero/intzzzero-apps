export interface HeroData {
  headline: string
  subheadline: string
  primaryCTA: CTAData
  secondaryCTA?: CTAData
  docsCTA?: CTAData
  screenshot: string
  screenshotAlt: string
}

export interface CTAData {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface FeatureShowcaseData {
  title: string
  description: string
  screenshot: string
  screenshotAlt: string
  imagePosition: 'left' | 'right'
  badge?: string
}

export interface FeatureGridItem {
  title: string
  description: string
  icon: string
}

export interface FeatureListItem {
  label: string
  tier: 'free' | 'pro'
}

export interface PricingTier {
  name: string
  price: string
  priceDetail?: string
  description: string
  features: string[]
  cta: CTAData
  highlighted?: boolean
}
