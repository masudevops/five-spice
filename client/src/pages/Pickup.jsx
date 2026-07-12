import React from 'react';
import { Clock, PackageCheck, ShoppingBag, Truck } from 'lucide-react';

const steps = [
    { title: 'Browse', text: 'Explore groceries and kitchen menu previews before visiting.', icon: ShoppingBag },
    { title: 'Request', text: 'Pickup and delivery workflows will be confirmed closer to opening.', icon: Clock },
    { title: 'Collect', text: 'Orders will be carefully prepared for pickup or local delivery.', icon: Truck },
];

const Pickup = () => {
    return (
        <div className="min-h-screen bg-[#0E0E0E] text-[#F0EAD6]">
            <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,106,63,0.16),transparent_34%),linear-gradient(135deg,#0E0E0E,#161616)]" />
                <div className="relative mx-auto max-w-7xl">
                    <PackageCheck className="mb-5 text-[#D4A84B]" size={34} strokeWidth={1.4} />
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D4A84B]">Pickup & Delivery</p>
                    <h1 className="mt-5 font-serif text-5xl font-bold text-white md:text-6xl">Designed for convenient family meals.</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                        Pickup and delivery details will be finalized as opening approaches. For now, browse what is coming and plan your first visit.
                    </p>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <article key={step.title} className="border border-[#B88A3D]/25 bg-[#141414] p-7 text-center">
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#B88A3D]/40 text-[#D4A84B]">
                                    <Icon size={28} strokeWidth={1.4} />
                                </div>
                                <h2 className="font-serif text-3xl font-semibold text-white">{step.title}</h2>
                                <p className="mt-4 leading-7 text-white/62">{step.text}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Pickup;
