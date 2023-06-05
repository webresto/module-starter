// TODO: add task for copy models and package.json in dist + publish from Gulp task
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const commonShakeify = require('common-shakeify');

gulp.task('buildModule', function() {
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
    .external('@webresto/core/libs/getEmitter')
    .external('@webresto/core')
    .external('@webresto/graphql/lib/graphqlHelper')
    .bundle()
    .pipe(source('module.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/dist'));
});

gulp.task('copyModels', function() {
  return gulp.src('./models/**/*.js')
    .pipe(gulp.dest('./dist/models'));
});

gulp.task('copyTranslates', function() {
  return gulp.src('./locales/**/*.json')
    .pipe(gulp.dest('./dist/locales'));
});

gulp.task('copyConfig', function() {
  return gulp.src('./config/**/*.js')
    .pipe(gulp.dest('./dist/config'));
});


gulp.task('copyFiles', function() {
  return gulp.src(['./README.md', './index.js', './package.json', './defaults.js', ''])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('buildModule', 'copyModels', 'copyFiles', 'copyTranslates'));