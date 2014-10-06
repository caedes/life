var gulp  = require('gulp');
var jade = require('gulp-jade');
var moment = require('moment');

var config = require('../../../config/gulp.json');

gulp.task('html', function () {
  gulp.src(config.paths.jade)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('html:build', function () {
  gulp.src(config.paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(config.paths.build));
});
