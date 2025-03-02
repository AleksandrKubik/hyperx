import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-6">
                {/* Mobile version */}
                <div className="flex flex-col md:hidden">
                    {/* Payment systems and Norton Security */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Image
                            src="/icons/payment_icons/visa/Size=24.svg"
                            alt="Visa"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/mastercard/Size=24.svg"
                            alt="Mastercard"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/amex/Size=24.svg"
                            alt="Amex"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/applepay/Size=24.svg"
                            alt="Apple Pay"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/googlepay/Size=24.svg"
                            alt="Google Pay"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/norton/Size=48.svg"
                            alt="Norton Security"
                            width={48}
                            height={48}
                            className="bg-white rounded-sm p-1"
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>

                    {/* Legal information */}
                    <div className="text-sm text-neutral-400 text-center">
                        <span>© 2025 HypeX. All rights reserved.</span>
                    </div>
                    {/* Links */}
                    <div className="flex justify-center text-center gap-2 mt-2">
                        <Link href="/terms" className="text-emerald-500 hover:text-emerald-400">
                            Terms Of Service
                        </Link>
                        <span>·</span>
                        <Link href="/privacy" className="text-emerald-500 hover:text-emerald-400">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                {/* Desktop version */}
                <div className="hidden md:flex justify-between items-center">
                    {/* Payment systems */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/icons/payment_icons/visa/Size=24.svg"
                            alt="Visa"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/mastercard/Size=24.svg"
                            alt="Mastercard"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/amex/Size=24.svg"
                            alt="Amex"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/applepay/Size=24.svg"
                            alt="Apple Pay"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <Image
                            src="/icons/payment_icons/googlepay/Size=24.svg"
                            alt="Google Pay"
                            width={24}
                            height={24}
                            loading="lazy"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>

                    {/* Legal information */}
                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                        <span>© 2025 HypeX. All rights reserved.</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        <Link href="/terms" className="text-emerald-500 hover:text-emerald-400">
                            Terms Of Service
                        </Link>
                        <span>·</span>
                        <Link href="/privacy" className="text-emerald-500 hover:text-emerald-400">
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Norton Security */}
                    <Image
                        src="/icons/norton/Size=48.svg"
                        alt="Norton Security"
                        width={48}
                        height={48}
                        className="bg-white rounded-sm p-1"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </footer>
    );
} 