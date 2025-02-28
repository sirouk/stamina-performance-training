/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF0000', // Red accent color
                secondary: '#000000', // Black
                background: '#101010', // Dark background
                'gray-dark': '#1A1A1A',
                'gray-light': '#2A2A2A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/images/apex-legends-bg.jpg')",
            }
        },
    },
    plugins: [],
} 