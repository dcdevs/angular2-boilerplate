// Gulp Plugins
import gulp from 'gulp';
import gutil from 'gulp-util';
import flatten from 'gulp-flatten';
import clean from 'gulp-clean';
import stylus from 'gulp-stylus';
import uglify from 'gulp-uglify';
import minifyCss from 'gulp-clean-css';
import nib from 'nib';
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
    .pipe(uglify({mangle: false}))
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

//Gulp Clean
gulp.task('clean', ()=>{
  return gulp.src('public/', {read: false})
  .pipe(clean());
});
//Buid css
gulp.task('css',  ()=>{
  return gulp.src('./src/app.styl')
  .pipe(stylus({
    use: [ nib() ]
  }))
  .pipe(minifyCss())
  .pipe(gulp.dest('./public/assets/css/'));
});
//Gulp Tasks
gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));

  return gulp.src('./src/app/**/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./public/templates'))
    .pipe(browserSync.reload({stream:true}));
});
//Build
gulp.task('build', ['copy','css'], () => {
  const b = browserify('./src/main.js')
    .transform(babelify);
  return bundle(b);
});
//watch
gulp.task('watch', () => {
  const b = browserify('./src/main.js', watchify.args)
    .transform(babelify);

  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);

  gulp.watch(['src/**/**/*.html'], ['copy']);
  gulp.watch(['src/**/**/*.styl'], ['css']);
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

//init server,copy all html to build folder with their css
gulp.task('init', ['server', 'copy', 'css', 'watch']);

gulp.task('default', ['clean'], ()=>{
  gulp.start('init');
});

