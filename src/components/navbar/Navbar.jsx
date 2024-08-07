"use client";

import Link from 'next/link'
import Links from './links/Links';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [fade, setFade] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
                // setFade(false);
            } else {
                setIsScrolled(false);
            }
        };

    const handleFade = () => {
        if (window.scrollY > 0) {
            setTimeout(() => setFade(true),5000);
            }
        };

    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll', handleFade);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        // window.removeEventListener('scroll', handleFade);
    };
}, []);
    
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <Link className="hidden md:block text-lg font-bold" href="/">Victor</Link>
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                <Links />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;