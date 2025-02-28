import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Column 1 - About */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold uppercase mb-2">STAMINA</h3>
                            <p className="text-gray-400 text-sm">
                                Professional Apex Legends coaching and training. Elevate your gameplay and reach your competitive potential.
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://twitter.com/staminatraining" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="https://twitch.tv/staminatraining" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                                </svg>
                            </a>
                            <a href="https://discord.gg/staminatraining" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com/staminatraining" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Programs */}
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b border-gray-800 pb-2">Programs</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/programs/combat-basics">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Combat Basics</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/tactical-mastery">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Tactical Mastery</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/predator-elite">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Predator Elite</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coaching/standard">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Standard Coaching</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coaching/premium">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Premium Coaching</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Resources */}
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b border-gray-800 pb-2">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Strategy Guides</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Training Tools</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">FAQ</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coaches">
                                    <a className="text-gray-400 hover:text-red-600 transition-colors">Our Coaches</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b border-gray-800 pb-2">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:info@staminatraining.com" className="text-gray-400 hover:text-red-600 transition-colors">
                                    info@staminatraining.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="text-gray-400">
                                    Discord: StaminaTraining
                                </span>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className="inline-block bg-red-600 text-white px-4 py-2 mt-4 uppercase font-bold text-sm hover:bg-red-700 transition-colors">
                                        Send Message
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-black border-t border-gray-800 py-6">
                <div className="container-custom text-center text-sm text-gray-500">
                    <div className="flex flex-col md:flex-row md:justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Stamina Performance Training. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy-policy">
                                <a className="text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</a>
                            </Link>
                            <Link href="/terms-of-service">
                                <a className="text-gray-500 hover:text-gray-400 transition-colors">Terms of Service</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 