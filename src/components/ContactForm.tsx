"use client";

import { useState } from 'react';
import { Mail, MessageSquare, Send, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [contactMethod, setContactMethod] = useState<'email' | 'telegram'>('email');
    const [contactValue, setContactValue] = useState('');

    return (

        <div id="contact" className="max-w-2xl mx-auto mb-12 xs:mb-16 md:mb-20">
            <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12 md:mb-16">
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
                    <span className="text-[#1DA1F2] drop-shadow-lg">
                        Contact Me
                    </span>
                </h2>
                <p className="text-sm xs:text-base md:text-lg text-white/70 px-2">
                    Get in touch and start growing your social presence today
                </p>
            </div>
            <div className="glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
                {/* Contact Method Selection */}
                <div className="grid grid-cols-2 gap-3 xs:gap-4 mb-6 xs:mb-8">
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
                <div className="mb-6 xs:mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your Telegram handle'}
                            className="w-full pl-4 pr-12 py-2.5 xs:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base"
                            value={contactValue}
                            onChange={(e) => setContactValue(e.target.value)}
                        />
                        <Send className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-[#1DA1F2]" />
                    </div>
                </div>

                {/* Submit Button */}
                <button className="w-full group px-6 xs:px-8 py-2.5 xs:py-3 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30 mb-4 xs:mb-6">
                    Send Message
                    <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-3 xs:gap-4">
                    <div className="flex items-center justify-center gap-2 text-white/70">
                        <Shield className="w-4 h-4 text-[#1DA1F2]" />
                        <span className="text-xs xs:text-sm">Secure & Private</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#1DA1F2]" />
                        <span className="text-xs xs:text-sm">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm; 