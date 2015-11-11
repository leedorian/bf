'use strict';

module.exports = {
    watch: {
        tasks: ['browserify:common','browserify:app','simple-watch:exorcise'],
        options: {
            logConcurrentOutput: true
        }
    }
}