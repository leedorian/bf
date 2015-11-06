
//var serverRootUri = 'http://127.0.0.1:8000';
//var mochaPhantomJsTestRunner = serverRootUri + '/browser/test/index.html';

/* jshint -W106 */
var _extend = require('extend');
var fs = require('fs');
var path = require('path');
module.exports = function(grunt) {
   
   var ALIAS = {
            'foo': './x.js',
            'bar' : './y.js'
       };
   var appDir = './src/script/app/';
   var addDist = './dist/js/'
   var apps = fs.readdirSync('./src/script/app/');
   var APPFILES = [];
   apps.forEach(function(file) {
      var file = addDist+file;
      console.log(file);
      APPFILES.push(file);
   });
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    

    // browserify everything
    browserify: {
      lib:{
          src:['jquery'],
          dest:'./dist/js/lib.js'
      },
      app: {
        src: ['./src/script/app/**/*.js'],
        dest: ['./dist/js/app.js'],
        options: {
          plugin: [
            ['remapify',{src:'**/*.js',expose:'script',cwd:'./src/script'}]
          ],
          external:[
            'jquery'
          ]
        }
      },
      
    }  
  });


  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.registerTask('default', [
    'browserify'
  ]);
};
/* jshint +W106 */