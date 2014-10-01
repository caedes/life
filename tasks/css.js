var gulp  = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

var config = require('../config/gulp.json');

gulp.task('css', function () {
  gulp.src(config.paths.stylus)
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('css:build', function () {
  gulp.src(config.paths.stylus)
    .pipe(stylus({compress: true}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.build));
});
