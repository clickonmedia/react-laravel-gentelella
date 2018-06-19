let mix = require('laravel-mix');

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

// react mix js
mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .styles([
    	'resources/assets/css/semantic-ui.css',
    	'resources/assets/css/animate.css',
    	'resources/assets/css/react-gentelella.css',
	    'resources/assets/css/daterange.css'
    ],'public/css/all.css');

// web mix js
mix.styles([
	'resources/web/css/dropzone.min.css',
    'resources/web/css/basic.min.css',
    'resources/web/css/custom.css'
], 'public/css/web.css');

mix.scripts([
	'resources/web/js/jquery-3.3.1.min.js',
	'resources/web/js/dropzone.min.js',
	'resources/web/js/dropzone-amd-module.min.js',
	'resources/web/js/dropzone-config.js'
	], 'public/js/web.js');
