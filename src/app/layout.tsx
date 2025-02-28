import '../styles/globals.css'
import { Navbar, Footer } from '../components'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'STAMINA - Apex Legends Performance Training',
    description: 'Professional Apex Legends coaching and training to improve your skills and dominate the arena.',
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <meta name="theme-color" content="#000000" />
            </head>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
} 