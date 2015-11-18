'use strict';

module.exports = {

    options: {
        debounceDelay: 600
    },
    exorcise: {
        files: ['dist/tmp/*.js'],
        tasks: ['exorcise:dev', 'clean:built']
    },
    quantity: {
        files: ['src/script/**/*.js'],
        tasks: ['jscs', 'jshint']
    },
    htmlbuild: {
        files: ['src/**/*.html'],
        tasks: ['htmlbuild']
    }
}
