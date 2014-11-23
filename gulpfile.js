/**
 * Created by TechRocktheDestroyer on 10/30/2014.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var coffee_sources = [
  'components/coffee/*.coffee'
];

var sass_sources = [
  'components/sass/*.scss'
];

var js_sources = [
    'components/lib/jquery-2.1.1.js',
    'components/scripts/*.js'
];

gulp.task('js', function() {
   gulp.src(js_sources)
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
    gulp.src(sass_sources)
        .pipe(sass({style: 'expanded', lineNumbers: true})
            .on('error', gutil.log))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('coffee', function() {
   gulp.src(coffee_sources)
       .pipe(coffee({bare: true})
           .on('error', gutil.log))
       .pipe(gulp.dest('components/scripts'))
});

gulp.task('watch', function() {
    var server = livereload();
    gulp.watch(js_sources, ['js']);
    gulp.watch(sass_sources, ['sass']);
    gulp.watch(coffee_sources, ['coffee']);
    gulp.watch(['js/script.js', '*.html'], function(e) {
        server.changed(e.path);
    });
});

gulp.task('default', ['coffee', 'sass', 'js', 'watch']);
