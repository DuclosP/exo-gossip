//-----------------------------------
// 1 | Declaration des variables
//-----------------------------------
let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let browserSync = require('browser-sync').create();


//-----------------------------------
// 2 | Mes tâches
//-----------------------------------

gulp.task('sassification', function() {
    //tout les fichier scss qui se trouve dans dev/css qui on l'extension scss
    return gulp.src('dev/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //rename le fichier qui sera sortit
    .pipe(autoprefixer({cascade: false}))
    .pipe(rename("./styles.min.css"))
    //le dossier destination du fichier
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('prod/css'));
});
gulp.task('htmlification', function() {
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'));
});
gulp.task('imagification', function() {
    return gulp.src('dev/img/*')
    .pipe(gulp.dest('prod/img'));
});
gulp.task('jsification', function() {
    // uglify sans pipeline
    return gulp.src('dev/js/*.js')
    .pipe(uglify()) 
    .pipe(rename(function (path) {
        // autre façon de rename qui permet d'ajout au nom déjà existant
        path.basename += ".min";
      }))
    .pipe(gulp.dest('prod/js'));
});
//live serveur
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "prod"
        }
    });
});

//-----------------------------------
// 3 | Exécution des tâches
//-----------------------------------
gulp.task('observation', gulp.parallel('imagification','browser-sync','sassification','htmlification','jsification', function(){
    //quand il y a un changment dans dev/css il relance la sassification
    gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('dev/*.html', gulp.series('htmlification'));
    gulp.watch('dev/js/*.js', gulp.series('jsification'));
    gulp.watch('prod/**/*').on('change', browserSync.reload);
}));
//remplace la tâche par defaut de gulp par la tâche observation
gulp.task('default', gulp.series('observation'));