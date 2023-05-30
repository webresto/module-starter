const gulp = require('gulp');
const webpack = require('webpack-stream');
const packageJson = require('./package.json');

gulp.task('build', function() {
  const devDependencies = Object.keys(packageJson.devDependencies);

  return gulp.src('./src/initialize.js')
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'module.js'
      },
      externals: devDependencies.reduce((externals, dependency) => {
        externals[dependency] = `commonjs ${dependency}`;
        return externals;
      }, {}),
      target: 'node',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./dist'));
});
