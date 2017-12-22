'use strict';
let gulp            = require('gulp'),
    sourceMaps      = require('gulp-sourcemaps'),
    webpack         = require("webpack"),
    webpackConfig   = require("./webpack.js"),
    gulpPlugin      = require('gulp-load-plugins')(),
    browserSync     = require('browser-sync').create(),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    postcss         = require('gulp-postcss'),
    minifyCss       = require('gulp-minify-css'),
    historyFallback = require('connect-history-api-fallback'),
    rename          = require("gulp-rename");

gulp.task('reload-js', ['scripts'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('reload-css', ['styles'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('styles', function() {
    return gulp.src('./assets/styles/index.scss')
        .pipe(sass())
        .pipe(sourceMaps.write({includeContent: true}))
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(postcss([
            autoprefixer({
                browsers : ["> 1%", "last 2 versions"]
            })
        ]))
        .pipe(sourceMaps.write('.'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/'));
});

gulp.task('scripts', function(cb) {
    webpack(webpackConfig.options, function(err, stats) {
        if (err) {
            throw new gulpPlugin.util.PluginError('webpack', err);
        }
        gulpPlugin.util.log('[webpack]', stats.toString({
            colors: true
        }));
        cb();
    });
});

gulp.task('browser-sync', ['scripts', 'styles'], function() {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./",
            index: 'index.html'
        },
        middleware: [
            historyFallback()
        ]
    });
});

gulp.task('watch', function() {
    gulp.watch('assets/**/*.js', ['reload-js']);
    gulp.watch('assets/**/*.scss', ['reload-css']);
    gulp.watch('assets/**/*.hbs', ['reload-js']);
});

gulp.task('serve', ['browser-sync', 'watch']);
gulp.task('build', ['scripts', 'styles']);