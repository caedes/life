var gulp  = require('gulp');
var stylus = require('gulp-stylus');

var config = require('../package.json').config;

gulp.task('stylus', function () {
  gulp.src(config.paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(config.paths.build));
});
