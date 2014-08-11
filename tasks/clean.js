var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var config = require('../config.json');

gulp.task('clean', function () {
  return gulp.src(config.paths.build + '/**/*', { read: false })
    .pipe(rimraf());
});
