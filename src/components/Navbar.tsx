import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black py-4 border-b border-gray-800">
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <a className="flex items-center">
                        <div className="relative w-40 h-10">
                            <span className="font-bold text-2xl text-white">STAMINA</span>
                        </div>
                    </a>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <a href="#"
                        className="text-white hover:text-red-600 transition duration-300 uppercase font-bold tracking-wider">
                        Home
                    </a>
                    <a href="#training-programs"
                        className="text-white hover:text-red-600 transition duration-300 uppercase font-bold tracking-wider">
                        Programs
                    </a>
                    <a href="#private-coaching"
                        className="text-white hover:text-red-600 transition duration-300 uppercase font-bold tracking-wider">
                        Coaching
                    </a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="#private-coaching"
                        className="bg-red-600 text-white px-6 py-2 uppercase font-bold tracking-wider hover:bg-red-700 transition duration-300">
                        Book Now
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black py-2 px-4 mt-2">
                    <div className="flex flex-col space-y-4">
                        <a href="#"
                            className="text-white hover:text-red-600 transition duration-300 uppercase font-bold"
                            onClick={() => setIsMenuOpen(false)}>
                            Home
                        </a>
                        <a href="#training-programs"
                            className="text-white hover:text-red-600 transition duration-300 uppercase font-bold"
                            onClick={() => setIsMenuOpen(false)}>
                            Programs
                        </a>
                        <a href="#private-coaching"
                            className="text-white hover:text-red-600 transition duration-300 uppercase font-bold"
                            onClick={() => setIsMenuOpen(false)}>
                            Coaching
                        </a>
                        <a href="#private-coaching"
                            className="bg-red-600 text-white px-4 py-2 rounded text-center uppercase font-bold hover:bg-red-700 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}>
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 