const gulp = require('gulp');
const eslint = require('gulp-eslint');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  const assetsFilter = filter(conf.path.src('assets/**/*.js'), {restore: true});

  return gulp.src(conf.path.src('**/*.js'))
    .pipe(assetsFilter)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(assetsFilter.restore)
    .pipe(gulp.dest(conf.path.tmp()));
}
