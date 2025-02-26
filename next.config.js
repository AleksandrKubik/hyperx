/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
        unoptimized: true,
    },
    experimental: {
        turbo: {},
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 70000,
            }
        }
        return config
    },
    unstable_runtimeJS: true,
    async headers() {
        return [
            {
                source: '/services/x-boost',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, must-revalidate',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;