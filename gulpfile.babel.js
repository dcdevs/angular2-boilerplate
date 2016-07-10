// Gulp Plugins
import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import browserSync from 'browser-sync';

//Helper functions
function bundle(b) {
  return b.bundle()
    .on('error', (err) => console.log(err))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream:true}));
}
function copy(b) {
  return b.bundle()
    .on('error', (err) => console.log(err))
    .pipe(source('index.html'))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream:true}));
}
//Gulp Tasks
gulp.task('copy', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream:true}));
});
//Build
gulp.task('build', ['copy'], () => {
  const b = browserify('./src/app.js')
    .transform(babelify);
  return bundle(b);
});
//watch
gulp.task('watch', () => {
  const b = browserify('./src/app.js', watchify.args)
    .transform(babelify);

  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);

  gulp.watch(['src/**/**/*.html'], ['copy']);

  return bundle(w);
});

gulp.task('server', function() {
  return browserSync({
    open: true,
    server: {
      baseDir: "./public"
    }
  });
});

gulp.task('default', ['server', 'copy', 'watch']);