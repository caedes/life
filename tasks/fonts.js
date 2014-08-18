var gulp  = require('gulp');

var config = require('../config.json');

gulp.task('fonts', function () {
  gulp.src(config.paths.fonts)
    .pipe(gulp.dest(config.paths.build + '/fonts'));
});
