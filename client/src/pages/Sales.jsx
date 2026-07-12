import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { BadgePercent } from 'lucide-react';

const saleProducts = [
    { id: 101, name: 'Shan Chicken Tikka Masala', category: 'Spices', price: 2.99, salePrice: 1.99, onSale: true, popular: true },
    { id: 102, name: 'Premium Basmati Rice 20lb', category: 'Rice', price: 29.99, salePrice: 24.99, onSale: true },
    { id: 103, name: 'Halal Lamb Chops', category: 'Meat', price: 12.99, salePrice: 9.99, onSale: true, popular: true },
    { id: 104, name: 'Fresh Mangoes Box', category: 'Produce', price: 15.99, salePrice: 11.99, onSale: true },
    { id: 105, name: 'Frozen Samosas 50pc', category: 'Frozen', price: 25.00, salePrice: 19.99, onSale: true },
    { id: 106, name: 'National Mixed Pickle', category: 'Spices', price: 4.99, salePrice: 3.50, onSale: true },
];

const categories = ['All', 'Meat', 'Rice', 'Spices', 'Produce', 'Frozen'];

const Sales = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredProducts = activeCategory === 'All' ? saleProducts : saleProducts.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-[#F0EAD6]">
            <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,57,53,0.14),transparent_34%),linear-gradient(135deg,#0E0E0E,#161616)]" />
                <div className="relative mx-auto max-w-7xl">
                    <BadgePercent className="mb-5 text-[#D4A84B]" size={34} strokeWidth={1.4} />
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D4A84B]">Weekly Specials</p>
                    <h1 className="mt-5 font-serif text-5xl font-bold text-white md:text-6xl">Browse launch specials.</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                        A polished preview of featured deals. Final weekly pricing and availability will be confirmed in store.
                    </p>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex gap-2 overflow-x-auto border-y border-[#B88A3D]/18 py-5">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === cat ? 'border-[#D4A84B] bg-[#D4A84B] text-[#0E0E0E]' : 'border-[#B88A3D]/25 text-white/65 hover:border-[#D4A84B] hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sales;
