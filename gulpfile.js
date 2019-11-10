//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
// var scssFiles = 'src/assets/scss/**/*.scss';
// var cssDest = 'src/assets/css/';

var scssFiles = 'src/assets/scss/*.scss';
var cssDest = 'src/assets/css/';

gulp.task('style', async function () {
  gulp.src(scssFiles)
    .pipe(sass({ 
      errorLogToConsole: true,
      outputStyle: 'compressed' 
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(cssDest));
});
