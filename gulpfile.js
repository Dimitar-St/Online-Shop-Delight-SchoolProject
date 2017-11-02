const gulp = require('gulp'),
      istanbul = require('gulp-istanbul'),
      isparta = require('isparta'),
      mocha = require('gulp-mocha');

// To satrt gulp tasks write "gulp test" in CMD

gulp.task('pre-test', () => {
    gulp.src([
// To be included in test coverage all files should be required in the array
// !!! Not clear why, if required files are more than 13 or 14,others stays not included in test coverage

    './controllers/**/*.js',
       './models/**/*.js',
        './services/**/*.js'
//     './config/**/*.js',
//     './utils/validator.js',
    ])
    .pipe(istanbul({
        instrumenter: isparta.Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    return gulp.src([
// To be included in test exxcution all files should be required in the array
        './tests/unit/controllers/**/*.js'
    ])
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});