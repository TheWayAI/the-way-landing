import { PricingSection } from "@/components/ui/pricing-section"
import { Heart, Sparkles, Crown } from "lucide-react"

const theWayTiers = [
  {
    name: "Explorer",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Begin your spiritual journey with essential tools and resources",
    icon: <Heart className="w-8 h-8 text-slate-600" />,
    features: [
      {
        name: "5 Messages Per Month",
        description: "Limited conversations with WayFinder",
        included: true,
      },
      {
        name: "Free Faith Resources",
        description: "Access to curated spiritual content and materials",
        included: true,
      },
      {
        name: "Premium AI Features",
        description: "Full WayFinder AI capabilities",
        included: false,
      },
      {
        name: "Advanced Features",
        description: "Complete resource library and tools",
        included: false,
      },
    ],
    buttonText: "Start Free",
  },
  {
    name: "Follower",
    price: {
      monthly: 19.99,
      yearly: 191.9, // 20% discount
    },
    description: "Unlock premium WayFinder AI for deeper spiritual growth",
    highlight: true,
    badge: "Most Popular",
    icon: <Sparkles className="w-8 h-8 text-slate-700" />,
    features: [
      {
        name: "Premium WayFinder AI",
        description: "Full access to our advanced Christ-centered AI assistant",
        included: true,
      },
      {
        name: "Complete Resource Library",
        description: "All premium faith resources and materials",
        included: true,
      },
      {
        name: "Personalized Spiritual Guidance",
        description: "AI that understands your unique journey",
        included: true,
      },
      {
        name: "Early Access to New Features",
        description: "Be first to experience latest updates",
        included: true,
      },
    ],
    buttonText: "Begin Your Journey",
  },
  {
    name: "Leader",
    price: {
      monthly: 49.99,
      yearly: 479.9,
    },
    description: "Unlimited access and advanced features for spiritual leaders",
    icon: <Crown className="w-8 h-8 text-slate-600" />,
    comingSoon: true,
    features: [
      {
        name: "Unlimited AI Access",
        description: "No limits on AI conversations and guidance",
        included: true,
      },
      {
        name: "More features TBA",
        description: "Additional capabilities coming soon",
        included: true,
      },
      {
        name: "Feature Placeholder 1",
        description: "Details coming soon",
        included: false,
      },
      {
        name: "Feature Placeholder 2",
        description: "Details coming soon",
        included: false,
      },
    ],
  },
]

export function TheWayPricing() {
  return <PricingSection tiers={theWayTiers} />
}
