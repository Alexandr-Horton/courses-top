module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'courses-top.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'old-images.hb.ru-msk.vkcs.cloud',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config, options) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                override: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        });

        return config;
    },
};
