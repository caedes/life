var gulp  = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var config = require('../../../config/gulp.json');

gulp.task('browserify', function () {
  return browserify()
    .transform(reactify)
    .add(config.browserify.app)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.paths.build));
});
