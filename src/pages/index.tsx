import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GroupClasses from '@/components/GroupClasses';
import PrivateClasses from '@/components/PrivateClasses';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <GroupClasses />
            <PrivateClasses />
            <Footer />
        </>
    );
} 