import { FileText, CreditCard, Send, CheckCircle2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

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

const comments = [
  "/post_components/Comment_1.svg",
  "/post_components/Comment_2.svg",
  "/post_components/Comment_3.svg",
  "/post_components/Comment_4.svg",
  "/post_components/Comment_5.svg",
  "/post_components/Comment_6.svg",
  "/post_components/Comment_7.svg",
  "/post_components/Comment_8.svg"
];

const posts = [
  "/post_components/Post_1.svg",
  "/post_components/Post_2.svg",
  "/post_components/Post_3.svg",
  "/post_components/Post_4.svg",
  "/post_components/Post_5.svg",
  "/post_components/Post_6.svg",
  "/post_components/Post_7.svg",
  "/post_components/Post_8.svg"
];

export default function HowItWorks() {
  const [visibleComments, setVisibleComments] = useState<string[]>([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Анимация постов
    const postInterval = setInterval(() => {
      setCurrentPostIndex(prev => (prev + 1) % posts.length);
    }, 1200);

    // Анимация комментариев
    let commentIndex = 0;
    const commentInterval = setInterval(() => {
      if (commentIndex < comments.length) {
        setVisibleComments(prev => [...prev, comments[commentIndex]]);
        commentIndex++;
      }
    }, 100);

    return () => {
      clearInterval(postInterval);
      clearInterval(commentInterval);
    };
  }, [isVisible]);

  return (
    <section id="how-it-works" className="pb-12 xs:pb-16 md:pt-0 relative" ref={sectionRef}>
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
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 xs:gap-6 md:gap-8 relative">
              {/* Connecting Line */}
              <div className="md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#1DA1F2]/0 via-[#1DA1F2]/50 to-[#1DA1F2]/0" />

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
          </div>

          {/* Post and Comments Block */}
          <div className="flex-1 h-full md:h-auto flex flex-col md:ml-10 ml-0 md:mt-0 mt-10  items-center relative">
            <img src="/post_components/Iphone_pro.png" alt="Iphone Mockup" className="w-full" />
            <div className="absolute top-0 left-0 h-full max-w-50 md:m-10 m-8 md:pt-10 pt-5 flex flex-col items-center">
              <img
                src={posts[currentPostIndex]}
                alt="Post"
                className="w-full transition-all duration-300"
                style={{ marginBottom: '2vh' }}
              />
              {visibleComments.map((comment, idx) => (
                <img
                  key={idx}
                  src={comment}
                  alt={`Comment ${idx + 1}`}
                  className="w-full mb-4 animate-fadeIn"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                    animation: `fadeIn 0.5s ease ${idx * 0.1}s forwards`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}