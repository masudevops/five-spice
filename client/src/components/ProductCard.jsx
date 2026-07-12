import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden border border-[#B88A3D]/22 bg-[#141414] shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-colors hover:border-[#D4A84B]/55">
            <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(212,168,75,0.18),transparent_28%),linear-gradient(135deg,#1A1A1A,#0E0E0E)]">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover opacity-82 mix-blend-luminosity transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center font-serif text-2xl text-[#D4A84B]/70">
                        5 Spice Market
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {product.onSale && (
                        <span className="bg-[#E53935] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white">
                            Sale
                        </span>
                    )}
                    {product.popular && (
                        <span className="bg-[#D4A84B] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#0E0E0E]">
                            Popular
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D4A84B]/80">{product.category}</span>
                    <span className="text-right font-semibold text-[#F0EAD6]">
                        {product.onSale ? (
                            <span className="flex flex-col items-end leading-tight">
                                <span className="text-xs text-white/35 line-through">${product.price.toFixed(2)}</span>
                                <span className="text-[#E53935]">${product.salePrice.toFixed(2)}</span>
                            </span>
                        ) : (
                            `$${product.price.toFixed(2)}`
                        )}
                    </span>
                </div>
                <h3 className="font-serif text-xl font-semibold leading-tight text-white" title={product.name}>{product.name}</h3>
                <div className="mt-auto pt-5">
                    <button type="button" className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[#B88A3D]/35 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#D4A84B] transition-colors hover:border-[#D4A84B] hover:text-white">
                        View Details <ArrowRight size={15} />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
