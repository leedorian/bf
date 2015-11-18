"use strict";

var _ = require('lodash');
var watchOptions = {
    options:{
        watch: true
    }
};
var compassOptions = {
      options: {
        config: 'src/style/scss/config.rb',
        cssDir: 'dist/css',
        sassDir: 'src/style/scss',
        imagesDir: '../images',
        noLineComments: true,
        outputStyle: 'compressed'
      }
};
module.exports = {
    dist: compassOptions,
    watch: _.merge({},compassOptions,watchOptions)
};
