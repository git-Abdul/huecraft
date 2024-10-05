/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        images: {
            unoptimized: true // Disables Next.js image optimization for all images.
        }
    }
};

module.exports = nextConfig;
