"use client";

import { ArrowRight } from 'lucide-react';

export default function TestFlightCard() {
    return (
        <div id="test-flight" className="mt-8 xs:mt-12 md:mt-16 max-w-3xl mx-auto">
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
    );
} 