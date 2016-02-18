var gulp = require('gulp');
postcss = require('gulp-postcss');
nested = require('postcss-nested');
pxtorem = require('postcss-pxtorem');
sourcemaps = require('gulp-sourcemaps');
postCSS_InlineComment = require('postcss-inline-comment');
atImport = require('postcss-import');
cssnext = require('postcss-cssnext');
sorting = require('postcss-sorting');
autoprefixer = require('gulp-autoprefixer');
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');
uglify = require('gulp-uglify');
newer = require('gulp-newer');
rename = require('gulp-rename');
nano = require('gulp-cssnano');
notify = require("gulp-notify");

var imgSrc = './src/img/*';
var imgDist = './img';
var jsSrc = './src/js/*.js';
var jsDist = './js';

function errorAlertJS(error) {
    notify.onError({
        title: "Gulp JavaScript",
        subtitle: "Algo esta mal en tu JavaScript!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

function errorAlertPost(error) {
    notify.onError({
        title: "Gulp postCSS",
        subtitle: "Algo esta mal en tu CSS!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

gulp.task('imagemin', function() {
    return gulp.src(imgSrc)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(imgDist));
});



gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(newer(imgDist))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDist));
});

gulp.task('js-uglify', function() {
    return gulp.src(jsSrc)
        .pipe(uglify())
        .on("error", errorAlertJS)
        .pipe(gulp.dest(jsDist))
        .pipe(notify({
            message: 'JavaScript complete'
        }));
});

gulp.task('css', function() {
    var processors = [
        atImport,
        cssnext,
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
        postCSS_InlineComment
    ];
    return gulp.src('./src/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .on("error", errorAlertPost)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(notify({
            message: 'postCSS complete'
        }));
});

gulp.task('minify', function() {
    return gulp.src('./css/styles.css')
        .pipe(nano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'))
        .pipe(notify({
            message: 'CSSnano task complete'
        }));
});

gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/img/**', ['images']);
    gulp.watch('./css/*.css', ['minify']);
});