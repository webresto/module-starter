const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const commonShakeify = require('common-shakeify');

gulp.task('build', function() {
  return browserify({
      entries: './src/initialize.js',
      debug: false,
      standalone: 'module',
      builtins: false,
      detectGlobals: false
    })
    .transform(babelify.configure({
      presets: ["@babel/preset-env"]
    }))
    .plugin(commonShakeify)
    .external('@webresto/core/libs/hookTools')
    .external('@webresto/graphql/lib/graphqlHelper')
    .bundle()
    .pipe(source('module.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
