var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

var config = require('../config/gulp.json');

gulp.task('react', function () {
  return gulp.src(config.paths.jsx)
    .pipe(react())
    .pipe(concat('react.js'))
    .pipe(gulp.dest(config.paths.build));
});
