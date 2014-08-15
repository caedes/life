var gulp  = require('gulp');
var jade = require('gulp-jade');
var _ = require('lodash');
var moment = require('moment');

var config = require('../config.json');

gulp.task('jade', function () {
  moment.locale('fr');
  moment.locale('fr', {
    months: 'janvier février mars avril mai juin juillet août septembre octobre novembre décembre'.split(' ')
  });
  config.events.map(function(event){
    event.displayDate = moment(event.date).format('D MMMM YYYY');

    return event;
  });

  config.sortedEvents = _.sortBy(config.events, 'date');

  gulp.src(config.paths.jade)
    .pipe(jade({
      locals: config
    }))
    .pipe(gulp.dest(config.paths.build));
});
