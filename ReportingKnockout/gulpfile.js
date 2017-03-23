/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');

gulp.task('scripts', function () {
    gulp.src('./wwwroot/ts/reporting.js')
        .pipe(browserify({
            insertGlobals: false,
            debug: false
        })).pipe(gulp.dest('./wwwroot/js'));
});

gulp.task('default', ['scripts']);

gulp.task('watch', function () {
    watch('./wwwroot/ts/*.js', function () {
        gulp.start('scripts');
    });
});