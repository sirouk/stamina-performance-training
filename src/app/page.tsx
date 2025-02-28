import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import GroupClasses from '../components/GroupClasses';
import PrivateClasses from '../components/PrivateClasses';
import { registerServiceWorker } from './register-sw';

const Home = () => {
    useEffect(() => {
        registerServiceWorker();
    }, []);

    return (
        <>
            <HeroSection />
            <GroupClasses />
            <PrivateClasses />
        </>
    );
};

export default Home; 