var gulp  = require('gulp');
var jade = require('gulp-jade');
var _ = require('lodash');

var config = require('../config.json');

gulp.task('jade', function () {
  config.sortedEvents = _.sortBy(config.events, 'date');

  gulp.src(config.paths.jade)
    .pipe(jade({
      locals: config
    }))
    .pipe(gulp.dest(config.paths.build));
});
