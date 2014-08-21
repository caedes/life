var gulp  = require('gulp');
var concat = require('gulp-concat');

var config = require('../config.json');

gulp.task('javascript', function () {
  gulp.src(config.paths.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.paths.build));
});
