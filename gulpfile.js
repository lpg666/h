var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.styles([
        'admin/bootstrap.min.css',
        'admin/font-awesome.min93e3.css',
        'admin/animate.min.css',
        'admin/style.min.css',
        'admin/login.min.css',
        'admin/custom.css',
        'admin/index.css'
    ], 'public/admin/css');

    mix.scripts([
        'jquery.min.js',
        'bootstrap.min.js',
        'jquery.metisMenu.js',
        'layer.min.js',
        'jquery.slimscroll.min.js',
        'hplus.min.js',
        'contabs.min.js',
        'pace.min.js',
        'icheck.min.js'
    ], 'public/admin/js/app.js');

    mix.version(['admin/css/all.css','admin/js/app.js']);
});
