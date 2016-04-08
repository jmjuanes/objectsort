//Import dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Minimize the output file
gulp.task('minimize', function(){

  //Set the source file
  gulp.src('./dist/objectsort.js')

  //Minimize
  .pipe(uglify())

  //Save the file
  .pipe(rename('objectsort.min.js'))

  //Save in css/ folder
  .pipe(gulp.dest('./dist/'));

});

//Execute the tasks
gulp.task('default', ['minimize']);
