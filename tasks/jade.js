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
  config.exploits.map(function(exploit){
    exploit.displayDate = moment(exploit.date).format('D MMMM YYYY');

    return exploit;
  });

  config.sortedExploits = _.sortBy(config.exploits, 'date');

  gulp.src(config.paths.jade)
    .pipe(jade({
      locals: config
    }))
    .pipe(gulp.dest(config.paths.build));
});
