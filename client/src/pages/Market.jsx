import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const categories = ['All', 'Spices', 'Rice', 'Meat', 'Produce', 'Frozen', 'Bakery'];

const Market = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    const filteredProducts = useMemo(() => {
        let result = products;
        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return result;
    }, [activeCategory, searchQuery, products]);

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-[#F0EAD6]">
            <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,106,63,0.18),transparent_34%),linear-gradient(135deg,#0E0E0E,#161616)]" />
                <div className="relative mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D4A84B]">Premium Halal Market</p>
                    <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                        <div>
                            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">Browse the market.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                                Fresh produce, fresh fish, premium zabiha halal meat, spices, rice, frozen essentials, and specialty groceries for every family kitchen.
                            </p>
                        </div>
                        <div className="relative">
                            <label htmlFor="market-search" className="sr-only">Search products</label>
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A84B]" size={20} />
                            <input
                                id="market-search"
                                type="text"
                                placeholder="Search products..."
                                className="w-full border border-[#B88A3D]/35 bg-[#141414]/90 py-4 pl-12 pr-4 text-white placeholder:text-white/38 outline-none transition-colors focus:border-[#D4A84B]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-col gap-4 border-y border-[#B88A3D]/18 py-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                            <SlidersHorizontal size={18} className="text-[#D4A84B]" />
                            Categories
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === cat
                                        ? 'border-[#D4A84B] bg-[#D4A84B] text-[#0E0E0E]'
                                        : 'border-[#B88A3D]/25 text-white/65 hover:border-[#D4A84B] hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                <div key={n} className="h-80 animate-pulse border border-[#B88A3D]/15 bg-[#141414]" />
                            ))}
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="border border-[#B88A3D]/22 bg-[#141414] px-6 py-16 text-center">
                            <Search size={42} className="mx-auto mb-4 text-[#D4A84B]" />
                            <p className="font-serif text-3xl font-semibold text-white">No products found.</p>
                            <p className="mt-3 text-white/58">Try a different search or category.</p>
                            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-6 border border-[#B88A3D]/45 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#D4A84B]">
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Market;
