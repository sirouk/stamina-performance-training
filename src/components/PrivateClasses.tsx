import React from 'react';
import Link from 'next/link';

const PrivateClasses = () => {
    return (
        <section id="private-coaching" className="bg-black py-20">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-4 tracking-wider">Private Coaching</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        One-on-one sessions with professional Apex Legends players to accelerate your improvement.
                        Choose the package that fits your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* STANDARD COACHING */}
                    <div className="bg-gray-900 border border-gray-800 p-8 relative overflow-hidden group hover:border-red-600 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-gradient-radial from-red-600/20 to-transparent rounded-full"></div>

                        <h3 className="text-3xl font-bold text-white uppercase mb-4 tracking-wider">STANDARD</h3>
                        <p className="text-gray-400 mb-6">
                            One-on-one coaching with pro players focused on improving your core mechanics and game understanding.
                        </p>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white font-semibold">Sessions</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    Choose 1-5 sessions
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white font-semibold">Duration</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    60 minutes each
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white font-semibold">VOD Review</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    Included
                                </span>
                            </div>
                        </div>

                        <ul className="mb-8 space-y-3">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Personalized training plan</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Mechanics assessment</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Legend-specific tips</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Gameplay feedback</span>
                            </li>
                        </ul>

                        <Link href="/coaching/standard">
                            <a className="block w-full bg-red-600 text-white text-center py-3 uppercase font-bold tracking-wider hover:bg-red-700 transition duration-300">
                                Book Standard Session
                            </a>
                        </Link>
                    </div>

                    {/* PREMIUM COACHING */}
                    <div className="bg-gray-900 border border-red-600 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-gradient-radial from-red-600/30 to-transparent rounded-full"></div>

                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase mb-4">Most Popular</div>

                        <h3 className="text-3xl font-bold text-white uppercase mb-4 tracking-wider">PREMIUM</h3>
                        <p className="text-gray-400 mb-6">
                            Comprehensive coaching package with a professional player designed to transform your gameplay and rank.
                        </p>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white font-semibold">Sessions</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    5 sessions package
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white font-semibold">Duration</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    90 minutes each
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white font-semibold">VOD Review</span>
                                <span className="text-white text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    Premium analysis
                                </span>
                            </div>
                        </div>

                        <ul className="mb-8 space-y-3">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">All Standard features</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Advanced strategy development</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Discord server access</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Custom sensitivity setup</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-400">Priority booking for future sessions</span>
                            </li>
                        </ul>

                        <Link href="/coaching/premium">
                            <a className="block w-full bg-red-600 text-white text-center py-3 uppercase font-bold tracking-wider hover:bg-red-700 transition duration-300">
                                Book Premium Package
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivateClasses; 