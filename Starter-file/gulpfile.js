var gulp = require('gulp');
gulp.task('task-name',function() {
    // stuff here
gulp.task('Hello Zell');
});
gulp.task('task-name',function() {
    return gulp.src('source-files') // Get source files with gulp.
    .pipe(aGulpPlugin()) // sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
});
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
gulp.task('sass',function(){
    return gulp.src('source.files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});
gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
  });
// styles.scss
.testing {
    width: percentage(5/7);
} 
    
/* styles.css */
.testing {
    width: 71.42857%;
}gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
  })
  // Gulp 3.x watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

// NOTE! Gulp 4.x watch syntax (all the rest of the examples would need to be like this for Gulp 4
gulp.watch('files-to-watch', gulp.series(['tasks', 'to', 'run']));
// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['sass']); 
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
  })
