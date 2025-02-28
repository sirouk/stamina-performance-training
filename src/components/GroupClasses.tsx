import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ClassCard = ({ title, icon, description, link }: {
    title: string;
    icon: string;
    description: string;
    link: string;
}) => {
    return (
        <div className="flex flex-col items-center p-6 transition-transform hover:scale-105">
            <div className="bg-black rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 border-2 border-primary">
                <div className="text-white text-2xl">{icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-center text-gray-600 mb-4">{description}</p>
            <Link href={link}>
                <a className="text-primary hover:underline">
                    Learn more
                </a>
            </Link>
        </div>
    );
};

const GroupClasses = () => {
    return (
        <section id="training-programs" className="bg-gray-dark py-20">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-4 tracking-wider">Training Programs</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Select the training program that matches your skill level and goals.
                        Each program is designed by professional Apex Legends players.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Program 1 */}
                    <div className="bg-black border border-gray-800 group hover:border-red-600 transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-red-600 text-white text-sm px-3 py-1 uppercase font-bold">Beginner</span>
                            </div>
                            {/* Image Placeholder - Replace with actual image */}
                            <div className="h-full w-full bg-gray-800"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">Combat Basics</h3>
                            <ul className="text-gray-400 mb-6 space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Weapon recoil control
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Basic movement techniques
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Legend selection guidance
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Game sense fundamentals
                                </li>
                            </ul>
                            <Link href="/programs/combat-basics">
                                <a className="block w-full bg-transparent border border-red-600 text-red-600 text-center py-3 uppercase font-bold tracking-wider hover:bg-red-600 hover:text-white transition duration-300">
                                    Select Program
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* Program 2 */}
                    <div className="bg-black border border-gray-800 group hover:border-red-600 transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-red-600 text-white text-sm px-3 py-1 uppercase font-bold">Intermediate</span>
                            </div>
                            {/* Image Placeholder - Replace with actual image */}
                            <div className="h-full w-full bg-gray-800"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">Tactical Mastery</h3>
                            <ul className="text-gray-400 mb-6 space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Advanced positioning
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Team communication
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Combat decision making
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Advanced movement techniques
                                </li>
                            </ul>
                            <Link href="/programs/tactical-mastery">
                                <a className="block w-full bg-transparent border border-red-600 text-red-600 text-center py-3 uppercase font-bold tracking-wider hover:bg-red-600 hover:text-white transition duration-300">
                                    Select Program
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* Program 3 */}
                    <div className="bg-black border border-gray-800 group hover:border-red-600 transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-red-600 text-white text-sm px-3 py-1 uppercase font-bold">Advanced</span>
                            </div>
                            {/* Image Placeholder - Replace with actual image */}
                            <div className="h-full w-full bg-gray-800"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">Predator Elite</h3>
                            <ul className="text-gray-400 mb-6 space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Meta strategies & team comps
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Pro-level rotations
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Ranked & tournament strategy
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Advanced aim techniques
                                </li>
                            </ul>
                            <Link href="/programs/predator-elite">
                                <a className="block w-full bg-transparent border border-red-600 text-red-600 text-center py-3 uppercase font-bold tracking-wider hover:bg-red-600 hover:text-white transition duration-300">
                                    Select Program
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GroupClasses; 