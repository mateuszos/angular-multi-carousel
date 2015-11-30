'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var options = gulp.options;

gulp.task('scripts', function () {
  return gulp.src([
      options.src + '/{,**/}*.js',
      '!' + options.src + '/{,**/}*.spec.js'
    ])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size());
});
