"use client";

import { useState } from 'react';
import { Link2, ArrowRight, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define the structure of a pricing tier
interface PricingTier {
  replies: number;
  price: number;
  topTierReplies?: number;
  bonus?: number;
}

// Commented out free tier for future use
// const freeTier: PricingTier = {
//   replies: 5,
//   price: 0,
// };

// Define weekly pricing tiers
const weeklyPricingTiers: PricingTier[] = [
  // {
  //   ...freeTier,
  // },
  {
    replies: 20,
    price: 20,
  },
  {
    replies: 50,
    price: 20,
    bonus: 10
  },
  {
    replies: 100,
    price: 50,
    topTierReplies: 2,
    bonus: 20
  },
  {
    replies: 150,
    price: 100,
    topTierReplies: 5,
    bonus: 30
  },
];

// Define one-time pricing tiers
const oneTimePricingTiers: PricingTier[] = [
  // {
  //   ...freeTier,
  // },
  {
    replies: 20,
    price: 20,
  },
  {
    replies: 50,
    price: 50,
  },
  {
    replies: 100,
    price: 100,
    topTierReplies: 2,
  },
  {
    replies: 150,
    price: 250,
    topTierReplies: 5,
  },
];

// Define the structure of post data
interface PostData {
  image?: string;
  title?: string;
  description?: string;
  author?: string;
}

export default function PricingCardV2() {
  const router = useRouter();
  const [tweetUrl, setTweetUrl] = useState('');
  const [postData] = useState<PostData | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const [step, setStep] = useState(1);
  const [contactMethod, setContactMethod] = useState<'email' | 'telegram' | ''>('');
  const [contactValue, setContactValue] = useState('');
  const [error, setError] = useState('');
  const [boostType, setBoostType] = useState<'weekly' | 'onetime'>('weekly');

  // Determine current pricing tiers based on boost type
  const currentPricingTiers = boostType === 'weekly' ? weeklyPricingTiers : oneTimePricingTiers;

  // Validate X username format
  const validateXUsername = (username: string): boolean => {
    const cleanUsername = username.replace(/^@/, '');
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/;

    return usernameRegex.test(cleanUsername);
  };

  // Validate tweet URL format
  const validateTweetUrl = (url: string): boolean => {
    const tweetUrlRegex = /^https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/\d+/i;

    return tweetUrlRegex.test(url);
  };

  // Handle submission of step 1
  const handleSubmitStep1 = () => {
    setError('');

    if (!tweetUrl.trim()) {
      setError(boostType === 'weekly'
        ? 'Please enter your X account name'
        : 'Please enter your tweet URL'
      );
      return;
    }

    if (selectedPackage === null) {
      setError('Please select a package');
      return;
    }

    if (boostType === 'weekly') {
      if (!validateXUsername(tweetUrl)) {
        setError('Please enter a valid X account name (4-15 characters, letters, numbers and underscores, must start with a letter)');
        return;
      }

      const cleanUsername = tweetUrl.replace(/^@/, '');

      // Redirect to contact page with parameters
      router.push(`/services/x-boost/contact?username=${encodeURIComponent(cleanUsername)}&package=${selectedPackage}&type=weekly`);

    } else {
      if (!validateTweetUrl(tweetUrl)) {
        setError('Please enter a valid tweet URL (e.g., https://x.com/username/status/123...)');
        return;
      }

      // Redirect to contact page with parameters
      router.push(`/services/x-boost/contact?url=${encodeURIComponent(tweetUrl)}&package=${selectedPackage}&type=onetime`);
    }
  };

  // Handle input change for tweet URL
  const handleInputChange = (value: string) => {
    setError('');
    setTweetUrl(value);
  };

  // Handle submission of step 2
  const handleSubmitStep2 = async () => {
    if (!contactMethod) {
      setError('Please select contact method');
      return;
    }
    if (!contactValue) {
      setError(`Please enter your ${contactMethod}`);
      return;
    }
    if (selectedPackage === null) return;

    setError('');

    try {
      const response = await fetch('https://anykind.app.n8n.cloud/webhook/191cc54c-fccc-458f-9a57-1c45f1183a15', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: 1,
          [contactMethod]: contactValue,
          pack: selectedPackage + 1,
          url: boostType === 'weekly' ? tweetUrl : '',
          tweet_url: boostType === 'onetime' ? tweetUrl : '',
          boost_type: boostType,
          utm_source: document.referrer || 'direct',
          selected_package: {
            ...currentPricingTiers[selectedPackage],
            type: boostType
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStep(3); // Move to the next step
      setContactValue('');
      setError('');

    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    }
  };

  const selectedTier = selectedPackage !== null ? currentPricingTiers[selectedPackage] : null;

  // Get input label based on boost type
  const getInputLabel = () => {
    return boostType === 'weekly'
      ? 'Paste name of your X account'
      : 'Paste a link to your tweet';
  };

  // Get input placeholder based on boost type
  const getInputPlaceholder = () => {
    return boostType === 'weekly'
      ? 'Enter your X account name (e.g. @username)'
      : 'Paste a link to your tweet on X';
  };

  return (
    <section id="pricing" className="py-12 xs:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
            <span className="text-[#1DA1F2] drop-shadow-lg">
              Boost your tweet
            </span>
          </h2>
          <p className="text-sm xs:text-base md:text-lg text-white/70">
            Get instant engagement from real users and make your profile stand out
          </p>
        </div>

        {/* Order Form */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
            {step === 1 ? (
              <>
                {/* Boost Type Tabs */}
                <div className="flex mb-6 xs:mb-8 border border-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setBoostType('weekly')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm xs:text-base font-medium transition-all ${boostType === 'weekly'
                      ? 'bg-[#1DA1F2] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    Weekly Boost
                  </button>
                  <button
                    onClick={() => setBoostType('onetime')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm xs:text-base font-medium transition-all ${boostType === 'onetime'
                      ? 'bg-[#1DA1F2] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    One-time boost
                  </button>
                </div>

                {/* URL Input */}
                <div className="mb-6 xs:mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                    <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                      {getInputLabel()}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Link2 className="w-4 h-4 xs:w-5 xs:h-5 text-[#1DA1F2]" />
                    </div>
                    <input
                      type="text"
                      placeholder={getInputPlaceholder()}
                      className={`w-full pl-9 xs:pl-10 pr-4 py-2.5 xs:py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base transition-colors ${error ? 'border-red-500' : 'border-white/10'
                        }`}
                      value={tweetUrl}
                      onChange={(e) => handleInputChange(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="mt-2 text-red-500 text-sm">{error}</div>
                  )}
                </div>

                {/* Preview Card */}
                {postData && (
                  <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    {postData.image && (
                      <Image
                        src={postData.image}
                        alt="Post preview"
                        width={300}
                        height={128}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                    )}
                    {postData.title && (
                      <h3 className="text-white text-sm font-medium mb-1">{postData.title}</h3>
                    )}
                    {postData.description && (
                      <p className="text-white/70 text-xs">{postData.description}</p>
                    )}
                    {postData.author && (
                      <div className="text-[#1DA1F2] text-xs mt-2">@{postData.author}</div>
                    )}
                  </div>
                )}

                {/* Package Selection */}
                <div className="space-y-2 xs:space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                    <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                      Choose Pack
                    </div>
                  </div>

                  {currentPricingTiers.map((tier, index) => (
                    <label
                      key={index}
                      className="block cursor-pointer group"
                    >
                      <div className={`relative flex items-center justify-between p-3 xs:p-4 rounded-xl transition-all ${selectedPackage === index
                        ? 'bg-white/10'
                        : 'bg-white/5 hover:bg-white/8'
                        }`}>
                        <div className="flex items-center gap-2 xs:gap-3">
                          <input
                            type="radio"
                            name="package"
                            checked={selectedPackage === index}
                            onChange={() => setSelectedPackage(index)}
                            className="w-4 h-4 border-2 border-white/20 text-[#1DA1F2] focus:ring-[#1DA1F2] focus:ring-offset-0 rounded-full"
                          />
                          <span className="flex flex-wrap items-center gap-1">
                            <span className="text-[#4CAF50] font-medium text-sm xs:text-base">{tier.replies}</span>
                            <span className="text-white/90 text-sm xs:text-base">
                              Replies + Likes + RT
                              {boostType === 'weekly' && index <= 1 && (
                                <span className="font-bold ml-1">every week</span>
                              )}
                            </span>
                            {tier.topTierReplies && (
                              <>
                                <span className="text-white/50 mx-1">+</span>
                                <span className="text-[#4CAF50] font-medium text-sm xs:text-base">{tier.topTierReplies}</span>
                                <span className="text-white/90 text-sm xs:text-base">Replies from Top Tier Accounts</span>
                              </>
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {tier.bonus && (
                            <span className="text-[#4CAF50] text-sm xs:text-base font-medium">
                              +{tier.bonus}% Bonus
                            </span>
                          )}
                          <div className="text-white font-medium text-sm xs:text-base ml-2">
                            ${tier.price}{boostType === 'weekly' ? '/mo' : ''}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="mt-6 xs:mt-8">
                  <button
                    onClick={handleSubmitStep1}
                    className="w-full group px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30"
                  >
                    Get Boost
                    <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </>
            ) : step === 2 ? (
              <>
                {/* Step 2: Contact Details */}
                <div className="space-y-4 xs:space-y-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                    <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                      Contact Details
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-white/70 mb-2 text-xs xs:text-sm">
                      <Link2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#1DA1F2]" />
                      <span>Tweet URL:</span>
                      <span className="text-white truncate">{tweetUrl}</span>
                    </div>
                    {selectedTier && (
                      <div className="flex items-center gap-2 text-white/70 text-xs xs:text-sm">
                        <span>Selected package:</span>
                        <span className="text-white">
                          {selectedTier.replies} Replies + Likes
                          {selectedTier.topTierReplies &&
                            ` + ${selectedTier.topTierReplies} Top Tier Replies`
                          }
                          {` ($${selectedTier.price})`}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 xs:space-y-6">
                    <div className="text-xs xs:text-sm font-medium text-white/80">CONTACT DETAILS</div>

                    {/* Contact Method Selection */}
                    <div className="grid grid-cols-2 gap-3 xs:gap-4">
                      <button
                        onClick={() => setContactMethod('email')}
                        className={`flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ${contactMethod === 'email'
                          ? 'bg-[#1DA1F2]/20 border-[#1DA1F2]/50 text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                          } border`}
                      >
                        <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
                        <span className="text-sm xs:text-base">Email</span>
                      </button>
                      <button
                        onClick={() => setContactMethod('telegram')}
                        className={`flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ${contactMethod === 'telegram'
                          ? 'bg-[#1DA1F2]/20 border-[#1DA1F2]/50 text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                          } border`}
                      >
                        <MessageSquare className="w-4 h-4 xs:w-5 xs:h-5" />
                        <span className="text-sm xs:text-base">Telegram</span>
                      </button>
                    </div>

                    {/* Contact Input */}
                    {contactMethod && (
                      <div>
                        <input
                          type={contactMethod === 'email' ? 'email' : 'text'}
                          placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your Telegram handle'}
                          className="w-full px-4 py-2.5 xs:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base"
                          value={contactValue}
                          onChange={(e) => setContactValue(e.target.value)}
                        />
                      </div>
                    )}

                    {/* Error Message */}
                    {error && (
                      <div className="text-red-500 text-xs xs:text-sm">{error}</div>
                    )}

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmitStep2}
                      className="w-full group px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30"
                    >
                      Send Request
                      <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Back Button */}
                    <button
                      onClick={() => setStep(1)}
                      className="w-full px-6 xs:px-8 py-3 xs:py-4 bg-transparent border border-white/10 rounded-xl text-white/70 font-medium text-sm xs:text-base hover:bg-white/5 transition-all"
                    >
                      Back to packages
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thank you for your request!
                </h3>
                <p className="text-white/70 mb-6">
                  We will process your order and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setTweetUrl('');
                    setSelectedPackage(0);
                  }}
                  className="px-6 py-2 bg-[#1DA1F2] rounded-xl text-white font-medium hover:bg-[#1A91DA] transition-all"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
