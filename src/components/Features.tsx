import { Shield, Zap, Clock, Users, MessageCircle, TrendingUp } from 'lucide-react';

// Define the core features of the service
const features = [
  {
    icon: MessageCircle,
    title: "Context-aware Replies",
    description: "Real answers on the topic of your tweet, making conversations natural and engaging",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  },
  {
    icon: Users,
    title: "Real Users Only",
    description: "No bots or automation - only genuine users providing authentic engagement",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "See engagement start appearing on your tweet within minutes of posting",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  },
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Risk-free with no violations of Twitter policies, ensuring account safety",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Start small and scale up as needed, with flexible engagement options",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  },
  {
    icon: Clock,
    title: "Money Back Guarantee",
    description: "Not satisfied? Get your money back with our 100% satisfaction guarantee",
    gradient: "from-[#1DA1F2] to-[#0C1F3F]"
  }
];

export default function Features() {
  return (
    <section id="features" className="pt-0 xs:pt-16 md:pt-0 relative ">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1DA1F2]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0C1F3F]/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12 md:mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
            <span className="text-[#1DA1F2] drop-shadow-lg">
              Core Features
            </span>
          </h2>
          <p className="text-sm xs:text-base md:text-lg text-white/70 px-2">
            Everything you need to boost your Twitter presence and engage with your audience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1DA1F2]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

              <div className="glass-card relative bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10 h-full transition-all group-hover:border-[#1DA1F2]/30 group-hover:translate-y-[-2px]">
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-r from-[#1DA1F2]/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 xs:w-6 xs:h-6 text-[#1DA1F2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base xs:text-lg md:text-xl font-bold text-white mb-1.5 xs:mb-2 group-hover:text-[#1DA1F2] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm xs:text-base text-white/70 group-hover:text-white/90 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 xs:mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
              {[
                { value: '100%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' },
                { value: '5min', label: 'Average Delivery' }
              ].map((stat, index) => (
                <div key={index} className={`text-center ${index < 2 ? 'col-span-1' : 'col-span-2 md:col-span-1'}`}>
                  <div className="text-xl xs:text-2xl font-bold text-[#1DA1F2] mb-1">{stat.value}</div>
                  <div className="text-xs xs:text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
