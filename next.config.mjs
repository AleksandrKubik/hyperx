/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizePackageImports: ['@heroicons/react'],
        nodeCompat: true,
    },
    webpack: (config) => {
        config.optimization = {
            ...config.optimization,
            minimize: true,
            moduleIds: 'deterministic',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `vendor.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        };
        return config;
    },
}

export default nextConfig; 