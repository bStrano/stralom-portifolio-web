const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

module.exports = withNextIntl({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'stralom-portifolio.s3.us-east-2.amazonaws.com',
            },
        ],
    },
    // Other Next.js configuration ...
});
