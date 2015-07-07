'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var options = gulp.options;

gulp.task('lint', function () {
    return gulp.src([
        options.src + '/{,**/}*.js',
        '!' + options.src + '/{,**/}*.spec.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
});
