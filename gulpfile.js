const gulp = require('gulp'),
      sass = require('gulp-sass');
      
gulp.task('sass', ()=>{
    gulp.src('src/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./src'));
});

gulp.task('default',()=>{
    gulp.watch('src/sass/*.sass',['sass']);
});