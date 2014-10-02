var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var config = require('../../../config/gulp.json');

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.build + '/images'));
});
