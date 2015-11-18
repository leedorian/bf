"use strict";

module.exports = {
    dist: {
        src: 'src/**/*.html',
        dest: 'dist/',
        options: {
            beautify: true,
            logOptions:true,
            //prefix: '//some-cdn',
            //relative: true,
            scripts: {
                bundle: [
                    'dist/js/vendor.js',
                    'dist/js/common.js'
                ],
                main: 'dist/js/main.app.js'
            },
            styles: {
                bundle: [
                    'dist/css/styles.css'
                ]
            }
        }
    }
};
