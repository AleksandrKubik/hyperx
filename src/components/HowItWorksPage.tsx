import { FileText, CreditCard, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "1. Order",
    description: "Place your X link and we'll contact you",
    details: [
      "Paste your tweet URL",
      "Choose engagement package",
      "Provide contact details"
    ]
  },
  {
    icon: CreditCard,
    title: "2. Pay",
    description: "Secure payment via crypto or cards",
    details: [
      "Multiple payment options",
      "Instant processing",
      "Secure transactions"
    ]
  },
  {
    icon: Send,
    title: "3. Delivery",
    description: "Watch replies appear on your tweet",
    details: [
      "Real-time engagement",
      "Natural interaction flow",
      "Quality responses"
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <section className="pb-4 xs:py-16 md:py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1DA1F2]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0C1F3F]/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12 md:mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
            <span className="text-[#1DA1F2] drop-shadow-lg">
              How it works
            </span>
          </h2>
          <p className="text-sm xs:text-base md:text-lg text-white/70 px-2">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
              <div className="h-full bg-gradient-to-r from-[#1DA1F2]/0 via-[#1DA1F2]/50 to-[#1DA1F2]/0" />
            </div>

            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1DA1F2]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

                <div className="glass-card relative bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10 h-full transition-all group-hover:border-[#1DA1F2]/30 group-hover:translate-y-[-2px]">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-[#1DA1F2]/10 to-transparent flex items-center justify-center mb-4 xs:mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8 text-[#1DA1F2]" />
                    </div>
                    <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-white mb-2 xs:mb-3 md:mb-4 group-hover:text-[#1DA1F2] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm xs:text-base text-white/70 mb-4 xs:mb-5 md:mb-6 group-hover:text-white/90 transition-colors">
                      {step.description}
                    </p>
                    <ul className="space-y-2 xs:space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/70 group-hover:text-white/90 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] flex-shrink-0" />
                          <span className="text-xs xs:text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Test Flight Card */}
          <div className="mt-8 xs:mt-12 md:mt-16 max-w-3xl mx-auto">
            <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-[#1DA1F2] mb-2 xs:mb-3 md:mb-4">
                Test Flight Available
              </h3>
              <p className="text-sm xs:text-base text-white/70 mb-4 xs:mb-5 md:mb-6">
                Want to see how it works? Ask your manager for a demonstration and get
                <span className="text-[#1DA1F2] font-bold"> 5 free test replies </span>
                delivered to your tweet.
              </p>
              <button className="inline-flex items-center gap-2 px-5 xs:px-6 py-2.5 xs:py-3 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base hover:bg-[#1A91DA] transition-all shadow-lg shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30 group">
                Get Free Test
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
