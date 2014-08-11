var gulp  = require('gulp');

var config = require('../config');

gulp.task('build', ['clean', 'stylus', 'jade', 'images']);
