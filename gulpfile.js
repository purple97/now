/**
 * Created by zhh on 14-11-11.
 */
var gulp = require('gulp'),//基础模块
    rename = require('gulp-rename'),//重命名模块
    less   = require('gulp-less'), //less
    jshint = require('gulp-jshint'),//js语法检测
    uglify = require('gulp-uglify');//js压缩

gulp.task('jshint', function(){
   gulp.src('src/js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});
gulp.task('css', function(){
   gulp.src('src/less/index.less')
       .pipe(less())
       .pipe(gulp.dest('dest/css'));
});

gulp.task('script',function(){
    gulp.src('src/js/*.js')
        .pipe(rename({extname:'.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'))
});

gulp.task('default',function(){
    gulp.run('jshint','script');
    gulp.run('css');
    gulp.watch('src/js/*.js', function(){
        gulp.run('jshint','script');
    });
    gulp.watch('src/less/*.less', function(){
        gulp.run('css');
    });
});
