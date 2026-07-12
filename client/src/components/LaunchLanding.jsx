import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, HandHeart, PackageCheck, ShoppingBasket, Truck, Utensils, Users } from 'lucide-react';
import { isGrandOpeningMode, LOGOS, OFFERINGS } from '../config/site';

const primaryPaths = [
    {
        title: 'Premium Halal Market',
        text: 'Browse fresh fish, zabiha halal meat, farm-fresh produce, spices, rice, frozen favorites, and specialty groceries.',
        href: '/market',
        action: 'Explore Market',
        icon: ShoppingBasket,
    },
    {
        title: 'Authentic Bangladeshi Restaurant',
        text: 'Explore traditional Bangladeshi dishes, family-style meals, grills, drinks, and comforting flavors made with care.',
        href: '/kitchen',
        action: 'View Kitchen Menu',
        icon: Utensils,
    },
];

const serviceCards = [
    { title: 'Weekly Specials', text: 'Browse launch offers and seasonal grocery features.', href: '/sales', icon: PackageCheck },
    { title: 'Event Catering', text: 'Plan family gatherings, office meals, weddings, and community events.', href: '/catering', icon: HandHeart },
    { title: 'Pickup & Delivery', text: 'Learn how pickup and local delivery will work after opening.', href: '/pickup', icon: Truck },
];

const LaunchLanding = () => {
    return (
        <div className="relative overflow-hidden bg-[#0E0E0E] text-[#F0EAD6]">
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,138,61,0.12),transparent_34%),linear-gradient(135deg,#0E0E0E_0%,#161616_56%,#0E0E0E_100%)]" />
            <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.75)_1px,transparent_0)] [background-size:22px_22px]" />

            {isGrandOpeningMode && (
                <div className="relative z-10 border-b border-[#B88A3D]/25 bg-[#2D6A3F] px-4 py-3 text-center text-sm font-semibold text-white">
                    Grand Opening: welcome to 5 Spice Market & Kitchen in Plano.
                    <Link to="/contact" className="ml-2 underline decoration-white/50 underline-offset-4 hover:text-[#D4A84B]">Plan your visit</Link>
                </div>
            )}

            <section className="relative z-10 px-5 py-16 sm:px-8 md:py-20 lg:px-12">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
                    <div className="animate-fade-in-up">
                        <img src={LOGOS.wide} alt="5 Spice Market & Kitchen official logo" className="mb-8 h-auto w-64 object-contain sm:w-80" />
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D4A84B]">Plano, Texas</p>
                        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.98] text-white sm:text-6xl xl:text-7xl">
                            Premium halal grocery and Bangladeshi restaurant under one roof.
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                            A refined home for everyday groceries, fresh fish, zabiha halal meat, family meals, and the flavors the Greater DFW community remembers.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/market" className="bg-[#2D6A3F] px-7 py-4 text-center font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#245936]">
                                Explore Market
                            </Link>
                            <Link to="/kitchen" className="border border-[#B88A3D]/50 px-7 py-4 text-center font-bold uppercase tracking-[0.16em] text-[#F0EAD6] transition-colors hover:border-[#D4A84B] hover:text-[#D4A84B]">
                                View Kitchen Menu
                            </Link>
                        </div>
                        <div className="mt-7 inline-flex items-center gap-3 border border-[#B88A3D]/35 bg-[#1A1A1A]/70 px-5 py-3 text-[#D4A84B]">
                            <CalendarDays size={20} aria-hidden="true" />
                            <span className="font-semibold tracking-wide">Opening Early 2027, In Sha Allah</span>
                        </div>
                    </div>

                    <div className="grid gap-4 animate-fade-in-up">
                        {primaryPaths.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link key={item.title} to={item.href} className="group border border-[#B88A3D]/28 bg-[#1A1A1A]/82 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.25)] transition-colors hover:border-[#D4A84B]/65">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#B88A3D]/40 text-[#D4A84B]">
                                        <Icon size={26} strokeWidth={1.4} />
                                    </div>
                                    <h2 className="font-serif text-3xl font-semibold text-white">{item.title}</h2>
                                    <p className="mt-4 text-sm leading-7 text-white/64">{item.text}</p>
                                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#D4A84B]">
                                        {item.action} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-5 py-14 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A84B]">Five spices. One home.</p>
                        <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
                            Built for grocery runs, family meals, and community gatherings.
                        </h2>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {OFFERINGS.map((offering, index) => {
                            const icons = [ShoppingBasket, Utensils, Users];
                            const Icon = icons[index];
                            return (
                                <article key={offering.title} className="border border-[#B88A3D]/25 bg-[#141414]/86 p-7">
                                    <Icon className="mb-5 text-[#D4A84B]" size={30} strokeWidth={1.35} />
                                    <h3 className="font-serif text-2xl font-semibold text-white">{offering.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-white/62">{offering.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-5 pb-20 pt-8 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-5 md:grid-cols-3">
                        {serviceCards.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link key={service.title} to={service.href} className="group border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#D4A84B]/50">
                                    <Icon className="mb-4 text-[#D4A84B]" size={27} strokeWidth={1.4} />
                                    <h3 className="font-serif text-2xl font-semibold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-white/58">{service.text}</p>
                                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4A84B]">
                                        Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LaunchLanding;
