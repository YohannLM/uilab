/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
const mix = require('laravel-mix');
const glob = require('glob');
const { setResourceRoot } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Configuration BrowserSync
 |--------------------------------------------------------------------------
 */

// Domain of your appserver
const proxyDomain =
  process.env.MIX_BS_PROXY_DOMAIN || 'appserver.uilab.internal';

// The domain of node contianer throught your proxy
const domain =
  process.env.MIX_BS_DOMAIN || 'bs.uilab.lndo.site';

// The port of proxy url will serve BS for
const port =
  process.env.MIX_BS_PORT || 80;

/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */
mix
  .setPublicPath('../public')
  .setResourceRoot('../../public/')
  .disableNotifications();

/*

/*
 |--------------------------------------------------------------------------
 | Browsersync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
  proxy: proxyDomain,
  socket: {
    domain: domain,
    port: port
  },
  files: ['../public/js/**/*.js', '../public/css/**/*.css',],
  open: false,
  logLevel: 'debug',
  logConnections: true,
});

/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */
mix
  .sass('src/scss/style.scss', 'css');

/*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
 */
mix
  .js('src/js/app.js', 'js');

