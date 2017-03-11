'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src('./source/images/png-sprites/*.png')
      .pipe($.gp.spritesmith({
			    imgName: 'sprite.png',
			    cssName: 'sprite.scss',
          cssFormat: 'scss',
          imgPath: '../images/png-sprite/sprite.png',
          algorithm: 'binary-tree',
			    padding: 5,
          cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
			  }));

    spriteData.img.pipe($.gulp.dest('./source/images/sprite'));
    spriteData.css.pipe($.gulp.dest('./source/style/common'));

    return spriteData;
  });
};
