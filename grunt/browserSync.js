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
    }

};