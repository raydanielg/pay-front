import { useEffect, useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import logo from "@/assets/icons/logo.png"
import img1 from "@/assets/ecommerce-phone-happy-black-woman-with-credit-card-online-shopping-digital-payment-app-home-smile-banking-excited-african-girl-checks-cash-budget-money-growth-savings-online_590464-111903.jpg"
import img2 from "@/assets/elegant-attractive-muslim-woman-using-mobile-laptop-searching-online-shopping-information-living-room-home-portrait-happy-woman-purchasing-product-via-online-shopping-pay-using-credit-card_657921-979.jpg"
import img3 from "@/assets/business-people-hands-office-floor-with-meeting-content-creation-planning-motivation-teamwork-celebration-web-creative-agency-with-seo-update-strategy-with-diversity-startup_590464-484411.jpg"
import img4 from "@/assets/team-young-african-people-office-table-with-laptops_219728-4509.jpg"
import img5 from "@/assets/african-american-manager-examines-company-strategy-with-her-staff_482257-125684.jpg"

const slides = [
  {
    image: img1,
    title: "Accept payments anywhere",
    description: "Mobile money, bank transfers, cards, and QR payments all from one powerful platform built for African businesses.",
  },
  {
    image: img2,
    title: "Digital wallets made simple",
    description: "Create wallets, store funds, check balances, send and receive money, and track every transaction in real time.",
  },
  {
    image: img3,
    title: "Checkout that converts",
    description: "A secure, hosted checkout that lets your customers pay using their preferred payment method in seconds.",
  },
  {
    image: img4,
    title: "Payment links in seconds",
    description: "Generate and share payment links with your customers. No website needed, just send the link and get paid.",
  },
  {
    image: img5,
    title: "Built for developers",
    description: "Clean APIs, webhooks, sandbox mode, and full documentation. Integrate XerinPay into your app in minutes.",
  },
]

export function AuthCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative hidden bg-muted lg:block">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt="XerinPay"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="XerinPay" className="h-10 w-auto brightness-0 invert" />
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-700 ease-out",
              index === current
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95 absolute pointer-events-none"
            )}
          >
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              {slide.title}
            </h2>
            <p
              className={cn(
                "mt-4 text-lg text-white/85 max-w-md transition-all delay-200 duration-700 ease-out",
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              {slide.description}
            </p>
          </div>
        ))}

        <div className="mt-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === current ? "w-8 bg-white" : "w-2 bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
