'use strict';

module.exports = {
    dev: {
        options:{
            bundleDest: 'dist/js'
        },
        files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: 'dist/tmp',      // Src matches are relative to this path.
              src: ['**/*.js'], // Actual pattern(s) to match.
              dest: 'dist/js/',   // Destination path prefix.
              flatten: true,
              ext: '.map',   // Dest filepaths will have this extension.
              extDot: 'first'   // Extensions in filenames begin after the first dot
            }
        ]
    }
}