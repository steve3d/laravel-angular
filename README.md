<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel + Angular

As Angular 15 will deprecate `deployUrl` option, now this is an example of use `@angular-builders/custom-webpack` to archive the exact same result.


- First of all, you need set a output path, this example set to `public/bundles`.
- Then you need a View Composer (in ViewProvider.php), catch all scripts/styles from `public/bundles/index.html`, and pass it to `layout.blade`
- In `layout.blade`, you need to add `bundles/` to all scripts and styles, and set `base` element's href to `<base href="<?=url('/')?>/">`. last slash is important.
- then in `extra-webpack.config.js` set `publicPath` to  `bundles/`,
- set the layout route as in `web.php`

Then all done! Enjoy the old behavior with much more control of webpack.

