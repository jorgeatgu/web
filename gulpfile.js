var gulp = require('gulp'),
    uglify = require('gulp-uglify');
newer = require('gulp-newer');
nano = require('gulp-cssnano');
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');
rename = require('gulp-rename');
sourcemaps = require('gulp-sourcemaps');
pxtorem = require('postcss-pxtorem');
stylelint = require('stylelint');
postcss = require('gulp-postcss');
autoprefixer = require('autoprefixer');
atImport = require('postcss-import');
reporter = require('postcss-reporter');
nested = require('postcss-nested');
sorting = require('postcss-sorting');


gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('/img'));
});

gulp.task('minify', function() {
    return gulp.src('./css/styles.css')
        .pipe(nano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});


var imgSrc = './src/img/**';
var imgDest = '/img';

gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(newer(imgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDest));
});

gulp.task('compress', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('/js'));
});

gulp.task('css', function() {
    var processors = [
        atImport,
        vars,
        nested,
        autoprefixer({
            browsers: ['last 2 version']
        }),
        pxtorem({
            root_value: 16,
            unit_precision: 2,
            prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'padding'],
            replace: true,
            media_query: false
        }),
        sorting({
            "sort-order": "csscomb"
        }),
        reporter({
            clearMessages: true
        })
    ];
    return gulp.src('./src/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('/css'));
});

gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/img/**', ['images']);
    gulp.watch('./dist/css/*.css', ['minify']);
});