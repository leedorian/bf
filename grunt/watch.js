'use strict';

module.exports = {
    exorcise: {
        files:['dist/tmp/*.js'],
        tasks: ['exorcise:dev','clean:built'],
        options: {
            debounceDelay:600,
            interrupt: false,
            atBegin: true,
            reload: true
        }
    }
}