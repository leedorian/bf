'use strict';

module.exports = {
    watch: {
        tasks: [
            'simple-watch:quantity',
            'browserify:common_watch',
            'browserify:app_watch',
            'simple-watch:exorcise',
            'simple-watch:htmlbuild',
            'browserSync:app',
            'compass:watch'

        ],
        options: {
            logConcurrentOutput: true
        }
    }
}
