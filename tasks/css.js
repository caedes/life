var gulp  = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

var config = require('../config.json');

gulp.task('css', function () {
  gulp.src(config.paths.stylus)
    .pipe(stylus({compress: true}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.build));
});
