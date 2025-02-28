import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat relative text-white">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="container-custom relative z-10 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 tracking-wider leading-tight">
                            <span className="text-red-600">Apex</span> Legends<br />
                            Performance Training
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
                            Train with professional players and elevate your game.
                            Master weapon recoil, movement techniques, and tactical decision-making.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/registration">
                                <a className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 uppercase font-bold tracking-wider inline-block text-center transition duration-300">
                                    Start Training Now
                                </a>
                            </Link>
                            <Link href="/programs">
                                <a className="border-2 border-white hover:border-red-600 hover:text-red-600 px-8 py-4 uppercase font-bold tracking-wider inline-block text-center transition duration-300">
                                    View Programs
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="aspect-w-4 aspect-h-5 relative">
                            <div className="absolute -right-10 top-0 bottom-0 w-full">
                                <div className="relative h-full">
                                    {/* Replace with actual Apex Legends character image */}
                                    <div className="h-full w-full bg-gradient-to-r from-black to-transparent absolute z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 