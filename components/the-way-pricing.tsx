import { PricingSection } from "@/components/ui/pricing-section"
import { Heart, Sparkles, Crown } from "lucide-react"

const theWayTiers = [
  {
    name: "Seeker",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Free access to The Way with limited monthly credits",
    icon: <Heart className="w-8 h-8 text-slate-600" />,
    features: [
      {
        name: "Small monthly credits",
        description: "Limited allocation for basic use",
        included: true,
      },
      {
        name: "Limited AI access",
        description: "Basic models, frameworks, and tools",
        included: true,
      },
    ],
    buttonText: "Start Free",
  },
  {
    name: "Follower",
    price: {
      monthly: 5,
      yearly: 55,
    },
    description: "Expanded access with deeper engagement in AI-guided spiritual growth",
    icon: <Sparkles className="w-8 h-8 text-slate-700" />,
    features: [
      {
        name: "Moderate monthly credits",
        description: "Regular allocation for consistent engagement",
        included: true,
      },
      {
        name: "Access to additional resources & tools",
        description: "AI-guided studies, daily renewal tools, and core frameworks",
        included: true,
      },
    ],
    buttonText: "Begin Your Journey",
  },
  {
    name: "Disciple",
    price: {
      monthly: 12,
      yearly: 120,
    },
    description: "Full access to The Way with all AI models, frameworks, and resources",
    highlight: true,
    badge: "Most Popular",
    icon: <Crown className="w-8 h-8 text-slate-600" />,
    features: [
      {
        name: "Most monthly credits",
        description: "Abundant allocation to explore everything",
        included: true,
      },
      {
        name: "Full access to all resources & tools",
        description: "Complete platform access including all AI models, frameworks, studies, and community features",
        included: true,
      },
    ],
    buttonText: "Unlock Full Access",
  },
]

export function TheWayPricing() {
  return <PricingSection tiers={theWayTiers} />
}
