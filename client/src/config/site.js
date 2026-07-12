export const SITE_MODE = import.meta.env.VITE_APP_SITE_MODE || 'live';

export const isComingSoonMode = SITE_MODE === 'coming_soon';
export const isGrandOpeningMode = SITE_MODE === 'grand_opening';

export const LOGOS = {
    square: '/brand-logo-square.png',
    wide: '/brand-logo-wide.png',
};

export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/5SpiceMarket',
    instagramUrl: null,
    instagramHandle: '@5SpiceMarket',
    email: 'info@5spicemarket.com',
};

export const OFFERINGS = [
    {
        title: 'Premium Halal Market',
        shortTitle: 'Halal Market',
        text: 'Premium zabiha halal meat, fresh fish, farm-fresh produce, and carefully selected groceries—all under one roof.',
    },
    {
        title: 'Authentic Bangladeshi Restaurant',
        shortTitle: 'Bangladeshi Restaurant',
        text: 'Authentic Bangladeshi cuisine prepared with traditional recipes and the flavors your family remembers.',
    },
    {
        title: 'Serving the DFW Community',
        shortTitle: 'DFW Community',
        text: 'Proudly serving the Bangladeshi, Pakistani, Indian, Middle Eastern, and Greater DFW communities.',
    },
];
