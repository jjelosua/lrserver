var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    connect = require('gulp-connect');

//CHANGE IF NEEDED
var conf = {
    app_cwd:'../webapp/',
    port:8080
};

// test JS
gulp.task('test_js', function(){
    return gulp.src(['js/**/*.js'], { cwd: conf.app_cwd })
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter(stylish));
});

// SERVER TASKS
gulp.task('connect', function() {
  connect.server({
    root: conf.app_cwd,
    livereload: true,
    port:conf.port
  });
});

gulp.task('html', function () {
  gulp.src(['**/*.html'], { cwd: conf.app_cwd })
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch([conf.app_cwd+'**/*.css', 
              conf.app_cwd+'**/*.js',
              conf.app_cwd+'/**/*.html'], ['html', 'test_js']);
});

// development server
gulp.task('server', ['connect', 'watch']);

// default task
gulp.task('default', ['server']);