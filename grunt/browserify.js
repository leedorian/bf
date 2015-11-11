'use strict';

module.exports = {
    options: {
        extensions: [],
        transform: [
            ['uglifyify',{global:true}]
        ],
        plugin: [
            [
                'remapify',[
                    {
                        src:'**/*.js',
                        expose:'common',
                        cwd:'./src/script/common/'
                    }
                ]
            ]
        ],
        external: [
          'jquery',
          'common:./src/script/common/*'
        ],
        browserifyOptions:{
            debug:true
        }
    },
    app: {
        files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: 'src/script/app',      // Src matches are relative to this path.
              src: ['**/*.js'], // Actual pattern(s) to match.
              dest: 'dist/tmp',   // Destination path prefix.
              flatten: true,
              ext: '.app.js',   // Dest filepaths will have this extension.
              extDot: 'first'   // Extensions in filenames begin after the first dot
            }
        ],
        options:{
            watch:true,
            keepAlive: true,
        }
    },
    common:{
          src:['src/script/common/**/*.js'],
          dest:'dist/tmp/common.js',
          options: {
            alias: [
                'common/x',
                'common/z'
            ],
            external: [
              'jquery'
            ],
            watch:true,
            keepAlive: true
          }
    },
    vendor: {
        // External modules that don't need to be constantly re-compiled
        src: ['jquery'],
        dest: 'dist/js/vendor.js',
        options: {
            alias: [
                'jquery:'
            ],
            browserifyOptions:{
                debug:false
            },
            external: null // Reset this here because it's not needed
        }
    }
};