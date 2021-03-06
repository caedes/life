var gulp  = require('gulp');
var livereload = require('gulp-livereload');

var config = require('../../../config/gulp.json');

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(config.paths.jade, ['html']).on('change', livereload.changed);
  gulp.watch(config.paths.stylus, ['css']).on('change', livereload.changed);
});
