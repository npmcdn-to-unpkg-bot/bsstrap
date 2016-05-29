var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include'), gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Where do you store your Sass files?
var sassDir = 'resources/scss';

// Which directory should Sass compile to?
var targetCSSDir = 'resources/css';

// Where the views are to watch for changes
var templatesDir = 'Views';


//
//  Compile SCSS
//  -----------------------
gulp.task('sass', function() {
  return gulp.src([
    "resources/scss/main.scss"
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./resources/css/'));
});


gulp.task('fileinclude', function() {
  gulp.src(['./Views/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});


/////////////////////////////////////////////////////////
/////////////////// --- WATCH  LR --- ///////////////////
/////////////////////////////////////////////////////////

gulp.task('watch', function () {

  browserSync({
      // proxy: "http://emblim.localhost/"
      server: {
        baseDir: "./"
      }
  });

  gulp.watch('resources/scss/**/*.scss', ['sass']);
  gulp.watch('resources/css/*.css').on('change', reload);
  gulp.watch('resources/js/*.js').on('change', reload);
  gulp.watch('resources/js/controller/*.js').on('change', reload);
  gulp.watch('resources/js/directive/*.js').on('change', reload);
  // gulp.watch(templatesDir + '/**/*.cshtml').on('change', reload);
  gulp.watch('./Views/*.html', ['fileinclude']);
  gulp.watch('*.html').on('change', reload);
  gulp.watch('Views/components/*.html').on('change', reload);
  gulp.watch('Views/partials/*.html').on('change', reload);

});


//
//  Gulp Tasks
//  --------------------
// command = "gulp"
gulp.task('default', [ 'fileinclude','sass', 'watch' ]);
// command = "gulp styles"
gulp.task('styles', [ 'sass' ]);

// handle errors function
function handleErrors (error) {
  console.log(error.toString());
  this.emit('end');
}