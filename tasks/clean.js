var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var config = require('../package.json').config;

gulp.task('clean', function () {
  return gulp.src(config.paths.build + '/**/*', { read: false })
    .pipe(rimraf());
});
