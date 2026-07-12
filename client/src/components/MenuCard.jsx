import React from 'react';

const MenuCard = ({ item }) => {
    return (
        <article className="group grid h-full grid-cols-[7rem_1fr] overflow-hidden border border-[#B88A3D]/22 bg-[#141414] shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-colors hover:border-[#D4A84B]/55 sm:grid-cols-[9rem_1fr]">
            <div className="relative min-h-40 overflow-hidden bg-[radial-gradient(circle_at_40%_35%,rgba(212,168,75,0.18),transparent_30%),linear-gradient(135deg,#1A1A1A,#0E0E0E)]">
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover opacity-82 mix-blend-luminosity transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center px-3 text-center font-serif text-lg text-[#D4A84B]/70">
                        5 Spice Kitchen
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]/30" />
            </div>
            <div className="flex flex-col p-4 sm:p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                        <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#D4A84B]/75">{item.category}</p>
                        <h3 className="font-serif text-xl font-semibold leading-tight text-white">{item.name}</h3>
                    </div>
                    <span className="font-semibold text-[#D4A84B]">${item.price}</span>
                </div>
                {item.spiceLevel > 0 && (
                    <p className="mb-2 text-xs text-[#E53935]" aria-label={`Spice level ${item.spiceLevel}`}>
                        {'Spice '.repeat(item.spiceLevel).trim()}
                    </p>
                )}
                <p className="text-sm leading-6 text-white/58">{item.description}</p>
                <div className="mt-auto pt-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D4A84B]">Menu item</span>
                </div>
            </div>
        </article>
    );
};

export default MenuCard;
