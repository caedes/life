var gulp  = require('gulp');

gulp.task('build', ['clean', 'stylus', 'jade', 'images', 'fonts']);
