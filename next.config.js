const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    webpack(config, options) {
        const {isServer} = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'remoteApp',
                remotes: {},
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './RemoteApp': './pages/index.tsx',
                    './About': './src/components/about/About.tsx',
                    './Contact': './src/components/contact/Contact.tsx',
                },
                shared: {
                    // whatever else
                },
            })
        );

        return config;
    },
}

module.exports = nextConfig
