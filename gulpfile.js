const gulp  = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => { });

gulp.task('compile-json', () => {
  gulp.src('./src/v1/*.json5')
    .pipe(merge({
      fileName: "ruby.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({beautify: true}))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/syntax/**/*.json5', [ 'compile-json' ]);
});
