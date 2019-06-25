var gulp = require('gulp');
var inject = require('gulp-inject');

//基本的
gulp.task('injectBase',function () {
    var target = gulp.src('./**/*.html');//根目录与二级目录的html文件
    var sources = gulp.src(['./Scripts/jquery-1.12.0.min.js','./Scripts/common.js', './css/*.css'], {read: false});
    /*relative：相对路径*/
    return target.pipe(inject(sources,{relative: true}))
        .pipe(gulp.dest('./'));
});

//兼容ie
gulp.task('injectIE',function () {
    var target = gulp.src('./**/*.html');//根目录与二级目录的html文件
    var sources = gulp.src(['./Scripts/common-ie.js'], {read: false});
    /*relative：相对路径*/
    return target.pipe(inject(sources,{relative: true,starttag: '<!--[if lt IE 9]>', endtag: '<![endif]-->'}))
        .pipe(gulp.dest('./'));
});

gulp.task('default',gulp.series('injectBase','injectIE',function() {
    // 将你的默认的任务代码放在这
    console.log('hello world');
}));

