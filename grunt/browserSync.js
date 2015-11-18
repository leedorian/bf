'use strict';
module.exports = {
    colony: {
        bsFiles: {
            src: [
              './colony/*.*'
            ]
        },
        options: {
            //watchTask: true,
            server: {
                baseDir: [
                  './colony'
              ],
                //directory: true
            },
            port: 7272,
            host: '127.0.0.1',
            reloadDelay: 2000,
            reloadOnRestart: false,
            browser: ['google chrome']

        }
    },
    app: {
        bsFiles: {
            src: [
              'dist/**/*.*'
            ]
        },
        options: {
            //watchTask: true,
            server: {
                baseDir: [
                  'dist/'
              ],
                //directory: true
            },
            port: 7373,
            host: '127.0.0.1',
            reloadDelay: 2000,
            reloadOnRestart: false,
            browser: ['google chrome']

        }
    }

};
