/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['via.placeholder.com'], // Add your image domains here
    },
}

module.exports = nextConfig 