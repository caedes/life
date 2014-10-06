var gulp  = require('gulp');

gulp.task('build', ['html:build', 'css:build', 'browserify', 'images', 'fonts']);
