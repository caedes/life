var gulp  = require('gulp');

var config = require('../package.json').config;

gulp.task('build', ['clean', 'stylus', 'jade']);
