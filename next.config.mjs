/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ALPHA_VINTAGE : 'DG0M74JBNY6QLNDZ'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
};

export default nextConfig;
