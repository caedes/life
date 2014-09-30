var gulp  = require('gulp');
var concat = require('gulp-concat');

var config = require('../config/gulp.json');

gulp.task('javascript', ['react'], function () {
  gulp.src(config.paths.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.paths.build));
});
