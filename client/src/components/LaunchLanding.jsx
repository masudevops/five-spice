import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Utensils, Users } from 'lucide-react';
import { isGrandOpeningMode, LOGOS, OFFERINGS } from '../config/site';

const icons = [ShoppingBag, Utensils, Users];

const LaunchLanding = () => {
    return (
        <div className="flex flex-col bg-brand-cream dark:bg-brand-dark transition-colors duration-500">
            {isGrandOpeningMode && (
                <div className="bg-brand-green text-white py-3 px-4 text-center text-sm md:text-base font-medium relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 skew-x-12 transform -translate-x-full animate-shimmer"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Grand Opening! We're excited to welcome the community to 5 Spice Market & Kitchen.
                        <Link to="/market" className="underline hover:text-brand-gold transition-colors ml-2 font-bold">Visit Us Today</Link>
                    </span>
                </div>
            )}

            <section className="relative min-h-[88vh] flex items-center bg-brand-charcoal overflow-hidden text-brand-cream">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#1c1c1c_0%,#181818_48%,#242118_100%)]"></div>
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,rgba(248,245,239,0.85)_1px,transparent_0)] [background-size:28px_28px]"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent"></div>

                <div className="container mx-auto px-5 z-20 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-14 xl:gap-20">
                        <div className="animate-fade-in-up">
                            <span className="text-brand-gold font-bold tracking-[0.24em] uppercase mb-5 block text-xs md:text-sm">
                                Plano, Texas
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-brand-cream mb-7 leading-[1.05] max-w-3xl">
                                A New Home Is Coming to Plano, Texas.
                            </h1>
                            <p className="text-base md:text-xl text-white/68 mb-9 max-w-2xl leading-relaxed font-light">
                                Premium halal groceries and an authentic Bangladeshi restaurant, designed as one refined home for family, flavor, and everyday essentials.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9 max-w-3xl">
                                {OFFERINGS.map((offering, index) => {
                                    const Icon = icons[index];
                                    return (
                                        <div key={offering.title} className="border border-white/10 bg-white/[0.035] px-4 py-4">
                                            <Icon className="text-brand-gold mb-3" size={21} aria-hidden="true" />
                                            <span className="text-sm font-semibold text-brand-cream">{offering.shortTitle}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <Link to="/market" className="bg-brand-green hover:bg-brand-lightGreen text-white px-8 py-4 font-bold shadow-md hover:shadow-lg transition-all text-center">
                                    Shop Market
                                </Link>
                                <Link to="/kitchen" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 font-bold shadow-md hover:shadow-lg transition-all text-center">
                                    View Kitchen Menu
                                </Link>
                            </div>
                            <div className="inline-block bg-brand-gold/10 border border-brand-gold/35 px-6 py-3 text-brand-gold font-semibold tracking-wide">
                                Opening Early 2027, In Sha Allah
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center animate-fade-in-up delay-200">
                            <div className="relative w-full max-w-[560px] border border-white/10 bg-white/[0.025] p-4 md:p-6 shadow-2xl">
                                <img
                                    src={LOGOS.square}
                                    alt="5 Spice Market & Kitchen"
                                    className="w-full aspect-square object-contain"
                                />
                                <p className="mt-5 border-t border-white/10 pt-5 text-center text-sm md:text-base text-brand-gold font-serif italic">
                                    Authentic Flavors. Quality You Trust. Community We Care About.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-brand-cream dark:bg-brand-charcoal">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <span className="text-brand-gold font-bold tracking-[0.22em] uppercase text-xs">Five spices. One home.</span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-brand-charcoal dark:text-brand-cream leading-tight">
                            Curated essentials, prepared food, and community care under one roof.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                        {OFFERINGS.map((offering, index) => {
                            const Icon = icons[index];
                            const accentClass = index === 1
                                ? 'bg-brand-orange/10 dark:bg-brand-orange text-brand-orange dark:text-white'
                                : index === 2
                                    ? 'bg-brand-gold/15 dark:bg-brand-gold text-brand-gold dark:text-brand-charcoal'
                                    : 'bg-brand-green/10 dark:bg-brand-green text-brand-green dark:text-white';
                            const href = index === 0 ? '/market' : index === 1 ? '/kitchen' : '/about';
                            const linkText = index === 0 ? 'Explore Aisles' : index === 1 ? 'View Menu' : 'Our Story';

                            return (
                                <div key={offering.title} className="group p-8 bg-white dark:bg-white/[0.035] border border-brand-gold/15 dark:border-white/10 hover:border-brand-gold/40 transition-colors duration-300">
                                    <div className={`w-12 h-12 flex items-center justify-center mb-6 shadow-sm ${accentClass}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-3 group-hover:text-brand-green transition-colors">
                                        {index === 0 ? 'The Market' : index === 1 ? 'The Kitchen' : 'The Community'}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {offering.text}
                                    </p>
                                    <Link to={href} className="text-brand-green font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider">
                                        {linkText} <ArrowRight size={16} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LaunchLanding;
