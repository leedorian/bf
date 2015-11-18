'use strict';
module.exports = function (grunt) {

    // Look for grunt config files in the 'grunt' directory
    require('load-grunt-config')(grunt);

    grunt.registerTask('default', [
        'buildAll',
        'concurrent'
  ]);
    grunt.registerTask('buildAll',[
        'clean:build',
        'jshint',
        'jscs',
        'browserify:vendor',
        'browserify:app',
        'browserify:common',
        'exorcise:dev',
        'clean:built',
        'compass:dist',
        'htmlbuild'
    ]);
    /**
     * Generate the dependencies graph with colony
     */
    grunt.registerTask('colony', [
        'shell:colony',
        'browserSync:colony'
 ]);
};
