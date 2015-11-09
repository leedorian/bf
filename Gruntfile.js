'use strict';
module.exports = function(grunt) {

  // Look for grunt config files in the 'grunt' directory
  require('load-grunt-config')(grunt);

  grunt.registerTask('default', [
    'clean:build',
    'browserify:vendor',
    'concurrent:watch',
    //'browserify:app'
  ]);
};

