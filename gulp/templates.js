'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var options = gulp.options;

gulp.task('templates', function () {

    return gulp.src([
        options.src + '/template/**/*.html'
    ])
    .pipe($.angularTemplatecache('module.tpl.js', {
      module: 'angularMultiCarousel'
    }))
    .pipe(gulp.dest(options.dist + '/js'));
});
