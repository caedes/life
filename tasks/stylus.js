var gulp  = require('gulp');
var stylus = require('gulp-stylus');

var config = require('../config.json');

gulp.task('stylus', function () {
  gulp.src(config.paths.stylus)
    .pipe(stylus({compress: true}))
    .pipe(gulp.dest(config.paths.build));
});
