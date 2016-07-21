var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();
    input = './css/**/*.scss',
    output = './css';

gulp.task('css', function() {
    return gulp.src(input)
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['css', 'browser-sync'], function() {
    gulp.watch(input, ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
