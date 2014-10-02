var gulp  = require('gulp');

gulp.task('build', ['html', 'css:build', 'javascript', 'images', 'fonts']);
