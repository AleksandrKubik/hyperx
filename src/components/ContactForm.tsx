"use client";

import { useState } from 'react';
import { Mail, MessageSquare, Send, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [contactMethod, setContactMethod] = useState<'email' | 'telegram'>('email'); // State to track the selected contact method
    const [contactValue, setContactValue] = useState(''); // State to store the contact input value

    // Function to validate the input based on the selected contact method
    const validateInput = (): boolean => {
        if (!contactValue.trim()) {
            return false; // Input cannot be empty
        }

        if (contactMethod === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
            if (!emailRegex.test(contactValue)) {
                return false; // Invalid email format
            }
        }

        if (contactMethod === 'telegram') {
            if (!contactValue.startsWith('@')) {
                return false; // Telegram handle must start with '@'
            }
        }

        return true; // Input is valid
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        if (!validateInput()) return; // Validate input before submission

        try {
            const response = await fetch('https://anykind.app.n8n.cloud/webhook/191cc54c-fccc-458f-9a57-1c45f1183a15', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: 1,
                    [contactMethod]: contactValue,
                    pack: 4,
                    url: window.location.href,
                    utm_source: document.referrer || 'direct'
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setContactValue(''); // Clear input field after successful submission

            // Reset success message after 3 seconds
            setTimeout(() => {
                // Logic to reset success message can be added here
            }, 3000);

        } catch (error) {
            console.error('Failed to send message. Please try again.', error);
        }
    };

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
                        onClick={() => {
                            setContactMethod('email'); // Set contact method to email
                        }}
                        className={`flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ${contactMethod === 'email'
                            ? 'bg-[#1DA1F2]/20 border-[#1DA1F2]/50 text-white'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                            } border`}
                    >
                        <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
                        <span className="text-sm xs:text-base">Email</span>
                    </button>
                    <button
                        onClick={() => {
                            setContactMethod('telegram'); // Set contact method to Telegram
                        }}
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
                            className={`w-full pl-4 pr-12 py-2.5 xs:py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base transition-colors ${contactMethod === 'email' ? 'border-white/10' : 'border-white/10'
                                }`}
                            value={contactValue}
                            onChange={(e) => {
                                setContactValue(e.target.value); // Update contact value on input change
                            }}
                        />
                        <Send className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-[#1DA1F2]" />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit} // Handle form submission
                    className={`w-full group px-6 xs:px-8 py-2.5 xs:py-3 rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 transition-all shadow-xl ${contactMethod === 'email' ? 'bg-[#1DA1F2] shadow-[#1DA1F2]/20 hover:bg-[#1A91DA] hover:shadow-[#1DA1F2]/30' : 'bg-[#1DA1F2] shadow-[#1DA1F2]/20 hover:bg-[#1A91DA] hover:shadow-[#1DA1F2]/30'}`}
                >
                    {contactMethod === 'email' ? (
                        <>
                            Send Message
                            <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    ) : (
                        <>
                            Send Message
                            <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-3 mt-3 xs:gap-4">
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