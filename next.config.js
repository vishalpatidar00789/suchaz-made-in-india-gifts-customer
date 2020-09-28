const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')
runtimeCaching[0].handler = 'StaleWhileRevalidate'

const settings = {
  pwa: {
    dest: 'public',
    register: false,
    skipWaiting: false,
    runtimeCaching
  },
  env: {
    API_URL: 'http://localhost:3005/apiv2',
    PAYTM_URL: 'https://securegw-stage.paytm.in/order/process', 
    // https://securegw-stage.paytm.in/order/process, https://securegw.paytm.in/order/process
  },
  distDir: 'build'
};

module.exports = withPWA(settings, withPlugins([[withSass(), withImages()]]));

