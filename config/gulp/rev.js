const fs = require('fs-extra');
const gulp = require('gulp');
const path = require('path');
const rev = require('gulp-rev');

const paths = require('../paths');

const WEBPACK_MANIFEST = path.join(paths.appDist, 'scripts/rev-manifest.json');
const REV_MANIFEST = path.join(paths.appDist, 'rev-manifest.json');

module.exports = () => {
  if (fs.existsSync(WEBPACK_MANIFEST)) {
    fs.moveSync(WEBPACK_MANIFEST, REV_MANIFEST);
  }

  return gulp
    .src(['./dist/**/*.css', './dist/assets/images/**/*'], {
      base: paths.appDist,
    })
    .pipe(rev())
    .pipe(gulp.dest(paths.appDist))
    .pipe(rev.manifest({ cwd: paths.appDist, merge: true }))
    .pipe(gulp.dest(paths.appDist));
};
