"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
  buttonText?: string
  comingSoon?: boolean
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false)

  const buttonStyles = {
    default: cn(
      "h-12 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md text-sm font-medium font-serif",
    ),
    highlight: cn(
      "h-12 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-lg hover:shadow-xl font-semibold text-base font-serif",
    ),
    comingSoon: cn("h-12 bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed font-serif"),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium font-serif bg-gradient-to-r from-slate-700 to-slate-900 text-white border-none shadow-lg",
  )

  return (
    <section className={cn("relative bg-gradient-to-b from-white to-slate-50 py-24 px-4 overflow-hidden", className)}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 text-center">Pricing</h2>
          <p className="text-xl text-slate-600 text-center max-w-3xl leading-relaxed">
            Start your transformation today. New features are dropping regularly as we build the future of
            faith-centered AI together.
          </p>

          <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-8 py-2.5 text-sm font-medium font-serif rounded-full transition-all duration-300",
                  (period === "Monthly" && !isYearly) || (period === "Yearly" && isYearly)
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm rounded-3xl transition-all duration-300 flex flex-col",
                tier.highlight
                  ? "bg-gradient-to-b from-slate-50 to-white border-2 border-slate-300 shadow-xl scale-105"
                  : "bg-white border border-slate-200 shadow-md hover:shadow-lg",
                tier.comingSoon && "opacity-75",
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-2">{tier.name}</h3>
                  {tier.comingSoon ? (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-slate-500">Coming Soon</span>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-slate-900">
                          ${isYearly ? (tier.price.yearly === 0 ? "0" : tier.price.yearly) : (tier.price.monthly === 0 ? "0" : tier.price.monthly)}
                        </span>
                        {(isYearly ? tier.price.yearly : tier.price.monthly) > 0 && (
                          <span className="text-sm text-slate-500">/{isYearly ? "year" : "month"}</span>
                        )}
                      </div>
                    </div>
                  )}
                  <p className="text-slate-600 leading-relaxed">{tier.description}</p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <div key={`${tier.name}-feature-${index}`} className="flex gap-3">
                      <div className="mt-1">
                        <Check className={cn("w-5 h-5", feature.included ? "text-slate-600" : "text-slate-300")} />
                      </div>
                      <div>
                        <div
                          className={cn("text-sm font-medium", feature.included ? "text-slate-900" : "text-slate-500")}
                        >
                          {feature.name}
                        </div>
                        <div className="text-sm text-slate-500">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                {tier.comingSoon ? (
                  <Button
                    className={cn("w-full relative transition-all duration-300", buttonStyles.comingSoon)}
                    disabled
                  >
                    Coming Soon
                  </Button>
                ) : (
                  <Button
                    className={cn(
                      "w-full relative transition-all duration-300",
                      tier.highlight ? buttonStyles.highlight : buttonStyles.default,
                    )}
                    onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
                  >
                    {tier.buttonText || (tier.highlight ? "Start Your Journey" : "Get Started")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PricingSection }
