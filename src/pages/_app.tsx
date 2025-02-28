import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Register service worker
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(
                    function (registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);
                    },
                    function (error) {
                        console.log('Service Worker registration failed: ', error);
                    }
                );
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Stamina Performance Training</title>
                <meta name="description" content="Professional Apex Legends coaching with group and private classes" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#FF0000" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp 