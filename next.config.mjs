/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizePackageImports: ['@heroicons/react'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 24000000,
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        commons: {
                            name: 'commons',
                            chunks: 'all',
                            minChunks: 2,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )[1];
                                return `npm.${packageName.replace('@', '')}`;
                            },
                            chunks: 'all',
                            minChunks: 1,
                        },
                    },
                },
            };
        }
        return config;
    },
}

export default nextConfig; 