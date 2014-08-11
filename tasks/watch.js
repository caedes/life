var gulp  = require('gulp');
var livereload = require('gulp-livereload');

var config = require('../config');

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(config.paths.jade, ['jade']).on('change', livereload.changed);
  gulp.watch(config.paths.stylus, ['stylus']).on('change', livereload.changed);
});
