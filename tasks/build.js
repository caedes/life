var gulp  = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

var config = require('../package.json').config;

gulp.task('build', ['clean'], function () {
  gulp.src('src/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest(config.paths.build));

  gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest(config.paths.build));
});
