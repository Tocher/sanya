'use strict';

var gulp = require('gulp'),
    inline = require('gulp-inline'),
    minifyCss = require('gulp-minify-css'),
    watch = require('gulp-watch');

gulp.task('inline', function() {
    gulp.src('src/index.html')
        .pipe(inline({
            base: 'src/',
            css: minifyCss,
            disabledTypes: ['js']
          }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./src/*.html', ['inline']);
    gulp.watch('./src/*.css', ['inline']);
});

gulp.task('default', ['inline', 'watch']);
