'use strict';

const gulp = require('gulp');

var sass = require('gulp-sass');



function defaultTask(cb) {
    gulp.task('sass', function () { gulp.src('src/assets/scss/bootstrap/utilities/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('src/assets/css')); });
    cb();
  }
  
  exports.default = defaultTask