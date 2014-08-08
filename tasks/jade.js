var gulp  = require('gulp');
var jade = require('gulp-jade');

var config = require('../package.json').config;

gulp.task('jade', function () {
  gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest(config.paths.build));
});
