var gulp  = require('gulp');

gulp.task('build', ['html', 'css:build', 'browserify', 'images', 'fonts']);
