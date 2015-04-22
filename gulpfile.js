var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');

gulp.task("default", function () {
  return gulp.src("app/js/**/*.jsx")
    .pipe(babel())
    .pipe(gulp.dest("views"));
});


