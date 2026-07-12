import React, { useEffect, useMemo, useState } from 'react';
import MenuCard from '../components/MenuCard';
import { FlameKindling, Utensils } from 'lucide-react';

const categories = ['Bangladeshi', 'Pakistani', 'Indian', 'Arab', 'Grill', 'Drinks'];

const Kitchen = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Bangladeshi');

    useEffect(() => {
        fetch('http://localhost:5001/api/menu')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching menu:', err);
                setLoading(false);
            });
    }, []);

    const groupedMenu = useMemo(() => categories.reduce((acc, cat) => {
        const items = menuItems.filter(item => item.category === cat || (cat === 'Grill' && item.category === 'Arab'));
        if (items.length > 0) acc[cat] = items;
        return acc;
    }, {}), [menuItems]);
    const filteredItems = groupedMenu[activeCategory] || [];

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-[#F0EAD6]">
            <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,80,10,0.14),transparent_36%),linear-gradient(135deg,#0E0E0E,#161616)]" />
                <div className="relative mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D4A84B]">Authentic Bangladeshi Restaurant</p>
                    <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                        <div>
                            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">The 5 Spice Kitchen.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                                Traditional recipes, family flavors, biryani, grills, curries, snacks, and drinks prepared for the table your family remembers.
                            </p>
                        </div>
                        <div className="border border-[#B88A3D]/30 bg-[#141414]/82 p-6">
                            <FlameKindling className="mb-4 text-[#D4A84B]" size={28} strokeWidth={1.4} />
                            <p className="font-serif text-2xl font-semibold text-white">Browse-first menu preview</p>
                            <p className="mt-3 text-sm leading-7 text-white/58">Online ordering is not enabled yet. Use the menu to explore what is coming to Plano.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="sticky top-[76px] z-30 mb-9 border-y border-[#B88A3D]/18 bg-[#0E0E0E]/92 py-4 backdrop-blur-xl">
                        <div className="flex gap-2 overflow-x-auto">
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
                        <div className="flex flex-col items-center py-20 text-center">
                            <div className="mb-5 h-12 w-12 animate-spin rounded-full border-2 border-[#B88A3D]/20 border-t-[#D4A84B]" />
                            <p className="text-white/62">Preparing the menu...</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 flex items-center gap-3">
                                <Utensils className="text-[#D4A84B]" size={24} />
                                <h2 className="font-serif text-3xl font-semibold text-white">{activeCategory} Specialties</h2>
                            </div>

                            {filteredItems.length > 0 ? (
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
                                    {filteredItems.map(item => (
                                        <MenuCard key={item.id} item={{ ...item, spiceLevel: item.category === 'Entrees' ? 2 : 0 }} />
                                    ))}
                                </div>
                            ) : (
                                <div className="border border-[#B88A3D]/22 bg-[#141414] px-6 py-16 text-center">
                                    <p className="font-serif text-3xl font-semibold text-white">No items listed yet.</p>
                                    <p className="mt-3 text-white/58">Please check back as the launch menu develops.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Kitchen;
