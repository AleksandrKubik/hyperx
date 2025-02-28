"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

// Добавляем определение интерфейса и массива пакетов
interface PricingTier {
    replies: number;
    price: number;
    topTierReplies?: number;
    bonus?: number;
}

const weeklyPricingTiers: PricingTier[] = [
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

const oneTimePricingTiers: PricingTier[] = [
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

function ContactForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [contactMethod, setContactMethod] = useState<'email' | 'telegram' | ''>('');
    const [contactValue, setContactValue] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const tweetUrl = searchParams?.get('url');
    const username = searchParams?.get('username');
    const selectedPackageIndex = searchParams?.get('package');
    const boostType = searchParams?.get('type');

    useEffect(() => {
        // Проверяем наличие необходимых параметров
        if (
            (!tweetUrl && !username) ||
            selectedPackageIndex === null ||
            isNaN(Number(selectedPackageIndex)) ||
            !boostType
        ) {
            router.push('/services/x-boost');
        }
    }, [tweetUrl, username, selectedPackageIndex, boostType, router]);

    const selectedTier = selectedPackageIndex !== null
        ? (boostType === 'weekly' ? weeklyPricingTiers : oneTimePricingTiers)[Number(selectedPackageIndex)]
        : null;

    const handleSubmit = async () => {
        if (!contactMethod) {
            setError('Please select contact method');
            return;
        }
        if (!contactValue) {
            setError(`Please enter your ${contactMethod}`);
            return;
        }

        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('https://anykind.app.n8n.cloud/webhook/191cc54c-fccc-458f-9a57-1c45f1183a15', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: 1,
                    email: contactMethod === 'email' ? contactValue : '',
                    telegram: contactMethod === 'telegram' ? contactValue : '',
                    pack: Number(selectedPackageIndex) + 1,
                    url: boostType === 'weekly' ? username : tweetUrl,
                    boost_type: boostType,
                    utm_source: document.referrer || 'direct'
                })
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setContactMethod('');
                setContactValue('');
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setError('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <section className="py-12 xs:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10 text-center">
                            <div className="text-2xl xs:text-3xl font-bold text-white mb-4">Thank you!</div>
                            <div className="text-white/70 text-sm xs:text-base mb-6">
                                Your request has been submitted successfully. We will contact you shortly.
                            </div>
                            <button
                                onClick={() => router.push('/services/x-boost#pricing')}
                                className="px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base hover:bg-[#1A91DA] transition-all"
                            >
                                Back to packages
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 xs:py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
                        {/* Details Display */}
                        <div className="mb-6">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                                    <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                                        {boostType === 'weekly' ? 'Your X Account' : 'Your Tweet URL'}
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl px-4 py-3 text-white text-sm xs:text-base">
                                    {boostType === 'weekly' ? username : tweetUrl}
                                </div>
                            </div>
                            {selectedTier && (
                                <div className="mt-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                                        <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                                            Selected Package
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl px-4 py-3 flex justify-between items-center">
                                        <span className="text-white text-sm xs:text-base">
                                            {selectedTier.replies} Replies + Likes + RT
                                            {boostType === 'weekly' && Number(selectedPackageIndex) <= 1 && (
                                                <span className="font-bold ml-1">every week</span>
                                            )}
                                            {selectedTier.topTierReplies &&
                                                ` + ${selectedTier.topTierReplies} Top Tier Replies`}
                                            {selectedTier.bonus && (
                                                <span className="text-[#4CAF50] ml-2">+{selectedTier.bonus}% Bonus</span>
                                            )}
                                        </span>
                                        <span className="text-white/50 text-sm xs:text-base">
                                            ${selectedTier.price}{boostType === 'weekly' ? '/mo' : ''}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 xs:space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-1 bg-[#1DA1F2] rounded-full"></div>
                                <div className="text-white text-sm xs:text-base font-bold uppercase tracking-wide">
                                    Contact Details
                                </div>
                            </div>

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
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full group px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1A91DA]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        Send Request
                                        <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Back Button */}
                            <button
                                onClick={() => router.push('/services/x-boost#pricing')}
                                className="w-full px-6 xs:px-8 py-3 xs:py-4 bg-transparent border border-white/10 rounded-xl text-white/70 font-medium text-sm xs:text-base hover:bg-white/5 transition-all"
                            >
                                Back to packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={
            <section className="py-12 xs:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
                            <div className="animate-pulse flex space-y-4 flex-col">
                                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                                <div className="h-10 bg-white/10 rounded"></div>
                                <div className="h-10 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }>
            <ContactForm />
        </Suspense>
    );
} 