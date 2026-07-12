import React from 'react';
import { Facebook, Instagram, ShoppingBag, Utensils, Users } from 'lucide-react';
import { LOGOS, OFFERINGS, SOCIAL_LINKS } from '../config/site';

const icons = [ShoppingBag, Utensils, Users];

const ComingSoonLanding = () => {
    return (
        <section className="min-h-svh bg-brand-charcoal flex items-center justify-center px-4 py-4 sm:py-5 md:p-5 relative overflow-hidden text-brand-cream">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c1c1c_0%,#171717_58%,#211f18_100%)]"></div>
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(248,245,239,0.8)_1px,transparent_0)] [background-size:30px_30px]"></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
                <img
                    src={LOGOS.wide}
                    alt="5 Spice Market & Kitchen"
                    className="w-[min(58vw,300px)] sm:w-[315px] lg:w-[360px] xl:w-[380px] h-auto object-contain mb-2.5"
                />

                <div className="h-px w-16 bg-brand-gold/55 mb-2.5"></div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.8rem] font-bold text-brand-cream leading-[1.02] max-w-6xl mb-2 sm:mb-2.5">
                    A New Home Is Coming to Plano, Texas.
                </h1>

                <p className="text-brand-gold/85 text-xs sm:text-sm md:text-base mb-2.5 sm:mb-3">
                    Named after "পাঁচফোড়ন" — the traditional five-spice blend at the heart of every South Asian kitchen.
                </p>

                <p className="text-white/68 text-sm sm:text-base md:text-lg tracking-wide mb-3 sm:mb-3.5">
                    Premium Halal Grocery &bull; Fresh Produce &bull; Fresh Fish &bull; Authentic Bangladeshi Restaurant
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-3 w-full max-w-5xl mb-3 sm:mb-3.5">
                    {OFFERINGS.map((offering, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={offering.title} className="border border-white/10 bg-white/[0.035] backdrop-blur-sm px-4 py-3 md:px-4 md:py-3 text-left">
                                <Icon className="text-brand-gold mb-1.5" size={18} aria-hidden="true" />
                                <h2 className="text-brand-cream font-semibold text-sm md:text-[0.9rem] mb-1">{offering.title}</h2>
                                <p className="text-white/62 text-xs md:text-[0.78rem] leading-relaxed">{offering.text}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="inline-flex items-center justify-center bg-brand-gold/10 border border-brand-gold/35 px-5 sm:px-6 py-2 text-brand-gold font-semibold tracking-wide text-sm md:text-base">
                        Opening Early 2027, In Sha Allah
                    </div>
                    <p className="text-white/58 text-xs sm:text-sm tracking-wide">
                        Follow our journey to opening day.
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="ml-2 text-brand-gold hover:text-brand-cream transition-colors">
                            {SOCIAL_LINKS.email}
                        </a>
                    </p>
                    <div className="flex items-center gap-2" aria-label="5 Spice Market social links">
                        <a
                            href={SOCIAL_LINKS.facebook}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="5 Spice Market on Facebook"
                            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] text-brand-cream hover:border-brand-gold hover:text-brand-gold transition-colors"
                        >
                            <Facebook size={19} />
                        </a>
                        <a
                            href="#instagram-url-to-confirm"
                            aria-label={`Instagram ${SOCIAL_LINKS.instagramHandle} profile URL to be confirmed`}
                            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] text-brand-cream hover:border-brand-gold hover:text-brand-gold transition-colors"
                        >
                            <Instagram size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoonLanding;
