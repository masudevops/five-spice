/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: 'var(--color-brand-green)',
                    lightGreen: '#3f7f51',
                    gold: 'var(--color-accent-gold)',
                    cream: 'var(--color-text-primary)',
                    charcoal: 'var(--color-background)',
                    dark: 'var(--color-background)',
                    orange: 'var(--color-brand-orange)',
                    red: 'var(--color-brand-orange)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // For Headings
            },
            backgroundImage: {
                'hero-pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')", // Subtle pattern placeholder
            }
        },
    },
    plugins: [],
}
