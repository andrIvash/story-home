'use strict';

module.exports = function() {
  $.gulp.task('copy.image', function() {
    return $.gulp.src(['./source/images/**/*.*', '!./source/images/png-sprites/*.*', '!./source/images/svg-sprites/*.*'], { since: $.gulp.lastRun('copy.image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};