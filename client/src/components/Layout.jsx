import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { isComingSoonMode } from '../config/site';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-brand-cream dark:bg-brand-dark dark:text-gray-100 transition-colors duration-300 font-sans">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            {!isComingSoonMode && <Footer />}
        </div>
    );
};

export default Layout;
