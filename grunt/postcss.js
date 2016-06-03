module.exports = {

    options: {
        map: true,
        processors: [
          require('autoprefixer')({ browsers: ['last 3 versions' ]}), // Autoprefixer Plugin
          require('postcss-opacity')(), // Adds opacity fallback for IE8
          require('postcss-color-rgba-fallback')(), // Adds RGBA fallback for IE8
          require('postcss-center')() // Allows centering by using top: center, left: center. Element to be centered must be wrapped in relative parent.
        ]
    },
    dev: {
        files: [{
            expand: true,
            cwd: '.tmp/css/',
            src: '*.css',
            dest: '.tmp/css/'
        }]
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'web/css/',
            src: '*.css',
            dest: 'web/css/'
        }]
    },
};
