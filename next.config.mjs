/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'static-cdn.jtvnw.net',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'avatars.steamstatic.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
