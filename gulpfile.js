/**
 * Created by zhh on 14-11-11.
 */
var gulp = require('gulp'),//基础模块
    rename = require('gulp-rename'),//重命名模块
    less   = require('gulp-less'), //less
    jshint = require('gulp-jshint'),//js语法检测
    uglify = require('gulp-uglify');//js压缩

gulp.task('css', function(){
    gulp.src('lib/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('jshint', function(){
   gulp.src('lib/js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

gulp.task('script',function(){
    gulp.src('lib/js/*.js')
        .pipe(rename({extname:'.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default',function(){
    gulp.run('css');
    gulp.watch('lib/less/*.less', function(){
        gulp.run('css');
    });
    gulp.run('jshint','script');
    gulp.watch('lib/js/*.js', function(){
        gulp.run('jshint','script');
    });
});
