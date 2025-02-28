import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative text-white min-h-[650px] overflow-hidden bg-background">
            {/* Dark background layer */}
            <div className="absolute inset-0 bg-background z-0"></div>

            {/* Hero image with fade effect - positioned to the right */}
            <div className="absolute inset-0 z-10 flex justify-end items-center">
                <div className="relative w-full md:w-3/5 h-full">
                    {/* Using the webp image file */}
                    <div className="absolute top-0 right-0 w-full h-full">
                        <Image
                            src="/images/apex-legends-bg.webp"
                            alt="Apex Legends Character"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="right center"
                            priority={true}
                            className="opacity-80"
                        />
                    </div>

                    {/* Gradient overlays for fade effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
                </div>
            </div>

            {/* Content layer - left aligned */}
            <div className="container-custom relative z-20 py-24 md:py-32">
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight">
                        <span className="text-red-600">APEX</span> LEGENDS<br />
                        PERFORMANCE<br />
                        TRAINING
                    </h1>
                    <p className="text-gray-300 my-6 max-w-md">
                        Train with professional players and elevate your game.
                        Master weapon recoil, movement techniques, and tactical decision-making.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                        <Link href="/registration">
                            <a className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 uppercase font-bold tracking-wider inline-block text-center transition duration-300">
                                START TRAINING NOW
                            </a>
                        </Link>
                        <Link href="/programs">
                            <a className="border-2 border-white hover:border-red-600 hover:text-red-600 px-8 py-4 uppercase font-bold tracking-wider inline-block text-center transition duration-300">
                                VIEW PROGRAMS
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 