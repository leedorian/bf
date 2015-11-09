'use strict';

module.exports = {
    watch: {
        tasks: ['browserify:common','browserify:app'],
        options: {
            logConcurrentOutput: true
        }
    }
}