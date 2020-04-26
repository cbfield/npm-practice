const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

var paths = {
    root: {
        www:        'public'
    },
    src: {
        root:       'public/assets',
        html:       'public/**/*.html',
        css:        'public/assets/css/*.css',
        scss:       'public/assets/scss/*.scss',
        js:         'public/assets/js',
        vendors:    'public/assets/vendors',
        img:        'public/assets/img/**/*.+(png|jpg|gif|svg)',
    },
    dist: {
        root:       'public/dist',
        html:       'public/dist/*.html',
        css:        'public/dist/css',
        js:         'public/dist/js',
        vendors:    'public/dist/vendors',
        img:        'public/dist/img/**/*.+(png|jpg|gif|svg)',
    }
}

gulp.task('sass', () => {
    return gulp.src(paths.src.scss)
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest(paths.src.css))
      .pipe(browserSync.stream())
})

gulp.task('css', () => {
    return gulp.src(paths.src.css)
      .pipe()
})