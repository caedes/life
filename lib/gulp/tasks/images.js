var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var config = require('../../../config/gulp.json');

gulp.task('images:build', function () {
    return gulp.src(config.paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.build + '/images'));
});

gulp.task('images', function () {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.build + '/images'));
});
