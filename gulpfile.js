var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./**/*.sass', ['sass'])
  gulp.watch('./**/*.html').on('change', browserSync.reload)
  gulp.watch('./*.js').on('change', browserSync.reload)
})

gulp.task('sass', function () {
  return gulp.src('./**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})
