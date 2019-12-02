const mix = require('laravel-mix');
require('laravel-mix-alias');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.babelConfig({
    presets: ["@vue/app"]
});

mix.alias({
    '@': 'resources/js/',
    '@component':'resources/js/components',
    '@page': 'resources/js/pages/',
    '@mixin': 'resources/js/mixins/',
    '@api': 'resources/js/api/',
    '@config': 'resources/js/config/',
    '@mock': 'resources/js/api-mock/',
    '@asset': 'resources/js/assets/',
    '@i18n': 'resources/js/i18n',
    '@router': 'resources/js/router/',
    '@store': 'resources/js/store/',
    '@util': 'resources/js/utils'
});
