const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPWA = require('next-pwa');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPWA(
    {
        pwa: {
            dest: 'public',
        },
        distDir: 'build',
    },
    withPlugins([[withSass(), withImages()]])
);
